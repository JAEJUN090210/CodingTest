const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on("line", (line) => {
    input.push(line.trim());
}).on("close", () => {
    const L = Number(input[0]);
    const S = input[1].split(" ").map(Number).sort((a, b) => a - b);
    const n = Number(input[2]);
    if (S.includes(n)) {
        console.log(0);
        return;
    }
    let low = 0;
    let high = 1001;
    for (let i = 0; i < L; i++) {
        if (S[i] < n) low = S[i];
        if (S[i] > n) {
            high = S[i];
            break;
        }
    }
    const result = (n - low) * (high - n) - 1;
    console.log(result);
});
