import TelegramBot from 'node-telegram-bot-api'

const bot = new TelegramBot(process.env.MMCS_NEWS_TELEGRAM_TOKEN, {
  polling: false
})

// change polling to true, so you will get chat id from bot
// bot.onText(/chat id/, msg => bot.sendMessage(msg.chat.id, msg.chat.id))

export default bot
