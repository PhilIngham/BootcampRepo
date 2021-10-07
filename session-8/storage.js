// Storage: cookies, localStorage, sessionStorage

// Local Storage:

//Adding a new item to your local storage
localStorage.setItem("name", "foo");
localStorage.setItem("sport", "rugby");

// Retrieve sport from storage
const sportValue = localStorage.getItem("sport");
console.log(sportValue);

const countries = ["france", "germany", "india"];
localStorage.setItem("countries", JSON.stringify(countries));

const countriesFromStorage = JSON.parse(localStorage.getItem("countries"));
console.log("Countries from storage: ", countriesFromStorage);

// Adding an object:

const product = {
  name: "Can of coke",
  price: 12.0,
};

localStorage.setItem("product", JSON.stringify(product));

// Remove an item:

localStorage.removeItem("product");

const productFromStorage = JSON.parse(localStorage.getItem("product"));
console.log("Product from storage: ", productFromStorage);

// Session storage

sessionStorage.setItem("id", 12345678);

// Same concept for objects in session storage

// Cookies:
document.cookie =
  `name=John Doe; expires=` + new Date(2025, 0, 1).toUTCString();
