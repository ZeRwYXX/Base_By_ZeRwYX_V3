const fs = require('fs');
const discord = require('discord.js');
const client = new discord.Client({ disableMentions: 'everyone' });
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.utilisateurs = client.config.serv;
client.filters = client.config.filters;
client.serveur = client.config.serveur;
client.commands = new discord.Collection();

fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));
    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Loading command ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};



client.login(client.config.discord.token);


/* 


Base fait par ZeRwYX
Discord: ZeRwYX#9999
Serveur discord: https://discord.gg/CfWNdpjzft
Bot discord: http://bit.do/genbot





*/