// src/events/messageCreate.js
const bossKill1Command = require('../commands/bossKill1');
const bossKill2Command = require('../commands/bossKill2');

module.exports = {
  name: 'messageCreate',
  execute(message, client) {
    if (!message.content.startsWith('!') || message.author.bot) return;

    const args = message.content.slice(1).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (commandName === 'bossKill1') {
      bossKill1Command.execute(message, args, client.config.roleId);
    } else if (commandName === 'bossKill2') {
      bossKill2Command.execute(message, args, client.config.roleId);
    }
  },
};
