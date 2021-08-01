const Discord = require(`discord.js`);
const { MessageEmbed } = require('discord.js');
const  cc  = ('#a800fd')

module.exports = {
  name: 'ban',
  aliases: [],
  category: 'Staff',
  utilisation: '{prefix}ban <@user> <@raison>',
//ZeRwYX#9999 https://discord.gg/CfWNdpjzft
  execute(client, message, args) {
    if(!message.member.hasPermission("BAN_MEMBERS")) {
      const embed5 = new MessageEmbed()
        .setDescription(`**${message.author.username}**, You do not have enough permission to use this command`)
      .setColor(cc)
      return message.channel.send(embed5)
      }
      
      if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
        const embed4 = new MessageEmbed()
        .setDescription(`**${message.author.username}**, I do not have enough permission to use this command`)
      .setColor(cc)
      return message.channel.send(embed4)
      }
      let target = message.mentions.members.first();
      const user = message.mentions.users.first() || message.author;
      if(!target) {
        const embed3 = new MessageEmbed()
        .setDescription(`**${message.author.username}**, Please mention the person who you want to ban`)
      .setColor(cc)
      return message.channel.send(embed3)
    }
      if(target.id === message.author.id) {
        const embed1 = new MessageEmbed()
      .setDescription(`**${message.author.username}**, You can not ban yourself`)
      .setColor(cc)
        return message.channel.send(embed1)
       }
       if(!args[1]) {
        const embed2 = new MessageEmbed()
      .setDescription(`**${message.author.username}**, Please Give Reason to ban`)
      .setColor(cc)
      return message.channel.send(embed2)
      }
      const embed = new MessageEmbed()
      .setTitle("Action: ban")
      .setDescription(`Banned ${target} (${target.id})`)
      .setColor(cc)
      .setFooter(`Banned by ${message.author.username}`);
      
      message.channel.send(embed)


      
      target.ban(args[1]);
      target.ban(args[1]); 
target.ban(args[1]);
}

};
//ZeRwYX#9999 https://discord.gg/CfWNdpjzft