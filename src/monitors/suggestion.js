const { Monitor } = require('klasa');

module.exports = class extends Monitor {
  constructor(...args) {
    super(...args, {
      name: 'suggestion',
      enabled: true,
      ignoreBots: true,
      ignoreSelf: true,
      ignoreOthers: false
    })
  }
  async run(msg) {
      if (msg.command) return;
      if (msg.channel.id === "663921123121168384") {
        await msg.react('651217570958934021');
              msg.react('651217586087919616');
      }
  }
}
