const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = 0;
let queue = [];
let front = 0;

rl.on("line", (line) => {
  if (!N) {
    N = Number(line.trim());
    for (let i = 1; i <= N; i++) {
      queue.push(i);
    }
    rl.close();
  }
});

rl.on("close", () => {
  while (queue.length - front > 1) {
    front++;
    queue.push(queue[front]);
    front++;
  }
  console.log(queue[front]);
});
