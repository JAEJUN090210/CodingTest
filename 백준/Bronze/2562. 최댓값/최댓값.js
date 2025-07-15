const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numbers = [];

rl.on('line', (line) => {
  numbers.push(Number(line.trim()));
  if (numbers.length === 9) {
    const max = Math.max(...numbers);
    const index = numbers.indexOf(max) + 1;

    console.log(max);
    console.log(index);
  }
});
