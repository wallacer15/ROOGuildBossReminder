// src/events/messageCreate.js
const bossKillCommand = require('../commands/bossKill');

module.exports = {
  name: 'messageCreate',
  execute(message, client) {
    if (!message.content.startsWith('!') || message.author.bot) return;

    const args = message.content.slice(1).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (commandName === 'bosskill') {
      if(message.channel.name === 'guild-dungeon-mvp'){
       return bossKillCommand.execute(message, args, client.config.roleId);
      }
      if(message.channel.name === 'guild-dungeon-mvp-whaies'){
        bossKillCommand.execute(message, args, 1245442094957330532);
      }
      
    }
  },
};
