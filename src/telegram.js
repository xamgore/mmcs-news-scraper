import Socks5HttpsAgent from 'socks5-https-client/lib/Agent'
import TelegramBot from 'node-telegram-bot-api'

const bot = new TelegramBot(process.env.MMCS_NEWS_TELEGRAM_TOKEN, {
  polling: false,
  request: {
    agentClass: Socks5HttpsAgent,
    agentOptions: {
      // http://spys.one/en/socks-proxy-list/
      socksHost: 'ns3005469.ip-151-80-100.eu',
      socksPort: 54005,
      // socksUsername: '',
      // socksPassword: '',
    },
  },
})

// change polling to true, so you will get chat id from bot
// bot.onText(/chat id/, msg => bot.sendMessage(msg.chat.id, msg.chat.id))

export default bot
