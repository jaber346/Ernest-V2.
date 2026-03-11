
const { truths } = require('../systeme/constants');
const { pick } = require('../lib/utils');
module.exports = {
  name: 'truth',
  aliases: [],
  category: 'fun',
  desc: 'Question vérité.',
  async execute(sock, m, ctx) {
    await ctx.reply(`🧠 Vérité: ${pick(truths)}`);
  }
};
