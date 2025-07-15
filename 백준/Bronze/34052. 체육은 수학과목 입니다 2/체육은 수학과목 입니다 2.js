const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let times = [];

rl.on("line", (line) => {
  times.push(Number(line.trim()));
  if (times.length === 4) {
    rl.close();
  }
});

rl.on("close", () => {
  const total = times.reduce((acc, cur) => acc + cur, 0) + 300;
  if (total <= 1800) {
    console.log("Yes");
  } else {
    console.log("No");
  }
});
