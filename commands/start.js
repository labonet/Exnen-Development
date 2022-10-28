// simple language using "replace" system (no compilators)
// exnen start is comatible with: javascript, exnenscript


const fs = require("fs");
const Discord = require("discord.js")
const readline = require("readline-sync");
const process = require("process");
module.exports = {
    name: "start",
    usage: "start <path>",
    description: "run the script",
    execute() {
        let path = readline.question("Folder >> ")
        let pathFile = readline.question("File >> (index.exn) ")
        if(!pathFile) { pathFile = "index.exn" }
        if(!pathFile.endsWith(".exn")) return console.log(pathFile + " is not an exnen file")
        let file = fs.readFileSync(path + pathFile, "utf8")

        if(!file) {
            return console.log(path + " is not a valid path")
        }
        if(file.includes("terminal.printOut")) {
            file = file.replace(eval(`/terminal.printOut/g`), "console.log")
        }
        if(file.includes("terminal.printError")) {
            file = file.replace(eval(`/terminal.printError/g`), "throw new Error")
        }
        if(file.includes("define")) {
            file = file.replace(eval(`/define/g`), "var")
        }
        if(file.includes("int.convert")) {
            file = file.replace(eval(`/int.convert/g`), "parseInt")
        }
        if(file.includes("const")) {
            file = file.replace(eval(`/const/g`), "const")
        }
        if(file.includes("cancel")) {
            file = file.replace(eval(`/cancel/g`), "return")
        }
        if(file.includes("-#-")) {
            file = file.replace(eval(`/-#-/g`), "//")
        }
        if(file.includes("convertString()")) {
            file = file.replace(eval(`/convertString()/g`), "toString")
        } 
        if(file.includes("as")) {
            file = file.replace(eval(`/as/g`), "= require")
        }
        if(file.includes("from")) {
            file = file.replace(eval(`/from/g`), "= require")
        }
        if(file.includes("import")) {
            file = file.replace(eval(`/import/g`), "const")
        }
        if(file.includes("Exnen.DiscordClient")) {
            file = file.replace(eval(`/Exnen.DiscordClient/g`), "Discord.Client")
        }
        if(file.includes("unpackage")) {
            file = file.replace(eval(`/unpackage/g`), "= require")
        }
        if(file.includes("run")) {
            file = file.replace(eval(`/run/g`), "eval")
        }
        if(file.includes("terminal.clearAll")) {
            file = file.replace(eval(`/terminal.clearAll/g`), "console.clear")
        }
        if(file.includes(".toggleErrors()")) {
            file = file.replace(eval(`/.toggleErrors()/g`), ".catch(() => {})")
        }
        if(file.includes("terminal.jsTable")) {
            file = file.replace(eval(`/terminal.jsTable/g`), "console.table")
        }
        if(file.includes("when")) {
            file = file.replace(eval(`/when/g`), "while")
        }
        if(file.includes("script.stop")) {
            file = file.replace(eval(`/script.stop/g`), "process.exit")
        }
        eval(file)
    }
}