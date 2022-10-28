module.exports = {
    name: "help",
    description: "commands list",
    execute() {
      
       console.log(`Exnen developing -- 1.0.0`)
       global.commands.forEach(element => {
        console.log(`${element.name} - ${element.description}`)
       });
         
         
    }
}