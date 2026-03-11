
module.exports = {
  name: 'revoke',
  aliases: ['resetlink'],
  category: 'group',
  desc: 'Réinitialise le lien du groupe.',
  group: true,
  admin: true,
  botAdmin: true,
  async execute(sock, m, ctx) {
    await sock.groupRevokeInvite(ctx.from);
    await ctx.reply('♻️ Nouveau lien généré.');
  }
};
