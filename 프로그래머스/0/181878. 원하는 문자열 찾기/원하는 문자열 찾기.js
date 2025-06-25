function solution(myString, pat) {
    myString = myString.toUpperCase();
    pat = pat.toUpperCase();
    
    return (myString.search(pat) == -1 ? 0 : 1);
}