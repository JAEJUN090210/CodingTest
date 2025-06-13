const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
    rl.close();
}).on('close', function () {
    const n = parseInt(input[0]);
    let result = '';

    if (n === 1) {
        result += '*\n';
    } else if (n === 2) {
        result += '*\n**\n';
    } else if (n === 3) {
        result += '*\n**\n***\n';
    } else if (n === 4) {
        result += '*\n**\n***\n****\n';
    } else if (n === 5) {
        result += '*\n**\n***\n****\n*****\n';
    } else if (n === 6) {
        result += '*\n**\n***\n****\n*****\n******\n';
    } else if (n === 7) {
        result += '*\n**\n***\n****\n*****\n******\n*******\n';
    } else if (n === 8) {
        result += '*\n**\n***\n****\n*****\n******\n*******\n********\n';
    } else if (n === 9) {
        result += '*\n**\n***\n****\n*****\n******\n*******\n********\n*********\n';
    } else if (n === 10) {
        result += '*\n**\n***\n****\n*****\n******\n*******\n********\n*********\n**********\n';
    }

    console.log(result);
});