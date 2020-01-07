const { Client, PermissionLevels } = require('klasa');
const { klasa, discord, SweetbaBot } = require('../config/');

Client.use(require('klasa-member-gateway'));

require('./permissionLevels')

module.exports = class SweetbaBotClient extends Client {
    constructor(options) {
        super({...klasa, ...discord});
        this.config = SweetbaBot;
    }
    async login(token) {
        return super.login(process.env.DISCORD_TOKEN);
    }
    generateSnowflake () {
      const timestamp = BigInt(new Date().getTime());
      return (((timestamp - 1420070400000n) << 22n) + (BigInt(this.shard || 0) << 12n)).toString();
    }
}
