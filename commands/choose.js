
const { pick } = require('../lib/utils');
module.exports = {
  name: 'choose',
  aliases: ['pick'],
  category: 'fun',
  desc: 'Choisit parmi plusieurs options séparées par |.',
  async execute(sock, m, ctx) {
    const text = ctx.args.join(' ');
    const items = text.split('|').map(x => x.trim()).filter(Boolean);
    if (items.length < 2) return ctx.reply(`Utilisation: ${ctx.prefix}choose rouge | vert | bleu`);
    await ctx.reply(`🎯 Je choisis: ${pick(items)}`);
  }
};
