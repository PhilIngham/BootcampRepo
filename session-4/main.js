// Operators

// || checks the LHS for 0, "", NaN, null or undefined
let count = 0;
let jk = count || 25;
// Coalesce operator ??

let food = null ?? "There is no food"; // if LHS is null, accept RHS
console.log(food);

// Chaining Operator

const zoo = {
  lions: ["Leo"],
  zookeeper: { name: "Brenda" },
};

const leo = zoo.lions[0];
console.log(leo);

const bear = zoo?.bears?.[0];
console.log(bear);
console.log();
