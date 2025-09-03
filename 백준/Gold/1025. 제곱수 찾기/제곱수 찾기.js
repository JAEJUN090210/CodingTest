const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let N, M;
let board = [];
let maxSquare = -1;

function isPerfectSquare(num) {
    if (num < 0) return false;
    const root = Math.sqrt(num);
    return root === Math.floor(root);
}

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    [N, M] = input[0].split(' ').map(Number);
    board = input.slice(1).map(row => row.split('').map(Number));

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            const num = board[i][j];
            if (isPerfectSquare(num)) {
                maxSquare = Math.max(maxSquare, num);
            }
        }
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            for (let row_diff = -N; row_diff < N; row_diff++) {
                for (let col_diff = -M; col_diff < M; col_diff++) {
                    if (row_diff === 0 && col_diff === 0) continue;
                    
                    let currentRow = i;
                    let currentCol = j;
                    let currentNumStr = '';

                    while (currentRow >= 0 && currentRow < N && currentCol >= 0 && currentCol < M) {
                        currentNumStr += board[currentRow][currentCol];
                        const currentNum = parseInt(currentNumStr);

                        if (isPerfectSquare(currentNum)) {
                            maxSquare = Math.max(maxSquare, currentNum);
                        }

                        currentRow += row_diff;
                        currentCol += col_diff;
                    }
                }
            }
        }
    }

    console.log(maxSquare);
    process.exit();
});