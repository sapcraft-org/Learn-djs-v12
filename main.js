const Discord = require('discord.js');
const TOKEN = process.env.TOKEN;
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('SapBot Came Online!');
  }
});
