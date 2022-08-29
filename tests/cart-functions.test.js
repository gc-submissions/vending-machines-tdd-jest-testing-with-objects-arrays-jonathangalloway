const { calculateChange, isSufficientPayment, calculateTotal, addItem, removeItem } = require("../src/js/cart-functions")



describe("calculateChange", () => {
  test("Given total 5 and payment 6, it returns 1", ()=>{
    let result = calculateChange(5, 6)
    expect(result).toBe(1)
  }) ;
  test("Given total 12.30 and payment 13.03, it returns 0.73.", ()=>{
    let result = calculateChange(12.30, 13.03)
    expect(result).toBeCloseTo(.73)
  }) ;
  test("Given total 15 and payment 17, it returns 2.", ()=>{
    let result = calculateChange(15, 17)
    expect(result).toBe(2)
});
});

describe("isSufficientPayment", () => {
  test("Given total 5 and payment 6, it returns true", ()=>{
    let result = isSufficientPayment(5,6)
    expect(result).toBeTruthy()
  });
  test("Given total 10 and payment 7, it returns false", ()=>{
    let result = isSufficientPayment(10,7)
    expect(result).toBeFalsy()
});
  test("Given total 3 and payment 3, it returns true", ()=>{
  let result = isSufficientPayment(3,3)
  expect(result).toBeTruthy()
});
  test("Given total 15 and payment 6, it returns false", ()=>{
  let result = isSufficientPayment(15,6)
  expect(result).toBeFalsy()
});
});

describe("calculateTotal", () => {
  let singleItemsArray = [{ name: "Jelly", price: 4.99 }]
  let itemsArray = [{ name: "Jelly", price: 3.50 }, { name: "advil", price: 12.99 }, { name: "pedialyte", price: 0.03 }]
  test("Given an itemsArray of one item with price 4.99, it returns 4.99", ()=>{
    let result = calculateTotal(singleItemsArray)
    expect(result).toBe(4.99)
  });
  test("Given an itemsArray of three items with prices 3.50, 12.99, and 0.03, it returns 16.52", ()=>{
    let result = calculateTotal(itemsArray)
    expect(result).toBeCloseTo(16.52)
  });
});

describe("addItem", () => {
  let itemsArray = []
  test("Call addItem with an empty itemsArray, name Beans and price 3. Then check that itemsArray has one item in it",() => {
  addItem(itemsArray, "Beans", 3)
    expect(itemsArray).toEqual([{"name": "Beans", "price": 3}])
  });
});

describe("removeItem", () => {
  let itemsArray = [{ name: "Jelly", price: 3.50 }, { name: "advil", price: 12.99 }, { name: "pedialyte", price: 0.03 }]
  test("Remove the first element from an array of three items", ()=>{
    removeItem(itemsArray, 0)
    expect(itemsArray).toEqual([{ name: "advil", price: 12.99 }, { name: "pedialyte", price: 0.03 }])
  });
});