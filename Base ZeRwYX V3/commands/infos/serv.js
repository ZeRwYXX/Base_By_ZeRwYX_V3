const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");
module.exports = {
    name: 'serv',
    aliases: ['sr'],
    category: 'Info',
    utilisation: '{prefix}serv',
async execute(client, message, args) {
       
    const embed = new MessageEmbed()
    .setColor("#08ebff") 
    .addField("🌐- member:", `${message.guild.memberCount}`)
    .addField("🌐- the bot in", `[${client.guilds.cache.size}](https://bit.do/GenBot) servers`)
    .addField("🌐- total member", client.guilds.cache.reduce((a, g) => a + g.memberCount,0))
    .setThumbnail('https://top.gg/api/widget/upvotes/701471166023335986.png')
    .setFooter("https://bit.do/GenBot")


    await message.react("📨")
    await message.react("👇")
    await message.react("❌");

    const collector = message.createReactionCollector((reaction, user) => user.id === message.author.id);
    collector.on("collect", async(reaction) => {

        if(reaction._emoji.name === "📨") {
            message.author.send(embed);
            return message.delete();
        }

        if(reaction._emoji.name === "👇") {
            message.channel.send(embed);
            return message.delete();
        }
        if(reaction._emoji.name === "❌") {
            return message.delete();
        }
        await reaction.users.remove(message.author.id);
    })
    //ZeRwYX#9999 https://discord.gg/CfWNdpjzft
}
};