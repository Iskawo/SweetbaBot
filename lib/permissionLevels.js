const { Client } = require('klasa')
Client.defaultPermissionLevels
    .add(10, ({ author, client }) => client.owners.has(author));
