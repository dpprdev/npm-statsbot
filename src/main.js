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
    this.options.total = null;
    this.options.users = null;
    this.options.bots = null;
  
    const client = new Discord.Client(); 
    //if (!client.token) throw new Error('Please insert a valid token!')
    const Console = console;
    client.on("ready", () => {

    if (client.guilds.size < 1) {
        Console.log("The bot is not in any guild.");
        process.exit(0);
        return;
    } //Shutdowns, if bot is not in any guild
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
        Console.log(e);
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
        Console.log(e);
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