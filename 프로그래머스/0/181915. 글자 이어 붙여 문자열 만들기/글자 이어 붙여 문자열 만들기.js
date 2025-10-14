function solution(my_string, index_list) {
    let string= []
    for(let i = 0; i < index_list.length; i++){
        string[i] = my_string[index_list[i]];
    }
    return string.join("")
}