import { fromXML } from 'from-xml'
import fetch from 'node-fetch'
import loadDB from './database'
import tm from './telegram'


const CHAT_IDS = JSON.parse(process.env.TELEGRAM_SINKS)
const DEV_CHAT_ID = process.env.MMCS_NEWS_DEV_CHAT

const FEED_URL = process.env.RSS_FEED_URL
const INSTANT_VIEW_HASH = process.env.INSTANT_VIEW_HASH  // parse by rules in xpath.txt


let grabRSS = url =>
  fetch(url).then(res => res.text()).then(body => fromXML(body))


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
    0 === db.get('posts').find({id:`${p.link}`}).size().value())


let savePosts = db => posts => {
  let storage = db.get('posts')
  for (let p of posts) storage = storage.push({ id:`${p.link}` })
  storage.write()
}


let sleep = ms => new Promise(resolve => setTimeout(resolve, ms))


let sendToChat = async posts => {
  for (let p of posts) {
    let link = encodeURIComponent(p.link)
    let msg = `[\u200a](https://t.me/iv?url=${link}&rhash=${INSTANT_VIEW_HASH})\u200a[${p.title}](${p.link})`
    await sleep((1 + Math.random()) * 2000)

    try {
      for (let chat of CHAT_IDS)
        await tm.sendMessage(chat, msg, { parse_mode: 'Markdown' })
    }
    catch (e) { tm.sendMessage(DEV_CHAT_ID, e.toString()); throw e }
  }

  return posts
}


loadDB.then(db =>
  grabRSS(FEED_URL)
    .then(extractPosts)
    .then(skipExisting(db))
    .then(ps => console.log(`New posts: ${ps.length}`) || ps)
    .then(sendToChat)
    .then(savePosts(db)))
