import ShoppingBasket from "./ShoppingBasket";

describe("ShoppingBasket", () => {
  let shoppingBasket;

  beforeEach(() => {
    shoppingBasket = new ShoppingBasket();
  });

  test("should initialise with zero items", () => {
    expect(shoppingBasket.items.length).toBe(0);
  });

  test("should add apples to shopping basket", () => {
    const item = "Apples";
    shoppingBasket.addItems(item);

    expect(shoppingBasket.items.length).toBe(1);
    expect(shoppingBasket.items).toContain(item);
  });
});
