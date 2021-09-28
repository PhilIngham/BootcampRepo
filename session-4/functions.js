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
console.log(addFiveArrow(15));
