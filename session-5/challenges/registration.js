function customRegistration(reg) {
  let lettersOfReg = reg.toUpperCase().split("");
  if (lettersOfReg.length !== 8) {
    return "Registration must be 8 characters long";
  }
  //   let space = lettersOfReg.indexOf(" ");
  //   if (space === -1) {
  //     lettersOfReg[4] = " ";
  //   }
  if (lettersOfReg.indexOf(" ") === -1) {
    return "Registration must contain a space";
  }
  let newReg = "";
  newReg += lettersOfReg[0];

  for (let i = 1; i < lettersOfReg.length; i++) {
    // A 4, B 8, S 5, E 3
    newReg += letterReplacer(lettersOfReg[i]);
  }
  return "New registration: " + newReg;
}
const letterReplacer = (letter) => {
  if (letter === "A") {
    letter = "4";
  } else if (letter === "B") {
    letter = "8";
  } else if (letter === "S") {
    letter = "5";
  } else if (letter === "E") {
    letter = "3";
  }
  return letter;
};

console.log(customRegistration("essb iua"));
