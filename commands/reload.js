
module.exports = {
  name: 'reload',
  aliases: ['rld'],
  category: 'owner',
  desc: 'Recharge toutes les commandes.',
  owner: true,
  async execute(sock, m, ctx, { reload }) {
    const data = reload();
    await ctx.reply(`♻️ Rechargement effectué.\n📦 ${data.commands.size} commandes actives.`);
  }
};
