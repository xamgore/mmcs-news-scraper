import { fromXML } from 'from-xml'
import fetch from 'node-fetch'
import db from './database'
import tm from './telegram'



let grabRSS = url =>
  fetch(url).then(res => res.text()).then(body => fromXML(body))


// check the `rss-example.json` file for the structure
let extractPosts = xml => xml.rss.channel.item.reverse()


let skipExisting = posts =>
  posts.filter(p =>
    0 === db.get('posts')
            .find({id:`${p.link}`})
            .size().value())


let savePosts = posts => {
  let storage = db.get('posts')
  for (let p of posts) storage = storage.push({ id:`${p.link}` })
  storage.write()
}


const chat    = process.env.MMCS_NEWS_TELEGRAM_CHAT
const channel = process.env.MMCS_NEWS_TELEGRAM_CHANNEL
const devchat = process.env.MMCS_NEWS_DEV_CHAT

let sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

let sendToChat = async posts => {
  for (let p of posts) {
    let link = encodeURIComponent(p.link)
    let instantViewHash = 'f3da38349d0127'  // check xpath.txt
    let msg = `[${p.title}](${p.link})[\u200a](https://t.me/iv?url=${link}&rhash=${instantViewHash})`
    await sleep(Math.random() * 2000 + 2000)

    try {
      await tm.sendMessage(chat,    msg, { parse_mode: 'Markdown' })
      await tm.sendMessage(channel, msg, { parse_mode: 'Markdown' })
    }
    catch (e) { tm.sendMessage(devchat, e.toString()); throw e }
  }

  return posts
}


const FEED_URL = 'http://mmcs.sfedu.ru/index.php?option=com_content&view=category&format=feed&type=rss'

grabRSS(FEED_URL)
  .then(extractPosts)
  .then(skipExisting)
  .then(ps => console.log(`New posts: ${ps.length}`) || ps)
  .then(sendToChat)
  .then(savePosts)
