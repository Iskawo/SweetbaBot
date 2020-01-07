const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');
module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'punch',
            runIn: ['text'],
            requiredPermission: ['SEND_MESSAGES', 'EMBED_MESSAGES'],
            description: language => language.get('COMMAND_PUNCH_DESCRIPTION'),
            usage: '<user:username>',
            usageDelim: ' ',
        });
        this.customizeResponse('user', 'are u actually ok? a user is required')
    }

    async run(message, [user]) {
        let gifs = [
          'https://i.imgur.com/oLCiTRD.gif',
          'https://i.imgur.com/ppjt8rO.gif',
          'https://i.imgur.com/lgpfjk2.gif',
          'https://i.imgur.com/WqqGDNt.gif'
        ]
        let randomgif = Math.floor((Math.random() * gifs.length));
        return message.send(`${message.author} jus smacked the shit out of ${user}`, {
          embed: new MessageEmbed()
          .setColor("#36393f")
          .setImage(gifs[randomgif])
        })
    }
};
