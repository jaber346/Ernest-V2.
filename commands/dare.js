
const { dares } = require('../systeme/constants');
const { pick } = require('../lib/utils');
module.exports = {
  name: 'dare',
  aliases: [],
  category: 'fun',
  desc: 'Action défi.',
  async execute(sock, m, ctx) {
    await ctx.reply(`🎯 Défi: ${pick(dares)}`);
  }
};
