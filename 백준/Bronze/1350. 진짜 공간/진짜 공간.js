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
  const files = input[1].split(" ").map(Number);
  const cluster = Number(input[2]);

  let total = 0;

  for (let size of files) {
    if (size === 0) continue;
    const clustersNeeded = Math.ceil(size / cluster);
    total += clustersNeeded * cluster;
  }

  console.log(total);
});
