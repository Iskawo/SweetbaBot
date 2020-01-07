const { Monitor } = require('klasa');
const { MessageEmbed } = require('discord.js');
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
        let i = Math.floor((Math.random() * shit.length));
        let randomNum = util.random(0, 60);
        if (randomNum == 27) {
          msg.send(shit[i]);
        }
    }
};
