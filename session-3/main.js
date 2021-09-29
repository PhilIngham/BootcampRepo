const album = {
  title: "21",
  artist: "Adele",
  year: 2000,
  songs: [
    {
      name: "Hello",
    },
    {
      name: "Roling in the deep",
    },
  ],
  info() {
    return `${this.title} was made by ${this.artist}`;
  },
};

console.log(album);

// accessing properties using dot notation
console.log(`Artist is ${album.artist}`);

// JSON:

const product = {
  name: "Samsung TV",
  saleItem: false,
  dimensions: [
    {
      width: 1220,
      height: 900,
    },
  ],
};

let productAsString = JSON.stringify(product);
console.log(product);

// JSON object back to object
let productAsObject = JSON.parse(productAsString);
console.log(productAsString);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=- //

// Session 3

const firstName = "Bob Smith";
console.log(firstName.length);
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

const bob = firstName.substr(0, 2);
console.log(bob);

const phoneNumber = "093 281 317 329";
const phoneParts = phoneNumber.split(" ");
console.log(phoneNumber + " => " + phoneParts);

const emailAddress = "foo@bar.com";
const indexOfAtSymbol = emailAddress.indexOf("@");
console.log(indexOfAtSymbol);

// Arrays:

// High Order Functions - Is a function that takes another function as an argument
//                           or can return a function as its result

const countries = [
  "England",
  "France",
  "Germany",
  "Spain",
  "Zimbabwe",
  "Italy",
];

const matchedCountries = countries.filter(function (country) {
  console.log(`Current country is ${country}`);
  return country.startsWith("Z");
});

console.log("Matched ", matchedCountries);

// implied return and no need for explicit function definition
const espanol = countries.filter((country) => country.startsWith("S"));
console.log(espanol);

// MAP:

const people = [
  { name: "Boris Johnson", title: "He has no clue" },
  { name: "Wacko Jacko", title: "Slides everywhere" },
];

const upperCasedPeople = people.map(function (person) {
  return {
    name: person.name.toUpperCase(),
    title: person.title,
    created: new Date(),
  };
});

console.log(upperCasedPeople);

// ES6

const es6people = people.map((person) => {
  return {
    name: person.name.toLowerCase(),
    title: person.title,
    created: new Date(),
  };
});

// SOME:

const fruits = ["apple", "pear", "grape"];

const fruitResult = fruits.some(function (fruit) {
  return fruit === "apple";
});
console.log("ES5 result: ", fruitResult);

const es6Result = fruits.some((fruit) => fruit === "apple");
console.log("ES6 result: ", es6Result);

// SORT:

let letters = ["z", "b", "k"];
console.log(letters.sort());

let numbers = [1, 2, 30, 4];
const sortedNumbers = numbers.sort(function (a, b) {
  return a > b;
});

console.log(sortedNumbers);

let animals = ["lion", "Zebra", "turtle"];
console.log(animals.sort());

const sortedCaseInsensitiveAnimals = animals.sort(function (a, b) {
  let firstAsUpper = a.toUpperCase();
  let secondAsUpper = b.toUpperCase();
  if (firstAsUpper === secondAsUpper) {
    return 0;
  } else if (firstAsUpper > secondAsUpper) {
    return 1;
  }
  return -1;
});
console.log(sortedCaseInsensitiveAnimals);

// Length of an array
console.log("Animals length", animals.length);

// Index Of
console.log(animals.indexOf("turtle"));

// Push
const places = [];
places.push({
  name: "Barcelona",
  population: 10_000_000,
});

console.log("Places ", places);

places.push({
  name: "Bristol",
  population: 2_000_000,
});

console.log("Places after Bristol added ", places);

// Pop
const bristol = places.pop();
console.log("Last place in places array: ", bristol);

// Shift
places.push({
  name: "Lisbon",
  population: 23_000_000,
});
console.log(places);
console.log(places.shift());

places.unshift({
  name: "Tokyo",
  population: 999_000_000,
});

console.log(places);

// Object Destructuring

const person = {
  name: "John",
  address: {
    street: "1st Street",
    city: "London",
    postcode: "L1",
  },
  hobbies: ["sports", "film", "music"],
};

// curly braces for objects
const { name, address, hobbies } = person;
console.log("Name: ", name);
console.log("Address: ", address);

const {
  address: { street },
} = person;

console.log("Street is: ", street);

const productDetails = ["samsung tv", "a large tv"];

// square brackets for arrays
const [productName, productDescription] = productDetails;
console.log("Product name: ", productName);
console.log("Product description: ", productDescription);

// Operators

let firstNum = 1;

firstNum = firstNum + 1;
firstNum++; // same

firstNum = firstNum + 5;
firstNum += 5; // same

// Modulus - Remainder

let sum = 10 % 2; // 0
let sum2 = 10 % 3; // 1

// Equality

let classSize = "12";
if (classSize === 12) {
  // == returns true, === returns false - strict equality
  console.log("true");
} else {
  console.log("false");
}
