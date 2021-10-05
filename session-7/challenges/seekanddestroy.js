const seekAndDestroy = (array, ...destroy) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < destroy.length; j++) {
      if (array[i] === destroy[j]) {
        array[i] = "Destroyed value"; // Placeholder for matching elements
      }
    }
  }
  let newArray = [];
  array.forEach((element) => {
    if (element !== "Destroyed value") {
      newArray.push(element); // Add non-destroyed elements to new array
    }
  });
  return newArray;
};

console.log(
  seekAndDestroy(
    [1, 2, 3, 4, 1231897, "Greetings", "MoreGreets"],
    2,
    4,
    1231897,
    "MoreGreets",
    10,
    24
  )
);
