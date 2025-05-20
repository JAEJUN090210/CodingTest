function solution(numbers, num1, num2) {
    let array = [];
    let n = 0;
    for(let i = num1; i <= num2; i ++){
        array[n] = numbers[i];
        n ++;
    }
    return array;
}