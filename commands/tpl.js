const readline = require("readline-sync")
const fs = require("fs")
module.exports = {
    name: "tpl",
    description: "create a template script",
    execute() {
        let name = readline.question("What is the name of the project? > ")
        if(!name) {
            name = "project"
        }
        let path = readline.questionPath("Where do you want to save the project? > ")
        fs.readdirSync(path)
        if(!fs.existsSync(path)) {
            fs.mkdirSync(path)
        }
        let file = path + "/" + name + "/" + "index.exn"
        fs.mkdirSync(path + "/" + name, { recursive: true })
        fs.writeFileSync(file, `
import x = 19;
function y() {
    -#- func code
}
terminal.jsTable({"x":"y"})
terminal.printOut(x)
`)
    }
}