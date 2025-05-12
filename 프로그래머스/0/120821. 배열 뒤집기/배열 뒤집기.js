function solution(num_list) {
    let answer = [];
    let n = num_list.length
    for(let i=0; i<=num_list.length-1; i++){
        n = n-1;
        answer[i] = num_list[n];
    }
    return answer;
}