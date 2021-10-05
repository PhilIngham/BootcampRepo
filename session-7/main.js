const sumPrimes = (title, ...nums) => {
  console.log(title);
  console.log(nums);
  let sum = 0;
  nums.forEach((num) => {
    sum += num;
  });
  return sum;
};

console.log(
  "Sum of primes numbers:",
  sumPrimes("Prime function", 1, 2, 3, 4, 5)
);

// Pure functions - Only does what the function is expected, and only uses functions elements, giving consistent results

const add = (num1, num2) => num1 + num2;
