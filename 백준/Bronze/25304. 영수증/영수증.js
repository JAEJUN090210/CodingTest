const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const total = parseInt(input[0]);
  const n = parseInt(input[1]);

  let sum = 0;

  for (let i = 0; i < n; i++) {
    const [price, count] = input[2 + i].split(" ").map(Number);
    sum += price * count;
  }

  if (sum === total) {
    console.log("Yes");
  } else {
    console.log("No");
  }

  process.exit();
});
