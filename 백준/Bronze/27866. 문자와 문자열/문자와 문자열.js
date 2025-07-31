const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  const S = input[0];
  const i = parseInt(input[1]);
  console.log(S[i - 1]);
});
