function solution(numbers) {
  let number = numbers.reduce((acc, cur) => acc + cur);
  return number / numbers.length;
}