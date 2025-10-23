let s='abc'
let s1='abcba'

let sa=s.split('')
let s1a=s1.split('')
let l=s1a.length
let per=[]

for(let i=0;i<l;i++){
    let temp=[]
    for(let j=i;j<l;j++){
        temp.push(s1a[j])
        per.push([...temp])
    }
}

console.log(per)

let count=0;
for(let i of per){
    if(i.includes(sa)){
        count++;
    }
}
console.log(count)

