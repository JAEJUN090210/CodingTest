const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  const A = BigInt(input[0]);
  const B = BigInt(input[1]);

  const sum = A + B;
  const diff = A - B;
  const prod = A * B;

  console.log(sum.toString());
  console.log(diff.toString());
  console.log(prod.toString());
});