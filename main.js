const request = require("request")
const minimist = require("minimist");
const fs = require("fs");
const process = require("process")
const args = minimist(process.argv.slice(2))

const readline = require("readline-sync");
require("process").title = "Exnen";
const commands = [];
const version = "2.0.0"
const formattedVersion = "200"
commands.push("version")
commands.push("help")
commands.push("docs")
commands.push("searchDocs")
commands.push("execute")
commands.push("playground")
commands.push("fetch")
commands.push("update")


try {

    
if(args.help) {
    console.log("_- Exnen Development 2.0 -_")
    console.log(" --" + commands.join("\n --"));
}

if(args.version) {
    console.log("[V] This version - 2.0.0")
    request.get({url:"https://bulcanolol.github.io/APIs/exnen.html", json: true}, (err, req ,data) => {
        console.log("[N] Last version - "+ data.last_version)
        if(parseInt(data.last_version[0] + data.last_version[2] + data.last_version[4]) >= parseInt("200")) {
            console.log("[!] Update exnen development to " + data.last_version + " for new features, type 'exnen --update'")
        }
        if(parseInt(data.last_version[0] + data.last_version[2] + data.last_version[4]) < parseInt("200")) {
            console.log("[!] This is ExnenBeta edition.")
        }
        
    })
}

if(args.update) {
    request.get({url:"https://bulcanolol.github.io/APIs/exnen.html", json: true}, (err, req , data) => {
       
        if(parseInt(data.last_version[0] + data.last_version[2] + data.last_version[4]) >= parseInt("200")) {
            function open(url) {
                require("child_process").execSync(`start "" ${url}`);
              }
        
              open("https://github.com/TSAZs/Exnen-Development");
              return
        }
        console.log("[V] There's no updates")
        
    })
}
if(args.docs) {
   
    function open(url) {
        require("child_process").execSync(`start "" ${url}`);
      }

      open("https://github.com/TSAZs/Exnen-Development/wiki/Statements#" + args.docs);
    
}
if(args.searchDocs) {
    console.log("1 - Define")
    console.log("2 - Functions")
    console.log("3 - Terminal")
    console.log("4 - If")
    console.log("5 - Catch errors")
    console.log("6 - Cycles")
    console.log("7 - Import")
    console.log("8 - Return Statement")
    console.log("9 - Convert")
    console.log("10 - eval")
    console.log("11 - Stop scripts")
    console.log("-------------------")
    console.log("Look at the docs by typing \"exnen --docs docsName\". \n\nExample: exnen --docs cycles")
    
}
} catch(err) {
    
}
try {
if(args.execute) {
   
    let pathFile = args.execute
    if(pathFile.includes("\\")) {
        pathFile = pathFile.replace(eval(`/terminal.printOut/g`), "console.log")
    }
    if(!pathFile.endsWith(".exn")) return console.log(pathFile + " is not an exnen file")
    let file = fs.readFileSync(pathFile, "utf8")

    if(!file) {
        return console.log(pathFile + " is not a valid path")
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
        file = file.replace(eval(`/let/g`), "let")
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

if(args.playground) {
    console.log("Type 'script.stop()' or ctrl+c to stop")
    while (true) {
        let val = readline.question("$ Exnen Playground > ")
        let file = val;
    
        
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
            file = file.replace(eval(`/let/g`), "let")
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
} catch(err) {
    console.log("Compiler Error - " + err.toString())
}

try {
    if(args.fetch) {
        request.get({
            url: args.fetch,
        }, (err, res, body) => {
            if(err) {
                console.log(err.toString());
                return
            }
            console.log(body)
        })
    }
} catch(err) {

}

