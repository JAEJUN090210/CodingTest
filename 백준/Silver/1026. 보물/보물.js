const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on("line", (line) => {
    input.push(line.trim());
}).on("close", () => {
    const N = Number(input[0]);
    const A = input[1].split(" ").map(Number).sort((a, b) => a - b);
    const B = input[2].split(" ").map(Number);
    const B_sorted = [...B].sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < N; i++) {
        sum += A[i] * B_sorted[i];
    }
    console.log(sum);
});
