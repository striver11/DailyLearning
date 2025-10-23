

async function fetchData(){
   try{
     const res=await fetch('https://dummyjson.com/comments?limit=10')
    if(!res.ok){
        throw new Error(`Response status ${res.status}`)
    }
    const data=await res.json();
    return data.comments
    
   }catch(err){
    console.error(err.message)
   }
}


// ----------------------this two are the correct way of doing it
// fetchData().then(comments=>console.log(comments))

// async function main(){
//   const comments= await fetchData();
//   console.log(comments)
// }

// main()


///  --------------------this is wrong way of doing and dealing with promises
// comments=fetchData()
// console.log(comments)
// output:
// Promise { <pending> }


// Ah! I see the problem in your code. You’re using async/await, which is mostly correct, but there’s a common mistake:

// comments = fetchData();
// console.log(comments);


// Here, fetchData() is async, so it always returns a Promise. You cannot log the actual comments this way because the Promise hasn’t resolved yet.

// Correct Way 1: Using await outside

// You need to be inside an async function to use await:

// async function main() {
//   const comments = await fetchData();
//   console.log(comments);  // now you get the actual array
// }

// main();

// Correct Way 2: Using .then()
// fetchData().then(comments => {
//   console.log(comments);  // actual array
// });

// Key Takeaways

// async function always returns a Promise.

// You cannot access the resolved value directly outside without await or .then().

// Inside fetchData, you correctly handle errors and return data.comments. ✅





brave new angry 

cat constructor copy every entry FileList

filty five foxes find flat Map

foreach keys from lastIndexOf Array includes index of join

prototype lengthy map of population

righ shift push reduces some reverse shift slice

sort splice toReversed sorted spliced toString  with valuesOf unshift




brave new angry 

cat construcotr copy every entry FileList

filthy fivefoxes find flat map

foreach kkeys from lastIndexOf array includes index of join

prototype lenghty map of population

right shift push redues some revers shift slice

sort slice toReversed sorted sliced toString with valuesOf unshift




le




