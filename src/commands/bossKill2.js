// src/commands/bossKill2.js
const { getFutureTimeUTC4Plus2Hours } = require('../utils');

module.exports = {
  name: 'bosskill2',
  description: 'Defines reminder for Guild Dungeon boss respawn',
  execute(message, args, roleId) {
    const bossName = args[0];
    const futureTime = getFutureTimeUTC4Plus2Hours();

    if (!bossName) {
      message.reply('Please, tell me the name of the boss. Eg: !bossKill1 <nameoftheboss>');
      return;
    }

    message.reply(`${bossName} will spawn in 2 hours, ${futureTime} ingame time`);

    setTimeout(
      () => {
        const role = message.guild.roles.cache.get(roleId);
        if (role) {
          message.channel.send(`${role} ${bossName} just spawned!`);
        } else {
          message.channel.send(`O cargo com ID ${roleId} não foi encontrado.`);
        }
      },
      2 * 60 * 60 * 1000,
    ); // 2 horas em milissegundos
  },
};
