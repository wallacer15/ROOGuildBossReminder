// config/config.js
require('dotenv').config();

module.exports = {
  token: process.env.DISCORD_TOKEN,
  roleId: process.env.ROLE_ID,
};
