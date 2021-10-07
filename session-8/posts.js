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

// Create a new post

const formElement = document.getElementById("new-post-form");

const addNewPost = async (event) => {
  // Prevent the form from refreshing
  event.preventDefault();
  const userField = document.getElementById("user");
  const titleField = document.getElementById("title");
  const bodyField = document.getElementById("body");

  const requestBody = {
    userId: userField.value,
    title: titleField.value,
    body: bodyField.value,
  };

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(requestBody),
  });

  const data = await response.json();

  document.getElementById("status").innerHTML = "Successful post";
};

formElement.addEventListener("submit", addNewPost);

// Reset fields

userField.value = "";
titleField.value = "";
bodyField.value = "";
