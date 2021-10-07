export default class ShoppingBasket {
  constructor() {
    this.items = [];
  }

  addItems(items) {
    this.items.push(items);
  }

  removeItems(item) {
    const itemsToRemove = [...this.items];

    this.items = itemsToRemove.filter((currentItem) => currentItem !== item);
  }
}
