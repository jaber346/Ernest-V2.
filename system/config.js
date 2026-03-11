const path = require('path');

module.exports = {
  PREFIX: process.env.PREFIX || '.',
  BOT_NAME: process.env.BOT_NAME || 'NOVA XMD V1',
  OWNER_NAME: process.env.OWNER_NAME || 'DEV NOVA',
  OWNER_NUMBER: process.env.OWNER_NUMBER || '22600000000',
  PORT: Number(process.env.PORT || 3000),
  SESSION_DIR: process.env.SESSION_DIR || path.join(__dirname, '..', 'auth'),
  DATA_DIR: process.env.DATA_DIR || path.join(__dirname, '..', 'systeme', 'data'),
  AUTO_READ: process.env.AUTO_READ === 'true',
  PUBLIC_MODE: process.env.PUBLIC_MODE !== 'false',
  PAIRING_NUMBER: process.env.PAIRING_NUMBER || '',
  TIMEZONE: process.env.TIMEZONE || 'Africa/Ouagadougou',
  MAX_WARNS: Number(process.env.MAX_WARNS || 3),
  PAIRING_ENABLED: process.env.PAIRING_ENABLED !== 'false'
};
