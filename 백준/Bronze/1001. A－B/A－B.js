const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on('line', (line) => {
	const [num1, num2] = line.split(' ').map(Number); // 공백으로 나누고 숫자로 변환
	console.log(num1 - num2); // 차이를 출력
	rl.close();
});
