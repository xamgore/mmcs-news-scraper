import osmos from 'osmosis'
import toText from 'html-to-text'
import run from './runner'
import db from './database'
import tm from './telegram'

let scraper = osmos
  .get('https://mmcs.sfedu.ru/')
  .find('.teaserarticles .news_item_f')
  .set({
    title: '.article_title',
    date: ['.createdate > .numbers'],
    author: '.createby', 'text': '.newsitem_text:html',
    link: 'a.btn.readon @href'
  })


let options = { wordwrap: false, linkHrefBaseUrl: 'https://mmcs.sfedu.ru' }

let prepare = posts =>
  posts.reverse()
    .map(p => ({
      ...p,
      date:   p.date.join('.'),
      title:  p.title.trim(),
      author: p.author.trim().replace(/^Автор: /, ''),
      text:   toText.fromString(p.text, options).trim()
    }))


let skipExisting = posts =>
  posts.filter(p =>
    0 === db.get('posts')
            .find({id:`${p.date}|${p.title}`})
            .size().value())


let savePosts = posts => {
  let storage = db.get('posts')
  for (let p of posts) storage = storage.push({ id:`${p.date}|${p.title}` })
  storage.write()
}


const channel = process.env.MMCS_NEWS_TELEGRAM_CHANNEL
const devchat = process.env.MMCS_NEWS_DEV_CHAT

let sendToChat = async posts => {
  for (let p of posts) {
    let lnk = p.link ? `<a href="https://mmcs.sfedu.ru${p.link}">Читать дальше</a>\n` : ''
    let msg = `<b>${p.title}</b>\n\n${p.text}\n${lnk}\n<em>${p.author}</em>`

    try { await tm.sendMessage(channel, msg, { parse_mode: 'HTML' }) }
    catch (e) { tm.sendMessage(devchat, e.toString()) }
  }

  return posts
}


run(scraper)
  .then(prepare)
  .then(skipExisting)
  .then(ps => console.log(`New posts: ${ps.length}`) || ps)
  .then(sendToChat)
  .then(savePosts)
