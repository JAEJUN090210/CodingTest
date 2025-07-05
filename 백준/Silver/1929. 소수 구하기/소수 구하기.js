const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

readline.on('line', function (line) {
    input = line.split(' ').map(Number);
}).on('close', function () {
    const [M, N] = input;

    // 모든 수를 소수(true)로 초기화
    const isPrime = new Array(N + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= N; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= N; j += i) {
                isPrime[j] = false;
            }
        }
    }

    for (let i = M; i <= N; i++) {
        if (isPrime[i]) {
            console.log(i);
        }
    }
});
