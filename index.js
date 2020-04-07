const TelegramBot = require('node-telegram-bot-api');

const token = '1171970791:AAGjxe61KOv8HTCXZDzk3XIBO5YvNdjq_I4';

const bot = new TelegramBot(token, {polling: true});



bot.onText(/\/start/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  bot.sendMessage(chatId, `🙋Рад тебя приветствовать, ${msg.chat.first_name}. Ты как никто другой можешь мне помочь в развитии UFace 🐉 Для этого просто напиши свои пожелания или предложения этому боту🤖`);


  
});


bot.on('message', (msg) => {
    const chatId = msg.chat.id;
   
    if(msg.text !== "/start") {
        bot.sendMessage(-1001375812627, msg.text)
        bot.sendMessage(chatId, `${msg.chat.first_name} Received your feedback 🙏`);
    }
  });



