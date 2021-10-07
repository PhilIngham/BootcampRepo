export const fizzbuzz = () => {
  let output = "";
  for (let i = 1; i < 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output += `fizzbuzz, `;
    } else if (i % 3 === 0) {
      output += "fizz, ";
    } else if (i % 5 === 0) {
      output += "buzz, ";
    } else {
      output += `${i}, `;
    }
  }
  return output.slice(0, -2);
};
