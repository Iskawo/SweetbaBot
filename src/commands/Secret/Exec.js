const { Command } = require('klasa');
const { execSync } = require('child_process');
module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'exec',
            runIn: ['text', 'dm'],
            permissionLevel: 10,
            requiredPermission: ['SEND_MESSAGES', 'EMBED_MESSAGES'],
            description: 'Execute a terminal command',
            usage: '<command:...string>',
            usageDelim: ' ',
            extendedHelp: ' '
        });
        this.customizeResponse('command', `**Input something to execute**`);
    }
    async run(message, [command]) {
        try {
            let executed = await execSync(`${command}`).toString();
            return message.channel.send(`\`\`\`js\n${executed}\`\`\``);
        } catch (err) {
            return message.channel.send(`\`\`\`js\n${err}\`\`\``);
        }
    }
};
