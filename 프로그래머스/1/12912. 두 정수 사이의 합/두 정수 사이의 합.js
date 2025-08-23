function solution(a, b) {
    let r = 0;
    for(let i = ((a < b)? a : b); i <= ((a < b)? b : a); i++){
        r = r + i
    }
    return r;
}