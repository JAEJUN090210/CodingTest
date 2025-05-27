function solution(start_num, end_num) {
    let answer = [];
    let n = 0;
    for(let i = start_num; i >= end_num; i --){
        answer[n] = i;
        n = n + 1;
    }
    return answer;
}