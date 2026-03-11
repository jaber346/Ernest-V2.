
const { getRandomInt } = require('../lib/utils');
module.exports = {
  name: 'roll',
  aliases: ['dice'],
  category: 'fun',
  desc: 'Lance un dé.',
  async execute(sock, m, ctx) {
    const max = Number(ctx.args[0] || 6);
    await ctx.reply(`🎲 Résultat: ${getRandomInt(1, Math.max(2, max))}`);
  }
};
