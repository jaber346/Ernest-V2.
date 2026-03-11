module.exports = {
  name: 'randnum',
  aliases: [],
  category: 'fun',
  desc: 'Génère un nombre aléatoire',
  async execute(sock, m, ctx) {
    const min = Number(ctx.args[0] || 0);
    const max = Number(ctx.args[1] || 100);
    const n = Math.floor(Math.random() * (max - min + 1)) + min;
    await ctx.reply(`🎲 Nombre: ${n}`);
  }
};
