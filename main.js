
const readline = require("readline-sync");
const request = require("request");
const fs = require("fs")
const Discord = require("discord.js");
const { title } = require("process");
const path = require("./path.json").path
let commands = global.commands = new Discord.Collection();

const commandFile = fs.readdirSync(path).filter(file => file.endsWith(".js"));
for(const file of commandFile) {
    const command = require(`${path}/${file}`);
    commands.set(command.name, command);
}
while(true) {
let command = global.command = readline.question("Command to execute >>> ");
if(!commands.has(command)) {
    console.log(`Invalid command "${command}" (are you sure that you typed the command correctly?)`);
}
const comando = commands.get(command)


try {
comando.execute()
} catch(err) {
   
}
}

