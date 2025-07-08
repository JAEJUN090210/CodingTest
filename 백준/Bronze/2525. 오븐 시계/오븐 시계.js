const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function (line) {
    input.push(line.trim());
    if (input.length === 2) readline.close();
}).on('close', function () {
    const time = input[0].split(' ');
    const A = Number(time[0]);
    const B = Number(time[1]);
    const C = Number(input[1]);

    const total = A * 60 + B + C;
    const hour = Math.floor(total / 60) % 24;
    const minute = total % 60;

    console.log(hour + " " + minute);
});
