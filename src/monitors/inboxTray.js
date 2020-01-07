const { Monitor } = require('klasa');
module.exports = class extends Monitor {
    constructor(...args) {
        super(...args, {
            name: 'inboxTray',
            enabled: true,
            ignoreBots: true,
            ignoreSelf: true,
            ignoreOthers: false
        });
    }
    async run(msg) {
        if (msg.content === '📥') {
          await msg.react('📥');
          return msg.send('📥').then(m => m.react('📥'));
        }
    }
};
