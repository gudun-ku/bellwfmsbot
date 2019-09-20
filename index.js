const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "922572728:AAHI-1xkPMhFFniA58O_bnsZB4wmwu9I0KM";

const bot = new TelegramBot(TOKEN, {
  polling: true
});

bot.on("message", msg => {
  console.log(msg);
  bot.sendMessage(msg.chat.id, "Здравствуй, " + msg.from.first_name + "!");
});
