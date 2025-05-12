function solution(n) {
    let answer = Math.sqrt(n);
    if(answer%1 === 0){
        answer = 1;
    }else{
        answer = 2;
    }
    return answer;
}