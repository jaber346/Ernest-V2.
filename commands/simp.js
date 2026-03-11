
const { getRandomInt } = require('../lib/utils');
module.exports = {
  name: 'simp',
  aliases: [],
  category: 'fun',
  desc: 'Commande fun simp.',
  async execute(sock, m, ctx) {
    const name = ctx.args.join(' ') || ctx.pushName;
    await ctx.reply(`🥹 ${name} est simp à ${getRandomInt(1, 100)}%`);
  }
};
