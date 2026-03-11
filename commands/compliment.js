
const { compliments } = require('../systeme/constants');
const { pick } = require('../lib/utils');
module.exports = {
  name: 'compliment',
  aliases: [],
  category: 'fun',
  desc: 'Envoie un compliment.',
  async execute(sock, m, ctx) {
    await ctx.reply(`💖 ${pick(compliments)}`);
  }
};
