/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const m = parseInt(readline());
const n = parseInt(readline());
const cm = m - 1;
const cn = n - 1;
const arr=[]

while(cm<=cn){
    
    let d=0;
    const cm2=cm;
    const cm3=cm;
    while(cm!=0){
        cm=cm/10;
        d+=1;
    }
    
    let sum=0;

    while(cm2!=0){
        r=cm2%10;
        let p=1;
        for(let i=0;i<d;i++){
            p=p*r
        }

        sum+=p
        cm2=cm2/10;

        
    }
    if(sum==cm3){
        arr.push(cm3)
    }


   cm+=1;
}

console.log(arr)