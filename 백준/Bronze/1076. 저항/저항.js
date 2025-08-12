const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const table = {
    black: [0, 1],
    brown: [1, 10],
    red: [2, 100],
    orange: [3, 1000],
    yellow: [4, 10000],
    green: [5, 100000],
    blue: [6, 1000000],
    violet: [7, 10000000],
    grey: [8, 100000000],
    white: [9, 1000000000]
};

let colors = [];
rl.on("line", (line) => {
    colors.push(line.trim());
}).on("close", () => {
    let value = table[colors[0]][0] * 10 + table[colors[1]][0];
    let result = value * table[colors[2]][1];
    console.log(result);
});
