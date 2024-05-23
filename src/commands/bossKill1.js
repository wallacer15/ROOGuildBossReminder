// src/commands/bossKill1.js
module.exports = {
    name: 'bossKill1',
    description: 'Define um lembrete para quando um boss renascer',
    execute(message, args, roleId) {
      const bossName = args[0];
      
      if (!bossName) {
        message.reply('Por favor, forneça o nome do boss. Uso: !bossKill1 <nameoftheboss>');
        return;
      }
  
      message.reply(`O boss ${bossName} será anunciado em 2 horas.`);
  
      setTimeout(() => {
        const role = message.guild.roles.cache.get(roleId);
        if (role) {
          message.channel.send(`${role} O boss ${bossName} renasceu!`);
        } else {
          message.channel.send(`O cargo com ID ${roleId} não foi encontrado.`);
        }
      }, 2 * 60 * 60 * 1000); // 2 horas em milissegundos
    },
  };
  