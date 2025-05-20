function solution(array, height) {
    var answer = 0;
    for(let i = 0; i <= 200; i++){
        if(height < [array[i]]) {
         answer ++;   
        }
    }
    return answer;
}