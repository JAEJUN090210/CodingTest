function solution(num_list) {
    let num1 = num_list.filter(el=>(el%2===1));
    let num2 = num_list.filter(el=>(el%2===0));
    return Number(num1.join(''))+Number(num2.join(''));
}