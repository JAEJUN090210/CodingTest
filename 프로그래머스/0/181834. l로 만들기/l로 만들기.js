function solution(myString) {
    let value = [];
    myString = myString.split('');
    for(let i = 0; i < myString.length; i ++) {
        value[i] = myString[i].charCodeAt();
        if(value[i] <= 108) {
            value[i] = 108;
        }
        myString[i] = String.fromCharCode(value[i]);
    }
    return myString.join('');
}