const input = [
  ["Jack", "Jones", 1],
  ["Andy", "Mike", 0],
  ["Jones", "Andy", 1],
  ["Jack", "Mike", 1],
  ["Riya", "Jack", 1],
  ["Mike", "Jack", 0],
  ["Andy", "Riya", 1],
  ["Jones", "Jack", 0],
  ["Mike", "Andy", 0],
];


let co=new Map();

for(let [p1,p2,s] of input){
    if(s===1){
        co.set(p1,(co.get(p1)||0)+1);
        co.set(p2,(co.get(p2)||0)+1);

    }
}

console.log(co)