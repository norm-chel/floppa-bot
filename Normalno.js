const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Запустился ${client.user.tag}!`);
  });

  client.on('message', msg => {
    
    if (msg.content === ':привет') 
      msg.reply(`Привет!`);
      if (msg.content === ':хелп') 
      msg.reply(`Команды: привет, как дела, nikhro. (префикс :)`);
      if (msg.content === ':как дела') 
      msg.reply(`нормально!`);
      if (msg.content === ':nikhro') 
      msg.reply(`14-16-11 5-18-21-4, 10 12-19-20-1-20-10 20-6-2-6 2-29 15-6 17-16-14-6-26-1-13-16 19 15-10-14 17-16-9-15-1-12-16-14-10-20-30-19-33`);
      if (msg.content === ':Nikhro') 
      msg.reply(`14-16-11 5-18-21-4, 10 12-19-20-1-20-10 20-6-2-6 2-29 15-6 17-16-14-6-26-1-13-16 19 15-10-14 17-16-9-15-1-12-16-14-10-20-30-19-33`);
      if (msg.content === ':Привет') 
      msg.reply(`Привет!`);
      if (msg.content === ':Хелп') 
      msg.reply(`Команды: привет, как дела, nikhro. (префикс :)`);
      if (msg.content === ':Как дела') 
      msg.reply(`нормально!`);
      if (msg.content === ': nikhro') 
      msg.reply(`14-16-11 5-18-21-4, 10 12-19-20-1-20-10 20-6-2-6 2-29 15-6 17-16-14-6-26-1-13-16 19 15-10-14 17-16-9-15-1-12-16-14-10-20-30-19-33`);
      if (msg.content === ': Nikhro') 
      msg.reply(`14-16-11 5-18-21-4, 10 12-19-20-1-20-10 20-6-2-6 2-29 15-6 17-16-14-6-26-1-13-16 19 15-10-14 17-16-9-15-1-12-16-14-10-20-30-19-33`);
      if (msg.content === ': привет') 
      msg.reply(`Привет!`);
      if (msg.content === ': хелп') 
      msg.reply(`Команды: привет, как дела, nikhro. (префикс :)`);
      if (msg.content === ': как дела') 
      msg.reply(`нормально!`);
      if (msg.content === ': Привет') 
      msg.reply(`Привет!`);
      if (msg.content === ': Хелп') 
      msg.reply(`Команды: привет, как дела, nikhro. (префикс :)`);
      if (msg.content === ': Как дела') 
      msg.reply(`нормально!`);
  })
  client.login(process.env.BOT_TOKEN); 