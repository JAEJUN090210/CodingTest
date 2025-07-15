const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line.trim());
}).on('close', function () {
    var N = parseInt(input[0]);
    var A = input[1].split(' ').map(function (x) {
        return parseInt(x);
    });
    var M = parseInt(input[2]);
    var B = input[3].split(' ').map(function (x) {
        return parseInt(x);
    });

    var setA = {};
    for (var i = 0; i < A.length; i++) {
        setA[A[i]] = true;
    }

    for (var j = 0; j < B.length; j++) {
        if (setA[B[j]]) {
            console.log(1);
        } else {
            console.log(0);
        }
    }
});
