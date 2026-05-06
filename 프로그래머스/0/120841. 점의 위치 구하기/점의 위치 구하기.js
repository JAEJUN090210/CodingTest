// function solution(dot) {
//     let answer = 0;
//     if(dot[0]>=0){
//         if(dot[1]>=0){
//            answer=1;
//         }else{
//             answer=4;
//         }
//     }else{
//         if(dot[1]>=0){
//            answer=2;
//         }else{
//             answer=3;
//         }
//     }
//     return answer;
// }

function solution(dot) {
    const [x, y] = dot;

    if (x >= 0 && y >= 0) return 1;
    if (x < 0 && y >= 0) return 2;
    if (x < 0 && y < 0) return 3;
    return 4;
}