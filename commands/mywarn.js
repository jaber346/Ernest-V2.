
const { getGroup } = require('../systeme/database');
module.exports = {
  name: 'mywarn',
  aliases: [],
  category: 'group',
  desc: 'Affiche tes warnings.',
  group: true,
  async execute(sock, m, ctx) {
    const count = getGroup(ctx.from).warnings[ctx.sender] || 0;
    await ctx.reply(`⚠️ Tu as ${count} avertissement(s).`);
  }
};
