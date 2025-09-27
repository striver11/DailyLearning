// const axios = require("axios");

// async function getUsers() {
//   try {
//     const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//     console.log(response.data); // already a JS object/array
//   } catch (error) {
//     console.error(error);
//   }
// }

// getUsers();


const axios = require("axios");

async function getUserWithAxios() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/invalid-url");
    console.log("Data:", response.data);
  } catch (error) {
    // ✅ Axios automatically rejects for HTTP errors too
    console.log("Axios error message:", error.message);
    console.log("Status:", error.response?.status);   // 404
    console.log("Data:", error.response?.data);       // Error body from server
  }
}

getUserWithAxios();

