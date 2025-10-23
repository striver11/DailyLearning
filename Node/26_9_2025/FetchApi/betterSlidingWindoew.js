let arr=[2,5,1,10,10]
let al=arr.length
let l=0,r=0,maxlen=0,sum=0;
let k=14
let li=0,ri=0;

while(r<al){
    sum=sum+arr[r]

        while(sum>k){
            sum=sum-arr[l]
            l=l+1
        }

    if(sum<=k){

    if (r - l + 1 > maxlen) {   // update maxlen when a bigger subarray is found
        maxlen = r - l + 1;
        li = l;
        ri = r;
    }

         //maxlen=Math.max(maxlen,r-l+1)
        //this below condition does not work because the maxlen

        // You update maxlen correctly with Math.max.
        // But then you check if(maxlen > r-l+1), which is always false when you just found a new max.
        // So li and ri never update correctly.
        // if(maxlen>r-l+1){
        //     li=l;
        //     ri=r;
        // }
    }
    r++;
}

console.log(maxlen)
console.log(arr.slice(li,ri+1))