const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');
module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'ping',
            runIn: ['text', 'dm'],
            requiredPermission: ['SEND_MESSAGES', 'EMBED_MESSAGES'],
            description: language => language.get('COMMAND_PING_DESCRIPTION'),
            usageDelim: ' ',
            extendedHelp: ' '
        });
    }

    async run(message, [...params]) {
        message.channel.send(`ping me again n ill snap ye fucking neck ok? my response time is **${Math.round(this.client.ws.ping)} ms** bitch`)
    }
};
