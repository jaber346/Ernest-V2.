
module.exports = {
  name: 'reverse',
  aliases: ['rev'],
  category: 'utility',
  desc: 'Inverse un texte.',
  async execute(sock, m, ctx) {
    const text = ctx.args.join(' ');
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}reverse texte`);
    await ctx.reply(text.split('').reverse().join(''));
  }
};
