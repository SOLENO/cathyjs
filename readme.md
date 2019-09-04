# Cathyjs
A chatbot api which is completely free. It is mainly created for discord bots.

# Installing
[![NPM](https://nodei.co/npm/cathyjs.png)](https://nodei.co/npm/cathyjs/)
```js
npm install cathyjs
```

# Usage
```js
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

client.login("putyourowntoken")

```

# Join my discord
https://discord.gg/A7r6RtS
