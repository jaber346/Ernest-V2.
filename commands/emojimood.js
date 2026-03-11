
const { emotes } = require('../systeme/constants');
const { pick } = require('../lib/utils');
module.exports = {
  name: 'emojimood',
  aliases: ['mood'],
  category: 'fun',
  desc: 'Renvoie une humeur en emoji.',
  async execute(sock, m, ctx) {
    await ctx.reply(`Humeur du moment: ${pick(emotes)} ${pick(emotes)} ${pick(emotes)}`);
  }
};
