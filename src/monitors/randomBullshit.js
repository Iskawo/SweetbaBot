const { Monitor } = require('klasa');
const util = require('../../lib/util/util');
const { dumbShit: shit } = require('../../lib/util/constants');
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
        if (msg.command) return;
        if (msg.channel.id === '663921123121168384') return;
        let i = Math.floor((Math.random() * shit.length));
        let randomNum = util.random(0, 8);
        if (randomNum == 5) {
          msg.send(shit[i]);
        }
    }
};
