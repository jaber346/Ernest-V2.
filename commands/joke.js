
const { jokes } = require('../systeme/constants');
const { pick } = require('../lib/utils');
module.exports = {
  name: 'joke',
  aliases: ['blague'],
  category: 'fun',
  desc: 'Affiche une blague.',
  async execute(sock, m, ctx) {
    await ctx.reply(`😂 ${pick(jokes)}`);
  }
};
