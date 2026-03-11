
const { stylize } = require('../lib/styles');
module.exports = {
  name: 'mono',
  aliases: [],
  category: 'textstyle',
  desc: 'Texte en style mono.',
  async execute(sock, m, ctx) {
    const text = ctx.args.join(' ');
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}mono bonjour`);
    await ctx.reply(stylize(text, 'mono'));
  }
};
