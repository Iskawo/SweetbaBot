const { Event } = require('klasa');

module.exports = class extends Event {
    constructor(...args) {
        super(...args, { name: 'ready', enabled: true });
    }
    run() {}

    async init() {
      this.client.user.setPresence({
        status: 'online',
        activity: {
          name: 'daddy',
          type: 'WATCHING'
        }
     });
    }
}
