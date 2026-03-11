
const { loadDb } = require('../systeme/database');
const { runtime } = require('../lib/utils');
module.exports = {
  name: 'runtime',
  aliases: ['uptime'],
  category: 'general',
  desc: 'Affiche le temps de fonctionnement.',
  async execute(sock, m, ctx) {
    await ctx.reply(`⏱️ Runtime: ${runtime(loadDb().stats.startAt)}`);
  }
};
