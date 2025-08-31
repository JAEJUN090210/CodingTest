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
  const meetings = [];

  for (let i = 1; i <= N; i++) {
    const [start, end] = input[i].split(" ").map(Number);
    meetings.push([start, end]);
  }

  meetings.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let count = 0;
  let endTime = 0;

  for (let [start, end] of meetings) {
    if (start >= endTime) {
      count++;
      endTime = end;
    }
  }

  console.log(count);
});
