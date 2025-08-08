const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on("line", (line) => {
    input.push(line.trim());
}).on("close", () => {
    const [N, M] = input[0].split(" ").map(Number);
    const board = input.slice(1);

    let minPaint = Infinity;

    const checkBoard = (x, y) => {
        let caseW = 0;
        let caseB = 0;

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                let expectedW = (i + j) % 2 === 0 ? 'W' : 'B';
                let expectedB = (i + j) % 2 === 0 ? 'B' : 'W';

                if (board[x + i][y + j] !== expectedW) caseW++;
                if (board[x + i][y + j] !== expectedB) caseB++;
            }
        }
        return Math.min(caseW, caseB);
    };

    for (let i = 0; i <= N - 8; i++) {
        for (let j = 0; j <= M - 8; j++) {
            minPaint = Math.min(minPaint, checkBoard(i, j));
        }
    }

    console.log(minPaint);
});
