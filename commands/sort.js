module.exports = {
  name: 'sort',
  aliases: [],
  category: 'utility',
  desc: 'Trie des mots séparés par |',
  async execute(sock, m, ctx) {
    const items = ctx.args.join(" ").split("|").map(x=>x.trim()).filter(Boolean);
    if (!items.length) return ctx.reply(`Utilisation: ${ctx.prefix}sort orange | pomme | banane`);
    await ctx.reply(items.sort((a,b)=>a.localeCompare(b)).join("\n"));
  }
};
