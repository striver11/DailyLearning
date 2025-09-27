const arr=[2,5,1,7,10]
let al=arr.length
k=14

maxlen=0

let ars=[]

for(let i=0;i<al;i++){
        let sum=0
    for(j=i;j<al;j++){

        sum= sum+arr[j]
            ars.push(sum)
        if(sum<=k){
            maxlen=Math.max(maxlen,j-i+1)
        }else if(sum>k) break;

    }
}
console.log(ars)
console.log(maxlen)