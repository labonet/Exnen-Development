module.exports = {
    name: "highlights",
    description: "higlights for .exn",
    execute() {

      function open(url) {
        require("child_process").execSync(`start "" ${url}`);
      }

      open("https://github.com/Bulcanolol/Exnen-Development/releases/tag/highlights");
    }
}