const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let chocolates = [];
let coffees = [];
let queries = [];

rl.on("line", (line) => {
  let parts = line.trim().split(" ");
  if (parts[0] === "Query") {
    queries.push(parseInt(parts[1]));
  } else if (parts[0] === "Chocolate") {
    chocolates.push([parseInt(parts[1]), parseFloat(parts[2])]);
  } else if (parts[0] === "Coffee") {
    coffees.push([parseInt(parts[1]), parseFloat(parts[2])]);
  }
}).on("close", () => {
  queries = queries.map((t, i) => [t, i]);
  queries.sort((a, b) => a[0] - b[0]);

  let results = [];

  for (let [T] of queries) {
    let total = 0;

    for (let [t0, n] of chocolates) {
      if (T >= t0) {
        let val = 8 * n - (T - t0) / 12;
        if (val > 0) total += val;
      }
    }

    for (let [t0, n] of coffees) {
      if (T >= t0) {
        let dt = T - t0;
        let val = 2 * n - (dt * dt) / 79;
        if (val > 0) total += val;
      }
    }

    if (total < 1) total = 1;
    results.push([T, Math.round(total * 10) / 10]);
  }

  for (let [T, val] of results) {
    console.log(`${T} ${val.toFixed(1)}`);
  }
});
