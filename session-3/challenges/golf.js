const names = [
  "Hole in one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Quit",
];
const par = 5;
const strokes = 3;
console.log("Par: ", par);
console.log("Strokes: ", strokes);
console.log("You got a...");
switch (strokes) {
  case 1:
    console.log(names[0]);
    break;
  case par - 2:
    console.log(names[1]);
    break;
  case par - 1:
    console.log(names[2]);
    break;
  case par:
    console.log(names[3]);
    break;
  case par + 1:
    console.log(names[4]);
    break;
  case par + 2:
    console.log(names[5]);
    break;
  default:
    console.log(names[6]);
}
