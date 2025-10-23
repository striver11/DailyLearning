let arr=[2,5,1,10,10]

let l=0;
let r=0;
let sum=0;
let maxlen=0
let k=14
let n=arr.length
let bl=0
let br=0

while(r<n){
    sum=sum+arr[r]

    while(sum>k){
        sum=sum-arr[l];
        l=l+1
    }
    if(sum<=k){
        // maxlen=Math.max(maxlen,r-l+1)
        if(r-l+1>maxlen){
            maxlen=r-l+1
            bl=l;
            br=r;
        }
    }

    r=r+1;

}

console.log([maxlen,[...arr.slice(l,r+1)]])


