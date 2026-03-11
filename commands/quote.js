
const { quotes } = require('../systeme/constants');
const { pick } = require('../lib/utils');
module.exports = {
  name: 'quote',
  aliases: ['citation'],
  category: 'fun',
  desc: 'Affiche une citation.',
  async execute(sock, m, ctx) {
    await ctx.reply(`📝 ${pick(quotes)}`);
  }
};
