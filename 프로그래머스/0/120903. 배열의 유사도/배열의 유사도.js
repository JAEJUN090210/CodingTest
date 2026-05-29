function solution(s1, s2) {
    let answer = 0;

    for(let i=0; i<s1.length; i++){
        for(let n=0; n<s2.length; n++){
            if(s1[i] == s2[n]){
                answer ++;
            }
        }
    }

    return answer;
}