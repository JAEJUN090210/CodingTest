const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on("line", (line) => input.push(line));
rl.on("close", () => {
  const N = parseInt(input[0]);
  const A = input[1].split(" ").map(Number);

  let arr = A.map((val, idx) => ({val, idx}));

  arr.sort((a, b) => a.val - b.val || a.idx - b.idx);

  let P = Array(N);
  arr.forEach((item, i) => {
    P[item.idx] = i;
  });

  console.log(P.join(" "));
});
