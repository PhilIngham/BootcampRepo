// Fetch API:
const url = `https://jsonplaceholder.typicode.com/posts`;

const displayPosts = (posts) => {
  const postsList = document.getElementById("posts");

  posts.forEach((post) => {
    const { id, body } = post;

    const listItem = document.createElement("li");

    listItem.innerHTML = `ID: ${id}, Body: ${body}`;

    postsList.appendChild(listItem);
  });
};

fetch(url)
  .then((response) => response.json())
  .then((json) => displayPosts(json));

// const fetchData = async () => {
//   const response = await fetch(url);
//   const json = await response.json();

//   return json;
// // };

// console.log(fetchData());
