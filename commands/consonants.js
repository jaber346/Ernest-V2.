module.exports = {
  name: 'consonants',
  aliases: [],
  category: 'utility',
  desc: 'Compte les consonnes',
  async execute(sock, m, ctx) {
    const text = ctx.args.join(" ");
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}consonants texte`);
    const count = (text.match(/[bcdfghjklmnpqrstvwxz]/gi) || []).length;
    await ctx.reply(`🔠 Consonnes: ${count}`);
  }
};
