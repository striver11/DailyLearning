/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/


const N = parseInt(readline());

const c='abcdefgh'.split("")
const r='12345678'.split("");
const p=new Map();
for(let i=0;i<r.length;i++){
    p.set(c[i],r[i])
}

for (let i = 0; i < N; i++) {
    const square = readline();
    const [cu,ro]=square.split('')
    if(((parseInt(p.get(cu))+parseInt(ro)))%2==0){
        console.log("dark")
    }else{
        console.log("light")
    }


}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log('answer');
