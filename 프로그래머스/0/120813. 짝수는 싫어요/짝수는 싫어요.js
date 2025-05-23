function solution(n) {
    var answer = [];
    let j = 0;
    for(let i = 0; i<=n; i++){
        if(i % 2 !== 0){
            answer[j] = i;
            j = j + 1;
        }
    }
    return answer;
}