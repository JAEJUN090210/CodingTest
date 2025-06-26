function solution(num_list, n) {
    let f = num_list.splice(0, n);
    return [...num_list, ...f];
}