var ServerID = "709075855296692244"; //اي دي السيرفر
var ChannelID = "709075855787425854";// اي دي الروم




const Discord = require('discord.js');
const client = new Discord.Client();

client.on('warn', console.warn);

client.on('error', console.error);



client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));

client.on("message", async message => {
	const prefix = "!!";
	
	if(message.author.bot) return;
	if(message.guild) return;
	if(message.content.startsWith(prefix)) return;
	cosnt args = message.content.slice(prefix.length).trim().split(/ +/g);
	cosnt cmd = args.shift().toLowerCase();
	if(cmd === "say"){
		if((message.deletable) message.delete();
		if(args.length < 1){
			return message.reply("Nothing to say").then(m=>m.delete(5000));
			
			}}
	}



function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}

var timer = setTimeout(timerFunc, 1000);

client.login(process.env.BOT_TOKEN);
