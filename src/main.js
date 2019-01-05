"use strict";

const Discord = require("discord.js");
const moment = require("moment");

/**
 * @param {string} token 
 */

class bot {
  constructor(token, options = {}) {
    this.token = token;
    this.options = options;
    /**
 * @param {string} total
 * @param {string} users
 * @param {string} bots 
 */
    async _kill(error){
    await throw new Error(error);
    await process.exit(0);
    }
    if (!this.options.total) {throw new Error('Please specify "Total Members" channel ID');this.options.total = null;}
    if (!this.options.users) {throw new Error('Please specify "Member Count" channel ID');this.options.users = null;}
    if (!this.options.bots) {throw new Error('Please specify "Bot Count" channel ID');this.options.bots = null;}
  
    const client = new Discord.Client(); 

    const Console = console;
    if (!client.token) throw new Error('Please insert a valid token!')
    client.on("ready", () => {

    if (client.guilds.size < 1) {
        throw new Error("The bot is not in any guild.");
    } //Shutdowns, if bot is not in any guild
      if (client.guilds.size > 1) {
        throw new RangeError("The bot is in more than 1 guild.");
    } //Shutdowns, if bot is in more than 1  guild
    const text = `
______________________________
Ready since: ${moment(Date.now()).format("dddd, MMMM do YYYY, HH:mm:ss")}
Server: ${client.guilds.first().name}
Total server members: ${client.guilds.first().memberCount}
Credits: https://github.com/dpprdev/statsbot/
______________________________
`; //The text that displays to console, when client is ready.
    Console.log(text);
});
    
client.on("guildMemberAdd", (member) => {
        //All choices are optional here. Bot wont work if the channel ID's are wrong. How to properly get ID's read in README.md 
        try {
            member.guild.channels.get(this.options.total).setName(`Total Members: ${member.guild.memberCount}`); // You can change this text, but still keep ${guild.memberCount}, as it defines total members.
            member.guild.channels.get(this.options.users).setName(`Users: ${member.guild.members.filter((m) => !m.user.bot).size}`); // This text is also changeable, still keep the code in ${}
            member.guild.channels.get(this.options.bots).setName(`Bots: ${member.guild.members.filter((m) => m.user.bot).size}`); // This text is also changeable, still keep the code in ${}
        
        }
        catch (e) {
         if (!client.channels.get(this.options.total) || isNaN(this.options.total)) throw new Error('Please specify a valid "Total Members" channel id.')
          if (!client.channels.get(this.options.users) || isNaN(this.options.users)) throw new Error('Please specify a valid "Member Count" channel id.')
           if (!client.channels.get(this.options.bots) || isNaN(this.options.bots)) throw new Error('Please specify a valid "Bot Count" channel id.')
        
        }
  });
client.on("guildMemberRemove", (member) => {
        //All choices are optional here. Bot wont work if the channel ID's are wrong. How to properly get ID's read in README.md 
        try {
            member.guild.channels.get(this.options.total).setName(`Total Members: ${member.guild.memberCount}`); // You can change this text, but still keep ${guild.memberCount}, as it defines total members.
            member.guild.channels.get(this.options.users).setName(`Users: ${member.guild.members.filter((m) => !m.user.bot).size}`); // This text is also changeable, still keep the code in ${}'s
            member.guild.channels.get(this.options.bots).setName(`Bots: ${member.members.filter((m) => m.user.bot).size}`); // This text is also changeable, still keep the code in ${}'s
        
        }
        catch (e) {
          if (!client.channels.get(this.options.total) || isNaN(this.options.total)) throw new Error('Please specify a valid "Total Members" channel id.')
    if (!client.channels.get(this.options.users) || isNaN(this.options.users)) throw new Error('Please specify a valid "Member Count" channel id.')
    if (!client.channels.get(this.options.bots) || isNaN(this.options.bots)) throw new Error('Please specify a valid "Bot Count" channel id.')
        
        }
});
     try {
     client.login(this.token);
    }  catch (e) {
      if (e) throw new Error('Please insert a valid token!');
    }
}
}  

module.exports = bot;
