module.exports = {
  name: 'devmode',
  aliases: [],
  category: 'owner',
  desc: 'Message de maintenance owner',
  owner: true,
  async execute(sock, m, ctx) {
    await ctx.reply("🛠️ Mode développeur prêt.");
  }
};
