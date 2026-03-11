const fs = require('fs');
const path = require('path');

function loadCommands(commandsDir) {
  const commands = new Map();
  const aliases = new Map();

  for (const file of fs.readdirSync(commandsDir)) {
    if (!file.endsWith('.js')) continue;
    const filePath = path.join(commandsDir, file);
    delete require.cache[require.resolve(filePath)];
    const command = require(filePath);
    if (!command || !command.name || typeof command.execute !== 'function') continue;

    commands.set(command.name, command);
    for (const alias of command.aliases || []) {
      aliases.set(alias, command.name);
    }
  }

  return { commands, aliases };
}

module.exports = { loadCommands };
