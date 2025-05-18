function solution(n) {
    return n.toString().split('').reduce((a,b) => Number(a)+Number(b) , 0);
}