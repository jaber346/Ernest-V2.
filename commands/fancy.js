
const { stylize } = require('../lib/styles');
module.exports = {
  name: 'fancy',
  aliases: [],
  category: 'textstyle',
  desc: 'Texte en style fancy.',
  async execute(sock, m, ctx) {
    const text = ctx.args.join(' ');
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}fancy bonjour`);
    await ctx.reply(stylize(text, 'fancy'));
  }
};
