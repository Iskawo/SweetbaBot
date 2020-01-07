const { Monitor } = require('klasa');
const util = require('../../lib/util/util');
const { dumbShit: shit, channelsToNotSendShitIn: channels } = require('../../lib/util/constants');
module.exports = class extends Monitor {
    constructor(...args) {
        super(...args, {
            name: 'randomBullshit',
            enabled: true,
            ignoreBots: true,
            ignoreSelf: true,
            ignoreOthers: false
        });
    }
  async run(msg) {
    if (channels.some(id => id === msg.channel.id)) return;
    if (msg.command) return;
    if (msg.channel.id === '663921123121168384') return;
    let i = Math.floor((Math.random() * shit.length));
    let randomNum = util.random(0, 15);
    if (randomNum == 5) {
      if (shit[i].startsWith('https')) {
        msg.channel.sendFile(shit[i])
      } else {
        msg.send(shit[i]);
      }
    }
  }
};
