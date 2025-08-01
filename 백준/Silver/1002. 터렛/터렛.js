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
    const [x1, y1, r1, x2, y2, r2] = input[i].split(' ').map(Number);
    const dx = x1 - x2;
    const dy = y1 - y2;
    const d = Math.sqrt(dx * dx + dy * dy);

    if (d === 0 && r1 === r2) {
      console.log(-1);
    } else if (d === r1 + r2 || d === Math.abs(r1 - r2)) {
      console.log(1);
    } else if (Math.abs(r1 - r2) < d && d < r1 + r2) {
      console.log(2);
    } else {
      console.log(0);
    }
  }
});
