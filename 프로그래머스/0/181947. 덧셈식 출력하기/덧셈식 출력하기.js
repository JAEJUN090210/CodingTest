const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];


rl.on('line', function (line) {
    input = line.split(' ').map(Number);
}).on('close', function () {
    const a = input[0];
    const b = input[1];
    const c = a + b;
    console.log(`${a} + ${b} = ${c}`);
});