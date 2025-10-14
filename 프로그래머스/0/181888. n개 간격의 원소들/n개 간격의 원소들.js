function solution(num_list, n) {
    let list = []
    for(let i = 0; i < num_list.length; i+=n){
        list.push(num_list[i]);
    }
    return list
}