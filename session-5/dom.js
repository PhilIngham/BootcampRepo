console.log("Dom is connected");

// Selectors
const headingElement = document.getElementById("heading");
console.log(headingElement.innerHTML);

headingElement.innerHTML = "I just changed you";

// Select single element using a class
const paragraph = document.querySelector(".paragraph");
console.log(paragraph.innerText);

paragraph.innerText = "Hello World!";

// Selecting all matching class of 'item'
const allListItems = document.querySelectorAll(".item");
allListItems.forEach((item) => console.log(item.innerText));

// Select using a data attribute
const img = document.querySelector("[data-custom-image-name]");
// console.log(img);

// Select by class name
const paragraphByClassName = document.getElementsByClassName("paragraph");
// console.log(paragraphByClassName);

//Event Handling
function headingListener() {
  console.log("You clicked the heading");
}

const headingListenerES6 = () => {
  console.log("You clicked the heading");
};

function paraHover() {
  console.log("You hovered over the paragraph");
}

// Fetch the list
const numberList = document.querySelector(".number-list");

const listAdderBtn = document.getElementById("listAdderBtn");
listAdderBtn.addEventListener("click", function () {
  for (let i = 0; i < 100; i++) {
    const listItem = document.createElement("li");
    listItem.classList.add("item");
    numberList.appendChild(listItem);
    listItem.innerHTML = Math.floor(
      Math.random() * 5234423892342824824382348329472349827349823
    );
    console.log(listItem.innerHTML);
  }
});

const commentsBox = document.getElementById("comments");

function validateComments(event) {
  const currentInput = event.target.value;
  const numbersRE = /\d/;

  console.log(currentInput);

  if (numbersRE.test(currentInput)) {
    // bad input - recieved numbers
    commentsBox.classList.toggle("error");
  } else {
    commentsBox.classList.toggle("error");
  }
}

commentsBox.addEventListener("keyup", validateComments);
