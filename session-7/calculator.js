const PI = 3.14159;

function add(...nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}

function divide(num1, num2) {
  if (num2 === 0) {
    throw new Error("You cannot divide by zero!");
  }
  return num1 / num2;
}

function mathTester() {
  const sum = add(1, 2);
}

module.exports = {
  add,
  divide,
  PI,
};
