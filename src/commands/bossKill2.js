// src/commands/bossKill2.js
module.exports = {
    name: 'bossKill2',
    description: 'Define um lembrete para quando um boss renascer (comando alternativo)',
    execute(message, args, roleId) {
      const bossName = args[0];
      
      if (!bossName) {
        message.reply('Por favor, forneça o nome do boss. Uso: !bossKill2 <nameoftheboss>');
        return;
      }
  
      message.reply(`O boss ${bossName} (comando 2) será anunciado em 2 horas.`);
  
      setTimeout(() => {
        const role = message.guild.roles.cache.get(roleId);
        if (role) {
          message.channel.send(`${role} O boss ${bossName} (comando 2) renasceu!`);
        } else {
          message.channel.send(`O cargo com ID ${roleId} não foi encontrado.`);
        }
      }, 2 * 60 * 60 * 1000); // 2 horas em milissegundos
    },
  };
  