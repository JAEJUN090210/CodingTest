function solution(x, n) {
    let arr = [];
    let j = x;
    for(let i = 0; i < n; i ++){
        arr.push(j);
        j = j + x;
    }
    return arr;
}