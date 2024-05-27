const { Client, GatewayIntentBits } = require('discord.js');
const config = require('../config/config');
const bossKill = require('./commands/bossKill');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.commands = new Map(); // Definindo o objeto commands como um Map vazio

// Adicionar cada comando manualmente ao objeto commands
client.commands.set(bossKill.name, bossKill);

client.config = config;

client.on('messageCreate', async (message) => {
  if (!message.content.startsWith('!') || message.author.bot) return;

  const args = message.content.slice(1).trim().split(/ +/);

  const commandName = args.shift().toLowerCase();

  if (!client.commands.has(commandName.toLocaleLowerCase())) return;

  const command = client.commands.get(commandName);

  try {
    command.execute(message, args, client.config.roleId);
  } catch (error) {
    console.error(error);
    message.reply('Ocorreu um erro ao executar o comando!');
  }
});

client.login(config.token);
