const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on("line", (line) => {
    input.push(line.trim());
}).on("close", () => {
    let N = Number(input[0]);
    let F = Number(input[1]);
    let base = Math.floor(N / 100) * 100;
    let answer = 0;
    for (let i = 0; i < 100; i++) {
        if ((base + i) % F === 0) {
            answer = i;
            break;
        }
    }
    console.log(String(answer).padStart(2, '0'));
});
