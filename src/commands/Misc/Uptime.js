const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');
const ms = require('ms');
module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'uptime',
            enabled: true,
            runIn: ['text', 'dm'],
            aliases: [],
            botPerms: ['SEND_MESSAGES', 'EMBED_MESSAGES'],
            requiredSettings: [],
            description: language => language.get('COMMAND_UPTIME_DESCRIPTION'),
            quotedStringSupport: false,
            usage: ' ',
            usageDelim: ' ',
            extendedHelp: ' '
        });
    }

    async run(message, [...params]) {
        return message.send(`why do u care? my uptime is ` + ms(this.client.uptime, { long: true }));
    }

};
