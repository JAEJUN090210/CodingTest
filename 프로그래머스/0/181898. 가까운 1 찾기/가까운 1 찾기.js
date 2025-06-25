// function solution(arr, idx) {
//     for(let i = idx; i <= arr.length; i ++){
//         if(arr[i] == 1){
//             return i;
//             break;
//         }
//     }
//     return -1;
// }

const solution = (arr, idx) => arr.map((v, i) => i < idx ? 0 : v).indexOf(1)