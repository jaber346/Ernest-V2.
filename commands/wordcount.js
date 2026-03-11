module.exports = {
  name: 'wordcount',
  aliases: [],
  category: 'utility',
  desc: 'Compte les mots',
  async execute(sock, m, ctx) {
    const text = ctx.args.join(" ");
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}wordcount texte`);
    await ctx.reply(`📝 ${text.trim().split(/\s+/).filter(Boolean).length} mot(s)`);
  }
};
