const { Command, util: { isFunction } } = require('klasa');
const { MessageEmbed } = require('discord.js');
const { code } = require('discord-md-tags');
const { prefix } = require('../../../config/SweetbaBot');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'help',
            aliases: ['h'],
            guarded: true,
            description: language => language.get('COMMAND_HELP_DESCRIPTION'),
            requiredPermissions: ['EMBED_LINKS'],
            usage: '(Command:command)'
        });

        this.createCustomResolver('command', (arg, possible, msg) => {
            if (!arg || arg === '') return undefined;
            return this.client.arguments.get('command').run(arg, possible, msg);
        });
    }

    async run(msg, [command]) {
        const embed = new MessageEmbed()
            .setTitle(`u want help? i dont care`)
            .setImage('https://i.imgur.com/0Yul0nJ.gif')

        if (command) {
            return msg.sendEmbed(embed
                .setDescription(msg.language.get('HELP_DESCRIPTION'))
                .addField(`${command.name} ${command.runIn.includes('dm') ? '' : '(Server only)'}`, [isFunction(command.description) ? command.description(msg.language) : command.description,
                    isFunction(command.extendedHelp) ? command.extendedHelp(msg.language) : command.extendedHelp
                ].join('\n'))
                .addField('• Usage', command.usage.fullUsage(msg))
                .addField('• Permission Node', code `${command.category.toLowerCase()}.${command.name}`));
        }

        const categories = this.buildHelp();
        for (const category in categories) {
            embed.addField(category, categories[category].sort().map(cmd => cmd).join(', '));
        }
        return msg.sendEmbed(embed);
    }

    buildHelp() {
        return this.client.commands
            .filter(command => command.permissionLevel < 10)
            .reduce((categories, command) => {
                if (!(command.category in categories)) categories[command.category] = [command.name];
                else categories[command.category].push(command.name);
                return categories;
            }, {});
    }

};
