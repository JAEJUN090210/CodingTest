const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  const [nStr, mStr] = input[0].split(" ");
  const n = BigInt(nStr);
  const m = BigInt(mStr);

  const share = n / m;
  const remainder = n % m;

  console.log(share.toString());
  console.log(remainder.toString());
});
