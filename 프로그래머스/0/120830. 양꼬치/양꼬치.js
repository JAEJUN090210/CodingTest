function solution(n, k) {
    var na = n*12000;
    var ta = Math.floor(n/10);
    var ka = (k-ta)*2000;
    
    return na+ka;
}