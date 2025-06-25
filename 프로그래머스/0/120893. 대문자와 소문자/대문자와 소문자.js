function solution(my_string) {
    my_string = my_string.split('');
    for(let i = 0; i < my_string.length; i ++) {
        if(my_string[i] == my_string[i].toUpperCase()){
            my_string[i] = my_string[i].toLowerCase();
        }else {
            my_string[i] = my_string[i].toUpperCase();
        }
    }
    return my_string.join('');
}