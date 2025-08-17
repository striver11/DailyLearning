async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
}

fetchData()
  .then((data) => {
    console.log("Post Data:", data);
  })
  .catch((error) => {
    console.error(error);
  });
