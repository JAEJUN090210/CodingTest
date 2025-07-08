const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line.trim());
    if (input.length === 2) readline.close();
}).on('close', function() {
    const a = Number(input[0]);
    const b = input[1];

    const b1 = Number(b[2]); // 일의 자리
    const b2 = Number(b[1]); // 십의 자리
    const b3 = Number(b[0]); // 백의 자리

    console.log(a * b1);
    console.log(a * b2);
    console.log(a * b3);
    console.log(a * Number(b));
});
