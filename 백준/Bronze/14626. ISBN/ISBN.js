  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  rl.on("line", (line) => {
    input.push(line.trim());
  }).on("close", () => {
    const isbn = input[0];
    const weights = Array.from({ length: 12 }, (_, i) => (i % 2 === 0 ? 1 : 3));
    const damaged = isbn.indexOf("*");
    let total = 0;

    for (let i = 0; i < 12; i++) {
      if (i === damaged) continue;
      total += Number(isbn[i]) * weights[i];
    }

    const last = Number(isbn[12]);

    for (let j = 0; j <= 9; j++) {
      const tmp = total + j * weights[damaged];
      if ((tmp + last) % 10 === 0) {
        console.log(j);
        break;
      }
    }

    process.exit();
  });
