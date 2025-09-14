// 1️⃣ Using the spread operator ...
const mySet = new Set([1, 2, 3, 4]);
const myList = [...mySet];

console.log(myList); // [1, 2, 3, 4]



// 2️⃣ Using Array.from()
const mySet2 = new Set([1, 2, 3, 4]);
const myList2 = Array.from(mySet2);

console.log(myList2); // [1, 2, 3, 4]
