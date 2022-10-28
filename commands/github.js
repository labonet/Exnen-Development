module.exports = {
    name: "github",
    description: "github of exn",
    execute() {

      function open(url) {
        require("child_process").execSync(`start "" ${url}`);
      }

      open("https://github.com/Bulcanolol/Exnen-Development");
    }
}