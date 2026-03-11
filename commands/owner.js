
const config = require('../systeme/config');
module.exports = {
  name: 'owner',
  aliases: ['creator', 'dev'],
  category: 'general',
  desc: 'Affiche le propriétaire du bot.',
  async execute(sock, m, ctx) {
    await ctx.reply(`👑 Owner: ${config.OWNER_NAME}\n📞 Numéro: ${config.OWNER_NUMBER}`);
  }
};
