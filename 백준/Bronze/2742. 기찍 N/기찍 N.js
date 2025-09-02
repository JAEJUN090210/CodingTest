const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  const N = Number(input[0]);
  let result = "";

  for (let i = N; i >= 1; i--) {
    result += i + "\n";
  }

  process.stdout.write(result);
});
