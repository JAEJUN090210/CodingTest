const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const [N, X] = input[0].split(' ').map(Number);
  const A = input[1].split(' ').map(Number);

  const result = A.filter(num => num < X);
  console.log(result.join(' '));
});
