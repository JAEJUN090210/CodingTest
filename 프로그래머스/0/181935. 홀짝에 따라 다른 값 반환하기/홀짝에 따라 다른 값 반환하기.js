function solution(n) {
    let answer = 0;
    if(n%2 == 0){
        for(i=0; i<=n; i++){
            if(i%2 == 0){
                answer = answer+(i*i);
            }
        }
    }else{
        for(i=0; i<=n; i++){
            if(i%2 != 0){
                answer = answer+i;
            }
        }
    }
    return answer;
}