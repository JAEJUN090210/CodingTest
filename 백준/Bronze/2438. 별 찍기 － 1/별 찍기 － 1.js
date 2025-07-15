const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const N = parseInt(line.trim());

  for (let i = 1; i <= N; i++) {
    console.log('*'.repeat(i));
  }
});
