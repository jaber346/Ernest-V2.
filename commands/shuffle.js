module.exports = {
  name: 'shuffle',
  aliases: [],
  category: 'fun',
  desc: 'Mélange des mots séparés par |',
  async execute(sock, m, ctx) {
    const items = ctx.args.join(" ").split("|").map(x=>x.trim()).filter(Boolean);
    if (!items.length) return ctx.reply(`Utilisation: ${ctx.prefix}shuffle 1 | 2 | 3`);
    for (let i=items.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [items[i],items[j]]=[items[j],items[i]]; }
    await ctx.reply(items.join("\n"));
  }
};
