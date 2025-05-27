// function solution(names) {return [names[0], names[5], names[10], names[15], names[20], names[25],names[30]].filter(Boolean);}

function solution(names) {
    let answer = [];
    for (let i = 0; i < names.length; i += 5) {
        answer.push(names[i]);
    }
    return answer;
}