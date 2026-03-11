
const { roasts } = require('../systeme/constants');
const { pick } = require('../lib/utils');
module.exports = {
  name: 'roast',
  aliases: [],
  category: 'fun',
  desc: 'Envoie un roast léger.',
  async execute(sock, m, ctx) {
    await ctx.reply(`🔥 ${pick(roasts)}`);
  }
};
