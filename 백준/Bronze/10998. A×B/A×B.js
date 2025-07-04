const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(Number);
}).on('close', function() {
    let a = input[0];
    let b = input[1];
    
    console.log(a * b);
});
