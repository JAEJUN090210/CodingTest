const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on("line", (line) => {
    input.push(line.trim());
}).on("close", () => {
    let [N, a, b] = input[0].split(" ").map(Number);
    let round = 0;
    while (a !== b) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        round++;
    }
    console.log(round);
});
