
const { getRandomInt } = require('../lib/utils');
module.exports = {
  name: 'gayrate',
  aliases: [],
  category: 'fun',
  desc: 'Commande fun de pourcentage.',
  async execute(sock, m, ctx) {
    const name = ctx.args.join(' ') || ctx.pushName;
    await ctx.reply(`🌈 ${name} est gay à ${getRandomInt(1, 100)}%`);
  }
};
