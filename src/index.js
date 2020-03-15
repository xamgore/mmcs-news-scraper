import config from '../config.json'
import { fromXML } from 'from-xml'
import fetch from 'node-fetch'
import loadDB from './database'
import { bot, instantView } from './telegram'


let grabRSS = url =>
  fetch(url).then(res => res.text()).then(fromXML)


// check the `rss-example.json` file for the structure
// replace http://mmcs.sfedu.ru/147-news/sunmathevents/1617-%D0%BD%D...
// with a short version, http://../1617
let extractPosts = xml =>
  xml.rss.channel.item.reverse()
    .map(p => {
      p.link = p.link.replace(/(^.*?news.*?)(?:\d{4}–\d\d-\d\d–\d\d-\d\d–\d\d\/)?(\d+).*/, '$1$2')
      return p
    })


let skipExisting = db => posts =>
  posts.filter(p =>
    0 === db.get('posts').find({ id: `${p.link}` }).size().value())


let savePosts = db => posts => {
  let storage = db.get('posts')
  for (let p of posts) storage = storage.push({ id: `${p.link}` })
  storage.write()
}


let sleep = ms => new Promise(resolve => setTimeout(resolve, ms))


let sendToChat = async posts => {
  const successfullySent = []

  for (let p of posts) {
    let msg = `[\u200a](${instantView(p.link)})\u200a[${p.title}](${p.link})`
    await sleep((1 + Math.random()) * 2000)

    try {
      for (let chat of new Set(config.telegram.chatIds)) {
        await bot.sendMessage(chat, msg, { parse_mode: 'Markdown' })
        await sleep((1 + Math.random()) * 1000)
      }

      successfullySent.push(p)
    } catch (e) {
      bot.sendMessage(config.telegram.devChatId, e.toString())
      throw e
    }
  }

  return successfullySent
}


export {
  sendToChat
}


if (process.mainModule === module) {
  loadDB.then(db =>
    grabRSS(config.rssFeedUrl)
      .then(extractPosts)
      .then(skipExisting(db))
      .then(ps => console.log(`New posts: ${ps.length}`) || ps)
      .then(sendToChat)
      .then(savePosts(db)))
}
