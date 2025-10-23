let arr=[3,4,2,5,1,2,6,5,3,1]

let sa=new Set(arr)
let fa=new Map()

console.log(sa)

for(let i of sa){
    let c=0;
    for(let j of arr){
        if(i==j){

            //You’re mixing object property assignment (fa[i] = ...) with a Map.
            //Map should use .set(key, value) and .get(key).
            //fa[i] works only if fa were a plain object, not a Map.

            // fa[i]=fa.get(i)+1||0;
            //fa.set(i,fa.get(i)+1||0)  //Map(6) { 3 => 1, 4 => 0, 2 => 1, 5 => 1, 1 => 1, 6 => 0 }
            //Your logic fa.get(i) + 1 || 0 always falls to 0 the first time (since undefined + 1 = NaN, and NaN || 0 = 0).
            //→ That means the first occurrence is stored as 0, not 1.
            c++;
        }
        fa.set(i,c)
    }

}

console.log(fa)


//without using set
let arr2=[3,4,2,5,1,2,6,5,3,1,1]

let fa1=new Map()

for(let n of arr2){
    fa1.set(n,(fa1.get(n)||0)+1)
}

console.log(fa1)


//with the plain object

let arr3=[3,4,2,5,1,2,6,5,3,1,1]
let fa3={}

for (let n of arr3){
    fa3[n]=(fa3[n]||0)+1
}

console.log(fa3)