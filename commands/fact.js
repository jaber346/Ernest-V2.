
const { facts } = require('../systeme/constants');
const { pick } = require('../lib/utils');
module.exports = {
  name: 'fact',
  aliases: [],
  category: 'fun',
  desc: 'Affiche un fait.',
  async execute(sock, m, ctx) {
    await ctx.reply(`📚 ${pick(facts)}`);
  }
};
