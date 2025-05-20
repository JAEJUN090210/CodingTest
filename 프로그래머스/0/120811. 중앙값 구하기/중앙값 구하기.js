function solution(array) {
    array = array.sort((a, b) => a - b);
    let a = array.length;
    return array[Math.floor(a/2)]

}