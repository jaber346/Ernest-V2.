
const { getRandomInt } = require('../lib/utils');
module.exports = {
  name: 'ship',
  aliases: [],
  category: 'fun',
  desc: 'Teste la compatibilité.',
  async execute(sock, m, ctx) {
    const names = ctx.args.join(' ');
    if (!names) return ctx.reply(`Utilisation: ${ctx.prefix}ship Alice & Bob`);
    await ctx.reply(`❤️ Compatibilité pour ${names}: ${getRandomInt(1, 100)}%`);
  }
};
