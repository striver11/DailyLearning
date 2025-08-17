let arr=['b','a','a','c','d','b']

let arSet=new Set(arr);
console.log(arSet)
let arrLen=arr.length;
let arrMap=new Map();


for(let i of arSet){
        let count =0;
    for(let j=0;j<arrLen;j++){
        if(i==arr[j]){
            count+=1;
          
        }
    }
    arrMap.set(i,count)
}

console.log(arrMap)