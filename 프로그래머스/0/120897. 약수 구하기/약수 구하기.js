// function solution(n) {
//     var answer = [];
    
//     for(let i = 1; i <= n; i++){
//         if(n % i === 0){
//             answer.push(i)
//         }
//     }
//     return answer;
// }

function solution(n) {
    var answer = [];
    for(let i = 1; i<= Math.sqrt(n); i++){
        if(n % i == 0){
            answer.push(i);
            if( i * i != n){
                answer.push(n / i);
            }
        }
    }
    answer.sort(function(a,b){
        return a - b;
    })
    
    return answer;
}