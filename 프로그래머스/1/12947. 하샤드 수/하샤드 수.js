function solution(x) {
    let y = x.toString().split("");
    let z = 0
    for(let i = 0; i<y.length; i++){
        z = z + Number(y[i]);
    }
    return (x % z == 0)? true : false;
}