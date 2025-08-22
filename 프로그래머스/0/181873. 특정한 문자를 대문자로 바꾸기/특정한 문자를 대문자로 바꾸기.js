// function solution(my_string, alp) {
//     my_string = my_string.split("");
//     for(let i = 0; i < my_string.length; i++){
//         if(my_string[i] == alp){
//             my_string[i] = alp.toUpperCase();
//         }
//     }
//     return my_string.join("");
// }

const solution = (my_string, alp) => my_string.replaceAll(alp, alp.toUpperCase())