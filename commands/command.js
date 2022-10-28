const { question } = require("readline-sync")

module.exports = {
    name: "command",
    description: "read the description of a command",
    usage: "command <command>",
    execute() {
        let res = question("What command do you want to read? >>> ")
        let command = global.commands.find(c => c.name === res)
        if (command) {
            console.log(`${command.name} - ${command.description}`)
        }
        else {
            console.log(`Command ${res} not found`)
        }
         
    }
}