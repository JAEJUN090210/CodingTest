const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const N = parseInt(input[0]);
  const files = input.slice(1);
  const len = files[0].length;
  let pattern = '';

  for (let i = 0; i < len; i++) {
    const char = files[0][i];
    let same = true;

    for (let j = 1; j < N; j++) {
      if (files[j][i] !== char) {
        same = false;
        break;
      }
    }

    pattern += same ? char : '?';
  }

  console.log(pattern);
});
