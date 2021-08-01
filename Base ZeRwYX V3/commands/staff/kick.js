const Discord = require(`discord.js`);
const { MessageEmbed } = require('discord.js');
const  cc  = ('#a800fd')
module.exports = {
  name: 'kick',
  aliases: [],
  category: 'Staff',
  utilisation: '{prefix}kick <@user>',
//ZeRwYX#9999 https://discord.gg/CfWNdpjzft
  execute(client, message, args) {
  if(!message.member.hasPermission("KICK_MEMBERS")) {
    const embed5 = new MessageEmbed()
      .setDescription(`**${message.author.username}**, You do not have enough permission to use this command`)
    .setColor(cc)
    return message.channel.send(embed5)
    }
    //ZeRwYX#9999 https://discord.gg/CfWNdpjzft
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
      const embed4 = new MessageEmbed()
      .setDescription(`**${message.author.username}**, I do not have enough permission to use this command`)
    .setColor(cc)
    return message.channel.send(embed4)
    }
    let target = message.mentions.members.first();
  //ZeRwYX#9999 https://discord.gg/CfWNdpjzft
    if(!target) {
      const embed3 = new MessageEmbed()
      .setDescription(`**${message.author.username}**, Please mention the person who you want to kick`)
    .setColor(cc)
    return message.channel.send(embed3)
  }
    if(target.id === message.author.id) {
      const embed1 = new MessageEmbed()
    .setDescription(`**${message.author.username}**, You can not kick yourself`)
    .setColor(cc)
      return message.channel.send(embed1)
     }
     if(!args[1]) {
      const embed2 = new MessageEmbed()
    .setDescription(`**${message.author.username}**, Please Give Reason to kick`)
    .setColor(cc)
    return message.channel.send(embed2)
    }
    const embed = new MessageEmbed()
    .setTitle("Action: Kick")
    .setDescription(`Kicked by ${target} (${target.id})`)
    .setColor(cc)
    .setFooter(`Kicked by ${message.author.username}`);
    //ZeRwYX#9999 https://discord.gg/CfWNdpjzft
    message.channel.send(embed)

    
      
      target.kick(args[1]);
}
};
//ZeRwYX#9999 https://discord.gg/CfWNdpjzft