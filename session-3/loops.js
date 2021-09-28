// For loop

for (let i = 0; i < 10; i++) {
  console.log("i => ", i);
}

numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2);
}
// While Loop

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// For Of

let films = ["Horror", "Comedy", "Action"];

for (let film of films) {
  console.log(film);
}

// For Each

films.forEach((film, index) => {
  console.log(index, film);
});

// Conditionals

//if (* expression *) {
//   logic
//}

let personsAge = 18;
if (personsAge > 16) {
  console.log("Can vote");
} else {
  console.log("Can't vote");
}

// Ternary

const amount = 100;
const shouldChargeTax = amount > 50 ? true : false;
