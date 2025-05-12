function solution(s1, s2) {
    let answer = 0;
    let s1length = s1.length;
    let s2length = s2.length;
    for(let i=0; i<=s1length; i++){
        for(let n=0; n<=s2length; n++){
            if(s1[i] == s2[n]){
                answer ++;
            }
        }
    }
    answer = answer-1;
    return answer;
}