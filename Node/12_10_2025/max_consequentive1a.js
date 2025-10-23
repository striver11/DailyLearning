nums = [1, 1, 0, 0, 1, 1, 1,1, 0]

function conc(nums){
    let co=0;
    let maxco=0
    
    for(let n of nums){
        if(n==1){
            co++;
        }else if(n==0){
            co=0;
        }
        if(maxco<co){
            maxco=co
        }
    }
    
    return maxco
    
}
console.log(conc(nums));