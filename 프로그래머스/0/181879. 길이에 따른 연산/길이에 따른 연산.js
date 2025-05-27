function solution(num_list) {
    let sum = 0;
    if(num_list.length <= 10) {
        sum = 1;
        for(let i = 0; i < num_list.length; i ++){
            sum = sum * num_list[i];
        }
    }else {
        for(let i = 0; i < num_list.length; i ++){
            sum = sum + num_list[i];
        }
    }
    return sum;
}