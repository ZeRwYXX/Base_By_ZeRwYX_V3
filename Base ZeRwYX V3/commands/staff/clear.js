const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');



module.exports = {
    name: 'clear',
    aliases: [],
    category: 'Staff',
    utilisation: '{prefix}ban <number>',
  
    execute(client, message, args) {

        message.delete();

        var you_not = new MessageEmbed()
        .setColor("#ff0000")
        .setTitle("You not have permission")
        .setThumbnail("https://cdn.discordapp.com/attachments/729461027686711422/730015476004028486/4c2218f5cc96ba76c0e590cd1dadb1bc.gif")
            
        var not_men = new MessageEmbed()
        .setColor("#00e3ff")
        .setDescription("you did not indicate the number of messages deleted")
         .setThumbnail("https://cdn.discordapp.com/attachments/729461027686711422/730017004026593321/giphy.gif")
           
        var validat = new MessageEmbed()
     .setColor("#ff00d8")
      .setDescription("deleted message ")
     
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(you_not);
    if(!args[0]) return message.channel.send(not_men);
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(validat).then(msg => {
            msg.delete({ timeout: 5000 })
          })

    })
    //ZeRwYX#9999 https://discord.gg/CfWNdpjzft
console.log("staff command")
}
}