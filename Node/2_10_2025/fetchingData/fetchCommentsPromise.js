

// const res=fetch('https://dummyjson.com/comments?limit=10')
//             .then(res=>res.json())
//             .then(console.log)



// const res=fetch('https://dummyjson.com/comments?limit=10')
//             .then(res=>res.json())
//             .then(res=>res.data)

// output:
// Promise { <pending> }

// const res=fetch('https://dummyjson.com/comments?limit=10')
//             .then(res=>res.json())
//             .then(comments=>res.comments)
 
//output:
// Promise { <pending> }

// const res=fetch('https://dummyjson.com/comments?limit=10')
//             .then(res=>res.json())
//             .then(data=>res.data)
//             .then(commnets=> {return data.commnts})

// Problems inside:
// .then(data => res.data)
// At this point, data is the parsed JSON.
// You should use data.something, not res.data (since res here is out of scope).
// .then(commnets => { return data.commnts })
// Here, you misspelled both comments and commnets.
// Also, data is not available in this scope — the value passed into .then() is the previous return.

// output:
// C:\DailyLearning\Node\2_10_2025\fetchingData\fetchCommentsPromise.js:26
//             .then(commnets=> {return data.commnts})
//                               ^

// ReferenceError: data is not defined



// const res=fetch("https://dummyjson.com/comments?limit=10")
//             .then(res=>res.json())
//             .then(data=>{return data.comments})
//output
//Promise { <pending> }

// const res=fetch("https://dummyjson.com/comments?limit=10")
//             .then(res=>res.json())
//             .then(data=>data.comments)
//             .then(comments=>return comments)

// output:
// C:\DailyLearning\Node\2_10_2025\fetchingData\fetchCommentsPromise.js:54
//             .then(comments=>return comments)
//                             ^^^^^^

// SyntaxError: Unexpected token 'return'


// const res=fetch('https://dummyjson.com/comments?limit=10')
//             .then(res=>res.json())
//             .then(data=>data.comments)
//             .then(comments=>{return comments})

// //output
// // Promise { <pending> }

const res = fetch('https://dummyjson.com/comments?limit=10')
  .then(res => res.json())          // convert to JS object
  .then(data => data.comments)      // get only comments
  .then(comment => {               // now comments is available
    return comment;
  });


  const data=res.then(comments=>{return comments})

const comBody= data.then(body=>{return body})

console.log(comBody)


    // Fetch comments from API
    async function fetchComments(isInitial = false) {
      try {
        const res = await fetch(`https://hummawn.com/comments?limit=${limit}&skip=${skip}`);
        const data = await res.json();

        if (data && Array.isArray(data)) {
          data.forEach(comment => {
            renderComment(comment, !isInitial);
          });
          skip += data.length;
        }
      } catch (err) {
        console.error("Error fetching comments:", err);
      }
    }