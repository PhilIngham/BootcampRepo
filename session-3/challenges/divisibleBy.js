console.log("Running divisible by challenge...");
let sum = 0;
for (let i = 1; i <= 500; i++) {
  if (i % 3 === 0) {
    // check divisible by 3
    sum += i;
    console.log(i, "is divisible by 3");
  } else if (i % 5 === 0) {
    // check divisible by 5 (else if stops it adding same num twice)
    sum += i;
    console.log(i, "is divisible by 5");
  }
}
console.log("The end sum of all the numbers divisible by 3 and 5 is: ", sum);
