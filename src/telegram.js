import Socks5HttpsAgent from 'socks5-https-client/lib/Agent'
import TelegramBot from 'node-telegram-bot-api'
import config from '../config.json'


const socksProxy = {
  agentClass: Socks5HttpsAgent,
  agentOptions: {
    // http://spys.one/en/socks-proxy-list/
    socksHost: 'ns3005469.ip-151-80-100.eu',
    socksPort: 54005,
    // socksUsername: '',
    // socksPassword: '',
  },
}

// change polling to true, so you will get chat id from bot
// bot.onText(/chat id/, msg => bot.sendMessage(msg.chat.id, msg.chat.id))

export const bot = new TelegramBot(config.telegram.token, {
  polling: false,
  request: {
    proxy: config.telegram.proxy,
  },
})

export function instantView(url) {
  let link = encodeURIComponent(url)
  return `https://t.me/iv?url=${link}&rhash=${(config.telegram.instantViewRhash)}`
}
