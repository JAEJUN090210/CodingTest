const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line.trim());

  if (input.length === 2) {
    const numbers = input[1].split(' ').map(Number);
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    console.log(`${min} ${max}`);
    rl.close();
  }
});
