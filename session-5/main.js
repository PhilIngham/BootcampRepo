// Functions:

// Declaration (global)
function debitAccount(account, amount) {
  account.total = +amount;
  return account;
}

//Invoke/ Calling
const account = {
  total: 0,
};

const amount = 100;
const updatedAccount = debitAccount(account, amount);
console.log(updatedAccount);

// Functions expression

const greet = function (message) {
  return `Hello ${message}`;
};

const greetES6 = (message) => `Hello ${message}`;
console.log(greetES6("Winning"));

// Functions with default values

const makeCoffee = (
  coffeeType = "Americano",
  coffeeOptions = {
    hasMilk: true,
    hasSugar: false,
    toppings: [],
  }
) => {
  console.log(
    `Coffee ${coffeeType}, Coffee Options ${JSON.stringify(coffeeOptions)}`
  );

  let coffeeMessage = "";
  if (coffeeType === "Cappuccino") {
    coffeeOptions?.toppings?.forEach(function (topping) {
      coffeeMessage += `Added ${topping}, `;
    });
    coffeeMessage += "Enjoy your " + coffeeType;
  } else {
    coffeeMessage = "Sorry we do not sell " + coffeeType;
  }
  return coffeeMessage;
};

const coffeeType = "Cappuccino";
const coffeeOptions = {
  toppings: ["vanilla"],
  hasSugar: true,
  hasMilk: false,
};
console.log(makeCoffee(coffeeType));

// Error Handling:

// let value = "";
// const calculateDiscount = () => {
//   try {
//     const dividedValue = divideNumbers(10, 0);
//     value = `${dividedValue}`;

//     console.log(value);
//   } catch (err) {
//     value = -1;
//     console.error(err);
//   }
// };

// const divideNumbers = (first, second) => {
//   if (second === 0) {
//     throw new Error("Not divisible by zero");
//   }

//   return first / second;
// };
// calculateDiscount();
// console.log(value);

// More Operators:

// REST operator:

const createPersonObject = (firstName, lastName) => {
  return {
    fullName: `${firstName}, ${lastName}`,
  };
};

console.log(createPersonObject("John", "Doe"));
const createPersonObjectWithRest = (firstName, lastName, ...details) => {
  console.log(`Firstname: ${firstName}. Details: ${details}.`);
  const [street, city, postCode] = details;
  return {
    firstName,
    lastName,
    street,
    city,
    postCode,
  };
};
console.log(
  createPersonObjectWithRest("John", "Rest", "1st Street", "Manchester", "M2")
);

// Watch out - You cannot use a rest operator unless it is the last param

// Spread operator

// Deep and shallow copy - Deep gets all levels of info
//                       - Shallow takes all the top info, won't take values
//                              of objects and arrays
const numbers = [0, 1, 2, 3];
const copyOfNumbers = numbers;

copyOfNumbers[0] = 99; // changes both array [0]'s to 99

console.log("Numbers", numbers, "Copy of numbers", copyOfNumbers);

// Copy with spread operator
const copyOfNumbersES6 = [...numbers];

copyOfNumbersES6[0] = 20; // Will only change this array
console.log("Numbers", numbers, "Copy of numbers with ES6", copyOfNumbersES6);

// Copying objects

const person = {
  name: "John",
  address: {
    places: ["A", "B"],
    coordinates: {
      long: 99,
      lat: 88,
    },
  },
};

// ES6 Copy (spread operator):

const copiedPerson = { ...person };
copiedPerson.name = "Foo";
console.log(person, copiedPerson);

// Shallow copy, so be careful
copiedPerson.address.places.push("C");
console.log(person, copiedPerson);

// JSON Parse/JSON Stringify - Deep copy

const personSTR = JSON.stringify(person);
const copiedPersonFromSTR = JSON.parse(personSTR);

console.log("Copied string from JSON string", copiedPersonFromSTR);
