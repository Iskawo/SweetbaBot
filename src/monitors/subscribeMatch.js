const { Monitor } = require('klasa');
const util = require('../../lib/util/util');
const { MessageEmbed } = require('discord.js');
const { dumbShit: shit } = require('../../lib/util/constants');
module.exports = class extends Monitor {
    constructor(...args) {
        super(...args, {
            name: 'subscribeMatch',
            enabled: true,
            ignoreBots: true,
            ignoreSelf: true,
            ignoreOthers: false
        });
    }
    async run(msg) {
        let RegEx = msg.content.match(/^(?=.*\bsub|subscribe\b)(?=.*\bto\b)(?=.*\bsweet|sweetbaboo|sweetbabooo_o\b).+/i);
        if (RegEx) {
          msg.send(`<https://www.youtube.com/channel/UCTZw5BSoA8PcKyHbdHJ3hQg?sub_confirmation=1>`, {
            embed: new MessageEmbed()
            .setColor("#36393f")
            .setTitle('Sub or DIE')
            .setURL('https://www.youtube.com/channel/UCTZw5BSoA8PcKyHbdHJ3hQg?sub_confirmation=1')
            .setImage('https://i.imgur.com/92D5EJO.png')
          })
        }
    }
};
