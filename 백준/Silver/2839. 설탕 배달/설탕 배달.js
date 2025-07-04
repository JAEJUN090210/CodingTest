const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = parseInt(line);
}).on('close', function() {
    let weight = input;
    let answer = 0;

    while (weight >= 0) {
        if (weight % 5 === 0) {
            answer += weight / 5;
            console.log(answer);
            return;
        }
        weight -= 3;
        answer++;
    }

    console.log(-1);
});
