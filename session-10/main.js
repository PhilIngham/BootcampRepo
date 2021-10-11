// ! Regular expressions

const messageRE = /hello/;
const actualMessage = "hello";

// Verifies if there is a match and returns true or false
if (messageRE.test(actualMessage)) {
  console.log("This matched", actualMessage);
}
const phrase = `
The fat cat ran down the street. 
It was searching for a mouse to eat.
`;

const atRE = /at/g;

console.log(atRE.exec(phrase));
