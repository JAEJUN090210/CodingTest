const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
const lcm2 = (a, b) => (a / gcd(a, b)) * b;
const lcm3 = (a, b, c) => lcm2(lcm2(a, b), c);

rl.on("line", (line) => {
  const arr = line.trim().split(" ").map(Number);
  let ans = Infinity;

  for (let i = 0; i < 5; i++) {
    for (let j = i + 1; j < 5; j++) {
      for (let k = j + 1; k < 5; k++) {
        ans = Math.min(ans, lcm3(arr[i], arr[j], arr[k]));
      }
    }
  }

  console.log(ans);
  rl.close();
});
