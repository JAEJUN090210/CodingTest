const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input = line.trim().split(" ").map(Number);
}).on("close", () => {
  let sum = 0;
  for (let num of input) {
    sum += num * num;
  }
  console.log(sum % 10);
});
