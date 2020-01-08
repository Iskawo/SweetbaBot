const { Command } = require('klasa');
const { execSync } = require('child_process');
module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'git',
            runIn: ['text', 'dm'],
            subcommands: true,
            permissionLevel: 10,
            requiredPermission: ['SEND_MESSAGES', 'EMBED_MESSAGES'],
            description: 'Execute a terminal command',
            usage: '<add|push|pull|commit|status> [flag:string] [cm:...string]',
            usageDelim: ' ',
            extendedHelp: ' '
        });
        this.customizeResponse('push', `Invalid options. Use either of: \`add, push, pull, commit, status\``);
    }

    async add(msg, [cm]) {
      try {
          let executed = await execSync(`git add ${cm}`).toString();
          return msg.channel.send(`\`\`\`js\n${executed}\`\`\``);
      } catch (err) {
          return msg.channel.send(`\`\`\`js\n${err}\`\`\``);
      }
    }
    async push(msg) {
      try {
          let executed = await execSync(`git push`).toString();
          return msg.channel.send(`\`\`\`js\n${executed}\`\`\``);
      } catch (err) {
          return msg.channel.send(`\`\`\`js\n${err}\`\`\``);
      }
    }
    async pull(msg) {
      try {
          let executed = await execSync(`git pull`).toString();
          return msg.channel.send(`\`\`\`js\n${executed}\`\`\``);
      } catch (err) {
          return msg.channel.send(`\`\`\`js\n${err}\`\`\``);
      }
    }
    async commit(msg, [flag, cm]) {
      if (!cm) return msg.send(`Provide a commit message`);
      try {
          let executed = await execSync(`git commit ${flag} ${cm}`).toString();
          return msg.channel.send(`\`\`\`js\n${executed}\`\`\``);
      } catch (err) {
          return msg.channel.send(`\`\`\`js\n${err}\`\`\``);
      }
    }
    async status(msg) {
      try {
          let executed = await execSync(`git status`).toString();
          return msg.channel.send(`\`\`\`js\n${executed}\`\`\``);
      } catch (err) {
          return msg.channel.send(`\`\`\`js\n${err}\`\`\``);
      }
    }
};
