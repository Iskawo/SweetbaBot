const { prefix, devPrefix, production } = require('./SweetbaBot');
module.exports = {
	prefix: production ? prefix : devPrefix,
    commandEditing: true,
    commandLogging: false,
    disabledCorePieces: ['commands'],
		clientOptions: {
				fetchAllMembers: true
		},
    console: {
			useColor: true
		},
		consoleEvents: {
			debug: false,
			verbose: false
		},
    prefixCaseInsensitive: true,
    readyMessage: (client) => `${client.user.tag} online and ready to fucking destroy lives`,
	typing: false
};
