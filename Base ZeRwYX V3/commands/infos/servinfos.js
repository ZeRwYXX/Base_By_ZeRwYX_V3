const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'servinfo',
    aliases: ['si'],
	category: 'Info',
    utilisation: '{prefix}servinfo',
execute(client, message, args) {

		var sinfo_embed = new Discord.MessageEmbed()
		.setColor("#00CB0E")
		.setThumbnail(`https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.gif`)
		.setTitle(`${message.guild} | Informations`)
		.addField("Server name:",`${message.guild.name}`, true)
		.addField("Owner :",`${message.guild.owner}`, true)
		.addField("Create :",`${message.guild.createdAt.getDay()} / ${message.guild.createdAt.getMonth()} / ${message.guild.createdAt.getFullYear()}`)
		.addField("Member count :",`${message.guild.memberCount}`, true)
		.addField("Channels count :",`${message.guild.channels.cache.size}`, true)
		.addField("Region :",`${message.guild.region}`)
		.addField("Image", `[Link](https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.gif)`)
		message.channel.send(sinfo_embed)

		console.log("command")//ZeRwYX#9999 https://discord.gg/CfWNdpjzft
	}
}