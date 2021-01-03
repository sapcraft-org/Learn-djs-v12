const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('SapBot Came Online!');
  }
});

client.login('NzY0NDA0NTE1NTE5OTg3NzEz.X4FxLg.9r2Nq3Pu2GnyEI_MDYy1bdE4YQg');