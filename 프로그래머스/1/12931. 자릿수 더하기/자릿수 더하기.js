function solution(n){
    const stringn = n.toString()
    const temp = stringn.split('');
    const sum = temp.reduce((acc,cur)=>acc + Number(cur),0);

    return sum;
}