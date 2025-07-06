function solution(numLog) {
    let answer = '';
    for(let i = 1; i < numLog.length; i++){
        switch(numLog[i]){
            case numLog[i-1] + 1 :
                answer = answer + "w";
                break;
            case numLog[i-1] + 10 :
                answer = answer + "d";
                break;
            case numLog[i-1] - 1 :
                answer = answer + "s";
                break;
            case numLog[i-1] - 10 :
                answer = answer + "a";
                break;
        }
    }
    return answer;
}