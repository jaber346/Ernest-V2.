module.exports = {
  name: 'leave',
  aliases: [],
  category: 'group',
  desc: 'Fait quitter le bot du groupe',
  group: true,
  admin: true,
  botAdmin: true,
  async execute(sock, m, ctx) {
    await ctx.reply("👋 Je quitte le groupe.");
    await sock.groupLeave(ctx.from);
  }
};
