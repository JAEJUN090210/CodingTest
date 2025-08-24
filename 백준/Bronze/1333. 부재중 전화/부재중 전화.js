const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.on("line", (line) => {
  const [N, L, D] = line.trim().split(" ").map(Number);
  const block = L + 5;
  const end = N * L + (N - 1) * 5;
  let t = 0;
  while (true) {
    if (t >= end) {
      console.log(t);
      break;
    }
    const pos = t % block;
    if (pos >= L) {
      console.log(t);
      break;
    }
    t += D;
  }
  rl.close();
});
