function solution(num_list) {
    let sum=0;
    let mul=1;
    for(let i = 0; i < num_list.length; i++){
        sum += Number(num_list[i]);
        mul *= Number(num_list[i]);
    }
    return (sum*sum < mul) ? 0 : 1
}