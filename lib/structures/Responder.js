
class Responder {

	constructor(message) {
		this.message = message;
	}

	success(text) {
		if (!text) return this.message.react(reactions.success);
		return this.message.send(`${emotes.check} ${text}`);
	}

	error(text) {
		if (!text) return this.message.react(reactions.error);
		return this.message.send(`${x} ${text}`);
	}

	unspecified(text) {
		if (!text) return this.message.react(reactions.unspecified);
		return this.message.send(`${emotes.unchecked} ${text}`);
	}

	ban(text) {
		if (!text) return this.message.react(reactions.ban);
		return this.message.send(`${emotes.ban} ${text}`);
	}

	mute(text) {
		if (!text) return this.message.react(reactions.mute);
		return this.message.send(`${muted} ${text}`);
	}

	unmute(text) {
		if (!text) return this.message.react(reactions.unmute);
		return this.message.send(`${unmuted} ${text}`);
	}
}

module.exports = Responder;
