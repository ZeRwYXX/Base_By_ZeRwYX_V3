const Discord = require ('discord.js')
const { stripIndents } = require("common-tags");
const  cc  = ('#a800fd')
module.exports = {
    name: 'slow',
    aliases: [],
    category: 'Staff',
    utilisation: '{prefix}slow <time in secndes> ex: {prefix}slow 20',

    execute(client, message) {

    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle('You not have permission')

        .setColor(cc)
)
    };

    if (!args[0])
      return message.channel.send(new Discord.MessageEmbed()
      .setTitle('Not valide number')
      .setColor('#00ffff')
);
    if (isNaN(args[0])) return message.channel.send(new Discord.MessageEmbed()
    .setTitle('Number is not function!')
    .setColor("#00ffff")
);
//ZeRwYX#9999 https://discord.gg/CfWNdpjzft
    message.channel.setRateLimitPerUser(args[0]);
    message.channel.send(new Discord.MessageEmbed()
    .setTitle(`Slowmode **${args[0]}s**`)
    .setColor(cc)

    );
  },
           
    
};