// Functions and Methods - Methods preinstalled - .toUpperCase()

// Function declaration
function sayMessage() {
  console.log("Hello");
}

// Invoke the function
sayMessage();

// Function expression
const sayAnotherMessage = function () {
  console.log("Another message");
};

// Invoke right away

(function () {
  console.log("This will run right away");
})();

// Functions with parameters

function addFive(num) {
  return num + 5;
}

// Fat arrow expressions

const addFiveArrow = (num) => num + 5;
console.log(addFiveArrow(762));

// Function to check all characters are unique in a string

let str = "aba";
function isIsogram(str) {
  let letterArray = str.split("");
  str.toLowerCase();
  for (let i = 0; i < letterArray.length; i++) {
    for (let j = 0; j < letterArray.length; j++) {
      if (letterArray[i] === letterArray[j]) {
        return false;
      }
    }
  }
  return true;
}

isIsogram(str);
