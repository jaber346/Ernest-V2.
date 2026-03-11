
const { toTitleCase } = require('../lib/utils');
module.exports = {
  name: 'title',
  aliases: ['titlecase'],
  category: 'utility',
  desc: 'Passe le texte en Title Case.',
  async execute(sock, m, ctx) {
    const text = ctx.args.join(' ');
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}title bonjour tout le monde`);
    await ctx.reply(toTitleCase(text));
  }
};
