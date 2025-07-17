const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
    if (input.length === 2) {
        rl.close();
    }
}).on('close', () => {
    const divisors = input[1].split(' ').map(Number);
    const min = Math.min(...divisors);
    const max = Math.max(...divisors);
    console.log(min * max);
});
