const SweetbaBotClient = require('../lib/SweetbaBot');
const { prefix, devPrefix, production } = require('../config/SweetbaBot');
const dotenv = require('dotenv')
dotenv.config({
	path: process.env.NODE_ENV === 'production' ? '.env' : 'dev.env'
});
const client = new SweetbaBotClient({
}).login(process.env.DISCORD_TOKEN);
return SweetbaBotClient
