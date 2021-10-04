// Callback functions

const people = ["John", "Chris", "Ben", "Lauren", "Phil"];

const looper = (argument) => {
  console.log("Argument: ", argument);
};

people.forEach(looper);

// Fast food example

const makeDrink = (callback) => {
  setTimeout(() => {
    console.log("Making drinks");
    callback();
  }, 3000);
};

const makeFries = () => {
  console.log("Making fries");
};

const makeBurger = () => {
  console.log("Making burger");
};

const orderMeal = () => {
  makeBurger();
  makeDrink(makeFries);
};

orderMeal();
