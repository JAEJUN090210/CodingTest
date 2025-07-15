const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const numbers = [];

for (let i = 1; i <= N; i++) {
  numbers.push(Number(input[i]));
}

numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers.join('\n'));
