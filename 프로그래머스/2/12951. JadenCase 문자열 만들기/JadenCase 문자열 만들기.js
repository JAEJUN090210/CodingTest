function solution(s) {
    let words = s.toLowerCase().split(" ");
    let temp = [];

    for (let i = 0; i < words.length; i++) {
        temp = words[i].split("");
        if (temp[0]) {
            temp[0] = temp[0].toUpperCase();
        }
        words[i] = temp.join("");
    }

    return words.join(" ");
}
