

// async function fetchAPI() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");

//     if (!res.ok) {
//       console.error("HTTP error", res.status);
//       return;
//     }

//     const data = await res.json();
//     console.log(data); // actual JSON body
//   } catch (e) {
//     console.error("error", e);
//   }
// }

// fetchAPI();


// Example with fetch
async function getUserWithFetch() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/invalid-url");

    // ❌ Fetch will NOT throw an error for 404/500
    console.log("Status:", response.status); // 404
    console.log("OK:", response.ok);         // false

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    // This only runs for *network errors* (like no internet, DNS fail, etc.)
    console.error("Fetch error:", error.message);
  }
}

getUserWithFetch();
