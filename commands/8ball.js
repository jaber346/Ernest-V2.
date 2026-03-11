
const { pick } = require('../lib/utils');
module.exports = {
  name: '8ball',
  aliases: ['ask'],
  category: 'fun',
  desc: 'Répond à une question.',
  async execute(sock, m, ctx) {
    const q = ctx.args.join(' ');
    if (!q) return ctx.reply(`Utilisation: ${ctx.prefix}8ball vais-je réussir ?`);
    await ctx.reply(`🎱 Question: ${q}\nRéponse: ${pick(['Oui', 'Non', 'Certainement', 'Peu probable', 'Essaye encore'])}`);
  }
};
