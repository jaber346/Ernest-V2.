
module.exports = {
  name: 'calc',
  aliases: ['math'],
  category: 'utility',
  desc: 'Calcule une expression simple.',
  async execute(sock, m, ctx) {
    const exp = ctx.args.join(' ');
    if (!exp) return ctx.reply(`Utilisation: ${ctx.prefix}calc 7 * (8 + 2)`);
    if (!/^[0-9+\-*/().%\s]+$/.test(exp)) return ctx.reply('❌ Expression non autorisée.');
    const result = Function(`"use strict"; return (${exp})`)();
    await ctx.reply(`🧮 ${exp} = ${result}`);
  }
};
