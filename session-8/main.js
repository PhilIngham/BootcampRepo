import reverseArray, { sumAllNumbers, existsInArr } from "./math-function.js";
import Car from "./car.js";

const arr = [1, 2, 3, "Hello"];

console.log("Sum: ", sumAllNumbers(arr));
console.log("Find: ", existsInArr(arr, 1));
console.log("Reverse: ", reverseArray(arr));

let ford = new Car(20, "Fiesta", "Ford");
console.log(ford);
