const Discord = module.require('discord.js');
const { MessageEmbed } = require('discord.js');
const genbot = "#cc00ff";
module.exports = {
  name: 'userinfo',
  aliases: ["ui"],
  category: 'Info',
  utilisation: '{prefix}userinfo',
//ZeRwYX#9999 https://discord.gg/CfWNdpjzft
  execute(client, message) {
  let memberInfo = message.mentions.members.first();
//ZeRwYX#9999 https://discord.gg/CfWNdpjzft
  if(!memberInfo){
    var userinf = new MessageEmbed()
        .setAuthor(message.author.username)
        .setThumbnail(message.author.avatarURL)
        .setDescription("This is the user's info!")
        .setColor(genbot)
        .addField("Full Username:", `${message.author.username}#${message.author.discriminator}`)
        .addField("ID:", message.author.id)
        .addField("Created At:", message.author.createdAt)

        message.channel.send(userinf);

  }else{
//ZeRwYX#9999 https://discord.gg/CfWNdpjzft
    var userinfoo = new MessageEmbed()
        .setAuthor(memberInfo.displayName)
        .setThumbnail(memberInfo.user.avatarURL)
        .setDescription("This is the user's info!")
        .setColor(genbot)
        .addField("Full Username:", `${memberInfo.user.username}#${memberInfo.user.discriminator}`)
        .addField("ID:", memberInfo.id)
        .addField("Created At:", memberInfo.user.createdAt)

        message.channel.send(userinfoo);
  }
}

}