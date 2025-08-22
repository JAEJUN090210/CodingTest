function solution(myString) {
    myString = myString.toLowerCase().split("");
    for(let i = 0; i<myString.length; i++){
        if(myString[i] == "a"){
            myString[i] = "A";
        }
    }
    return myString.join("");
}