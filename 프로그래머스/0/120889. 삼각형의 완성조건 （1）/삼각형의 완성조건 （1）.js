function solution(array) {
    array = array.sort((a, b) => a - b);
    if(array[2] < array[1]+array[0]) {
        return 1;
    }else {return 2;}
}