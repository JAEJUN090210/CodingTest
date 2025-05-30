function solution(my_string, num1, num2) {
    let a = my_string.split('');
    let temp = a[num1];
    a[num1] = a[num2];
    a[num2] = temp;
    return a.join('');
}