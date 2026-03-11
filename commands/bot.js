
const config = require('../systeme/config');
module.exports = {
  name: 'bot',
  aliases: ['aboutbot'],
  category: 'general',
  desc: 'Informations sur le bot.',
  async execute(sock, m, ctx) {
    await ctx.reply(`🤖 Nom: ${config.BOT_NAME}\n👑 Owner: ${config.OWNER_NAME}\n🔧 Stack: Node.js + Baileys + Express\n📁 Structure: commands / systeme / lib`);
  }
};
