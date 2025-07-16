function solution(n) {
    let arr = [];
    arr.push(n);
    while(n != 1) {
        if(n % 2 == 0){
            n = n/2;
            arr.push(n);
        }else if(n % 2 != 0){
            n = 3 * n + 1;
            arr.push(n);
        }
    }
    return arr;
}