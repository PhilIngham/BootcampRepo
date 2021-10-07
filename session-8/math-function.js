export const sumAllNumbers = (arr) => {
  let total = 0;
  arr.forEach((element) => {
    if (typeof element === "number") {
      total += element;
    }
  });

  return total;
};

export const existsInArr = (arr, val) => {
  return arr.filter((element) => element === val).length > 0;
};

export default function reverseArray(arr) {
  return arr.reverse();
}
