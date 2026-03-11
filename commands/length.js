
module.exports = {
  name: 'length',
  aliases: ['len'],
  category: 'utility',
  desc: 'Compte les caractères.',
  async execute(sock, m, ctx) {
    const text = ctx.args.join(' ');
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}length texte`);
    await ctx.reply(`📏 Longueur: ${text.length} caractères`);
  }
};
