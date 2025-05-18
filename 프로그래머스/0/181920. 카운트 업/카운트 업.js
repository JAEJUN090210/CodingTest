function solution(start_num, end_num) {
    var answer = [];
    let n = 0;
    for(let i=start_num; i<=end_num; i++){
        answer[n] = i;
        n++;
    }
    return answer;
}