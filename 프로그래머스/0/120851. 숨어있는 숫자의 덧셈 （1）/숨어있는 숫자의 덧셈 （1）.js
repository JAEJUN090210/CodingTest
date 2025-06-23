function solution(my_string) {
    let result = 0;
    for (let i = 0; i < my_string.length; i++) {
        isNaN(my_string[i]) ? null : result = result + Number(my_string[i]);
    }
    return result;
}