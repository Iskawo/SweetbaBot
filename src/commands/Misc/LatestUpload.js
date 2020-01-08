const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');
const req = require('centra-aero');
const { trimString } = require('../../../lib/util/util');
const url = `https://www.googleapis.com/youtube/v3/activities?part=snippet,contentDetails&channelId=UCTZw5BSoA8PcKyHbdHJ3hQg&key=${process.env.YOUTUBE_API_KEY}`
module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'latestupload',
            runIn: ['text'],
            aliases: ['lastupload'],
            requiredPermission: ['SEND_MESSAGES', 'EMBED_MESSAGES'],
            description: 'Testing',
            usage: '',
            usageDelim: ' ',
            extendedHelp: ' '
        });
    }
    async run(msg) {
      const request = await req(url)
      .send()
      .then(res => res.json)
      let descLength = request.items[0].snippet.description.length;
      let desc = request.items[0].snippet.description;
      let description = descLength < 1024 ? desc : trimString(desc, 1000);

      return msg.send({
        embed: new MessageEmbed()
        .setURL(`https://www.youtube.com/watch?v=${request.items[0].contentDetails.upload.videoId}`)
        .setTitle('Latest upload from ' + request.items[0].snippet.channelTitle)
        .addField('Title', request.items[0].snippet.title)
        .addField('Uploaded At', new Date(request.items[0].snippet.publishedAt).toLocaleTimeString())
        .addField('Link', `https://www.youtube.com/watch?v=${request.items[0].contentDetails.upload.videoId}`)
        .addField(`Description`, description)
        .setThumbnail(request.items[0].snippet.thumbnails.medium.url)
        .setFooter(`Video ID: ${request.items[0].contentDetails.upload.videoId}`)
      })
    }
};
