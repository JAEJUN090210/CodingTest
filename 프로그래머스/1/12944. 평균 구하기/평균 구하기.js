function solution(arr) {
    let avr = 0;
    for(let i = 0; i < arr.length; i++){
        avr = avr + arr[i];
    }
    return (avr / arr.length)
}