let fr=[
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
   ["apples", 400] //observe this
]


const frMap=new Map(fr);
console.log(frMap)  //Map(3) { 'apples' => 400, 'bananas' => 300, 'oranges' => 200 }


const f = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

for(let i of f.entries()){
    console.log(i)
}


console.log(f)


//convert map to list
let arl=[]
for(let i of frMap){
    arl.push(i)
}
console.log(arl)


let arl2=[]
for(let i of frMap){
    arl2.push(i.join('_'))
}

console.log(arl2)

const f2=[ 'apples_400', 'bananas_300', 'oranges_200','apples_800' ,'apples_300', 'bananas_400']

let f2m=new Map();
for(let i of f2){
    console.log(i.split("_"))
}

// for(let i of f2){               //Map(3) { 'a' => 'p', 'b' => 'a', 'o' => 'r' }
//     f2m.set(i[0],i[1])
// }


for(let i of f2){
    let h=i.split('_')
    f2m.set(h[0],h[1])
}

console.log(f2m)


let price1=['400','300','800']
let price2=['300','400']

function f1(){
    let fset=new Set();
    let farr=[]
   


    for(let i of f2){
        let j=i.split("_")
        farr.push(j)
        fset.add(j[0])

    }
         let fsetarr=Array.from(fset)
         let pric=[]

    for(let i of fsetarr){
       let ipr=[]
       for(let j of farr){
        if(i===j[0]){
            ipr.push(j[1])
        }
       }
       pric.push(ipr)
    }

    console.log(pric)
    
    let i=0
    for(let j of pric){
       i+=1;
       if(j.includes(pric)){
        console.log(fsetarr);
       }
    }
     
}
f1()