var ServerID = "709075855296692244"; //اي دي السيرفر
var ChannelID = "709075855787425854";// اي دي الروم




const Discord = require('discord.js');
const client = new Discord.Client();

client.on('warn', console.warn);

client.on('error', console.error);



client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));

client.on('MessageReceived',()=>
    if(event.getMessage().getContentRaw().startsWith("!!say")){
        event.getChannel().sendMessage(event.getMessage().getContentRaw().substring(6)).queue();
        event.getMessage().delete().queue());


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}

var timer = setTimeout(timerFunc, 1000);

client.login(process.env.BOT_TOKEN);
