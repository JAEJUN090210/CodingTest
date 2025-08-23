function solution(s){
    s = s.split("");
    let Pcount = 0;
    let Ycount = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] == "p" || s[i] == "P"){
            Pcount = Pcount + 1;
        }else if(s[i] == "y" || s[i] == "Y"){
            Ycount = Ycount + 1;
        }
    }
    return (Pcount == Ycount)? true : false
}