
const { stylize } = require('../lib/styles');
module.exports = {
  name: 'bold',
  aliases: [],
  category: 'textstyle',
  desc: 'Texte en style bold.',
  async execute(sock, m, ctx) {
    const text = ctx.args.join(' ');
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}bold bonjour`);
    await ctx.reply(stylize(text, 'bold'));
  }
};
