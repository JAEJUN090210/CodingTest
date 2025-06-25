function solution(todo_list, finished) {
    for(let i = 0; i < finished.length; i++){
        if (finished[i]) {
            todo_list.splice(i, 1);
            finished.splice(i, 1);
            i = i-2;
        }
    }
    return todo_list;
}