function solution(cipher, code) {
    var answer = [];
    let n = 0;
    for(let i = 1; i<=cipher.length; i++){
        if(code*i <= cipher.length){
            answer[n] = cipher[code*i-1];
            n ++;   
        }
    }
    return answer.join('');
}