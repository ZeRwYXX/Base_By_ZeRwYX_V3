module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <nom de la commande>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const staff = message.client.commands.filter(x => x.category == 'Staff').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: '#e100ff',
                    author: { name: "Command d'aide" },
                    footer: { text: `Bot pour ${client.config.discord.inf}` },
                    image: { name: 'URL IMAGE HERE' },
                    fields: [
                        { name: 'Staffs', value: staff },
                        { name: 'Autres', value: infos },
                    ],
                    timestamp: new Date(),
                    description: `Base de bot by ZeRwYX ${client.config.discord.prefix}help`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - La commande est introuvable`);

            message.channel.send({
                embed: {
                    color: '#e100ff',
                    author: { name: 'Cmmand help' },
                    footer: { text: `Bot pour ${client.config.discord.inf}` },
                    fields: [
                        { name: 'Name', value: command.name, inline: true },
                        { name: 'Category', value: command.category, inline: true },
                        { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Utilisation', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                }
            });
        };
    },
};

//ZeRwYX#9999 https://discord.gg/CfWNdpjzft