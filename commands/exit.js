module.exports = {
    name: "exit",
    description: "Exit from exnen developing cli",
    execute() {
        console.log("Exnen developing -- (Quit) -- Type exnen for restart cli ") 
        process.exit(1);
    }
}