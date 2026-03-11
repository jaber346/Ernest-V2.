
const { stylize } = require('../lib/styles');
module.exports = {
  name: 'bubble',
  aliases: [],
  category: 'textstyle',
  desc: 'Texte en style bubble.',
  async execute(sock, m, ctx) {
    const text = ctx.args.join(' ');
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}bubble bonjour`);
    await ctx.reply(stylize(text, 'bubble'));
  }
};
