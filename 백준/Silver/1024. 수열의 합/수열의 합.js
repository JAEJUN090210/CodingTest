const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on("line", (line) => {
    input.push(line.trim());
}).on("close", () => {
    let [N, L] = input[0].split(" ").map(Number);
    let found = false;
    for (let len = L; len <= 100; len++) {
        let numerator = N - (len * (len - 1)) / 2;
        if (numerator < 0) break;
        if (numerator % len === 0) {
            let first = numerator / len;
            let result = [];
            for (let i = 0; i < len; i++) {
                result.push(first + i);
            }
            console.log(result.join(" "));
            found = true;
            break;
        }
    }
    if (!found) console.log(-1);
});
