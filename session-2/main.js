// single line (use ctrl + /)

/*
multi
line
comment
*/

var name = "Phil"; // initialised
var money; // declared
// var has global scope

let firstName = "Phil";
console.log(firstName);

firstName = "MaybePhil";
console.log(firstName);
// let has block scope

const pi = 3.14159;
// const values are not changable

// camelCase

// DONT
let a;
let b;
let c;

// ~~~~~ DATA TYPES ~~~~~ //

// Numbers (whole numbers - positive and negative)

let numberOfSubscribers = 100;
let price = 99.99;
let temperature = -100;

// String

let reviewComments = "This is a string!";
let numberOfVisitors = 12;

let zooComments = `The number of animals in a zoo are 
around
about
${numberOfVisitors}.`;
console.log(zooComments);

// Arrays - order is guaranteed for insertion - 0 index based

let names = ["Phil", "John", "Leon"];
let mixedArray = ["Twenty four", 24, 24.0];

const countries = ["England", "France", "Spain"];
countries.push("India");
console.log(countries);

// Objects

const productInfo = {
  product: "Heater",
  manufacturer: "Sony",
  price: 99.99,
  reviews: [],
};

// console.log(productInfo);

const review = {
  date: new Date(),
  comment: "Great heater",
  stars: 3,
};
productInfo.reviews.push(review);

productInfo["reviews"].push({
  date: new Date(),
  comment: "Awful heater",
  stars: 0,
});

console.log(productInfo);

// Boolean - true or false

let isItRaining = false;

// NULL

let response = null;

// undefined

let undefinedVariable;

let footballTeam = "Manchester United";
console.log(typeof footballTeam);

// Multi Dimensional Array
let shoppingBasket = [
  ["Apples", 2, 0.34],
  ["Pears", 3, 0.65],
];

console.log(`This should be apples: ${shoppingBasket[0][0]}`);

// JSON

const person = {
  // this is not JSON
  name: "Matt Sam",
  age: 23,
  address: {
    street: "Downing Street",
  },
};

console.log("Person object", person);

console.log("JSONified person", JSON.stringify(person));

const car = {
  manufacturer: "Ford",
  model: "Fiesta",
  describe() {
    return `${this.manufacturer} made the ${this.model}`;
  },
};

console.log(car.describe());

const personAsString = JSON.stringify(person);
const personAsObj = JSON.parse(personAsString);
console.log(personAsObj);

name = "Raleigh";
let bike = {
  name,
};

console.log(bike);

// Date

const dateNow = new Date();
console.log(dateNow);
