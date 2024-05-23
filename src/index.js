// src/index.js
const { Client, GatewayIntentBits } = require('discord.js');
const { Translate } = require('@google-cloud/translate').v2;
const config = require('../config/config');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const translate = new Translate({ projectId: 'your-project-id' }); // Substitua 'your-project-id' pelo ID do seu projeto no Google Cloud

client.config = config;

client.on('messageCreate', async message => {
  if (!message.content.startsWith('!') || message.author.bot) return;

  const args = message.content.slice(1).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName);

  try {
    // Detectar o idioma da mensagem do usuário
    const [detection] = await translate.detect(args.join(' '));
    const detectedLanguage = detection.language;

    // Definir o idioma de resposta para o idioma detectado
    translate.setTarget(detectedLanguage);

    // Executar o comando com a mensagem original e os argumentos
    command.execute(message, args, client.config.roleId);

    // Se quiser traduzir a resposta do bot para o idioma detectado, você pode fazer assim:
    /*
    const translatedResponse = await translate.translate('Your response text here');
    message.channel.send(translatedResponse);
    */
  } catch (error) {
    console.error(error);
    message.reply('Ocorreu um erro ao executar o comando!');
  }
});

// Restante do código...
