const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const T = parseInt(input[0]);

  for (let i = 1; i <= T; i++) {
    const [a, b] = input[i].split(' ').map(Number);

    const cycle = [];
    let val = a % 10;

    while (!cycle.includes(val)) {
      cycle.push(val);
      val = (val * a) % 10;
    }

    const index = (b - 1) % cycle.length;
    const result = cycle[index] === 0 ? 10 : cycle[index];
    console.log(result);
  }
});
