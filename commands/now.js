
const config = require('../systeme/config');
module.exports = {
  name: 'now',
  aliases: ['time', 'date'],
  category: 'utility',
  desc: 'Affiche la date et l’heure.',
  async execute(sock, m, ctx) {
    const date = new Date().toLocaleString('fr-FR', { timeZone: config.TIMEZONE });
    await ctx.reply(`📅 ${date}\n🌍 ${config.TIMEZONE}`);
  }
};
