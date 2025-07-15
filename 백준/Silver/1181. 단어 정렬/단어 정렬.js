const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let words = [];

rl.on("line", (line) => {
  words.push(line.trim());
  if (words.length === Number(words[0]) + 1) {
    rl.close();
  }
});

rl.on("close", () => {
  const result = [...new Set(words.slice(1))]
    .sort((a, b) =>
      a.length !== b.length ? a.length - b.length : a.localeCompare(b)
    );

  console.log(result.join("\n"));
});
