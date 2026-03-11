
const { resetDb } = require('../systeme/database');
module.exports = {
  name: 'resetdb',
  aliases: [],
  category: 'owner',
  desc: 'Réinitialise la base JSON.',
  owner: true,
  async execute(sock, m, ctx) {
    resetDb();
    await ctx.reply('♻️ Base de données réinitialisée.');
  }
};
