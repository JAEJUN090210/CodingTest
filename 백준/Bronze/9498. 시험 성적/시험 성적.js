const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
    const value = input[0];
    
    if(value >= 90) console.log("A");
    else if(value >= 80) console.log("B");
    else if(value >= 70) console.log("C");
    else if(value >= 60) console.log("D");
    else console.log("F");
});