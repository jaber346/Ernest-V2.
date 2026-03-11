
const { loadDb, saveDb } = require('../systeme/database');
module.exports = {
  name: 'prefix',
  aliases: ['setprefix'],
  category: 'owner',
  desc: 'Change le préfixe du bot.',
  owner: true,
  async execute(sock, m, ctx) {
    const db = loadDb();
    if (!ctx.args[0]) return ctx.reply(`🔑 Préfixe actuel: ${db.settings.prefix}`);
    db.settings.prefix = ctx.args[0];
    saveDb();
    await ctx.reply(`✅ Nouveau préfixe défini sur: ${ctx.args[0]}`);
  }
};
