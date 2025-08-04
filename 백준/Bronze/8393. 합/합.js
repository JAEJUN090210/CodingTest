const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const n = parseInt(line);
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  console.log(sum);
  rl.close();
});