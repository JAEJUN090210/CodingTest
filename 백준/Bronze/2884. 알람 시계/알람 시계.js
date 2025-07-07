const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
    let H = input[0];
    let M = input[1];

    M = (M >= 45) ? M - 45 : (H = (H === 0 ? 23 : H - 1), M + 15);

    console.log(H + " " + M);
});
