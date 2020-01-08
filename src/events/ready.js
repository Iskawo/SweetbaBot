const { Event } = require('klasa');

module.exports = class extends Event {
    constructor(...args) {
        super(...args, { name: 'ready', enabled: true });
    }
    run() {
        // This is where you place the code you want to run for your event
        this.client.user.setPresence({ status: "online" });
    }

    async init() {}
}