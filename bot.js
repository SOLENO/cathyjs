const Discord = require("discord.js");
const client = new Discord.Client();
const cathyjs = require("cathyjs");
 
client.on("ready", () => {
    console.log(`${client.user.tag} is online!`)
});
 
client.on("message", async (message) => {
    
    let channel = client.channels.get("yourchannelid")
    
    if (message.channel.id == channel.id) {
 
        let text = message.content
        channel.startTyping();
    
        var reply = await cathyjs.startchatting(`${text}`);
    
    
        channel.send(`${message.author}, ${reply}`);
        message.channel.stopTyping();
    }
});
 
client.login("putyourowntokenree")
