class Item {
  constructor(productName, productPrice, productDescription) {
    this.productName = productName;
    this.productPrice = productPrice;
    this.productDescription = productDescription;
  }

  getPrice() {
    return this.productPrice;
  }
}

class Basket {
  constructor() {
    this.noOfItems = 0;
    this.totalPrice = 0;
    this.items = [];
  }

  addToBasket(item) {
    this.items.push(item);
    this.totalPrice += item.getPrice(item);
  }

  displayTotal() {
    console.log(this.totalPrice);
  }

  displayBasket() {
    console.log(this.items);
  }
}

const basket = new Basket();
const shoes = new Item("Shoes", 30.0, "Lovely pair of shoes");
const shirt = new Item("Shirt", 120.0, "Even better shirt");
basket.addToBasket(shoes);
basket.addToBasket(shirt);
basket.addToBasket(shoes);
basket.displayTotal();
basket.displayBasket();
