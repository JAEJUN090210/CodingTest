const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const T = parseInt(input[0]);
  const combination = (n, r) => {
    if (r === 0 || n === r) return 1;
    let result = 1;
    for (let i = 1; i <= r; i++) {
      result *= n--;
      result /= i;
    }
    return result;
  };
  for (let i = 1; i <= T; i++) {
    const [N, M] = input[i].split(" ").map(Number);
    console.log(combination(M, N));
  }
  process.exit();
});
