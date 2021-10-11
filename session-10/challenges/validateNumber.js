/*
07856766543
0785 676 6543
+447856766543
+44 7856766543
(44) 7856766543
*/

const numberChecker = (numbers) => {
  const numberRE = /(0|\+44|\(44\))\s?(\d{3})\s?(\d{3})\s?(\d{4})/;
  for (let number of numbers) {
    if (numberRE.test(number)) {
      console.log(number, "is valid");
    }
  }
};

// let number = "(44) 7856766543";
let numbers = [
  "07856766543",
  "0785 676 6543",
  "+447856766543",
  "+44 7856766543",
  "(44) 7856766543",
];
numberChecker(numbers);
