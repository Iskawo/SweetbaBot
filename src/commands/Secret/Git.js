const { Command } = require('klasa');
const { execSync } = require('child_process');
module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'git',
            runIn: ['text', 'dm'],
            permissionLevel: 10,
            requiredPermission: ['SEND_MESSAGES', 'EMBED_MESSAGES'],
            description: 'Execute a terminal command',
            usage: '<command:...string>',
            usageDelim: ' ',
            extendedHelp: ' '
        });
        this.customizeResponse('command', `Provide a git command to run.`);
    }

    async run(msg, [command]) {
      try {
          let executed = await execSync(`git ${command}`).toString();
          return msg.channel.send(`\`\`\`js\n${executed}\`\`\``);
      } catch (err) {
          return msg.channel.send(`\`\`\`js\n${err}\`\`\``);
      }
    }
};
