function solution(hp) {
    let answer = 0;
    while(hp > 0){
        if(hp-5 >= 0){
            answer = answer+1;
            hp = hp-5
        }else if(hp-3 >= 0){
            answer = answer+1
            hp = hp-3
        }else{
            answer = answer+1
            hp = hp-1
        }
    }
    return answer;
}