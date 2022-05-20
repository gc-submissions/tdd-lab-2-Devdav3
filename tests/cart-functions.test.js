const {calculateChange, isSufficientPayment, calculateTotal, addItem, removeItem} = require("../src/js/cart-functions");

describe("calculateChange", () => {
  test("Given total 5 and payment 6, it returns 1.", () => {  
    // Assert
    expect(calculateChange(6, 5)).toEqual(1)
  });
  
  test("Given total 12.30 and payment 13.03, it returns 0.73.", ()=>{
    // Assert
    expect(calculateChange(13.03,12.30 )).toBeCloseTo(0.73);  
  });

  test("Given a total 15 and payment 18, it returns 3.", () =>{
    //Assert
    expect(calculateChange(18,15)).toEqual(3)

  });
});

describe("isSufficientPayment", () => {
  test("Given total 5 and payment 6, it returns true.", ()=>{
    //Assert
    expect(isSufficientPayment(5,6)).toEqual(true);
  });
  test("Given total 10 and payment 7, it returns false.", ()=>{
    //Assert
    expect(isSufficientPayment(10,7)).toEqual(false);
  });
  test("Given total 3 and payment 3, it returns true.", ()=>{
    //Assert
    expect(isSufficientPayment(3,3)).toEqual(true);
  });
  test("Given total 4 and payment 5, it returns true.", ()=>{
    //Assert
    expect(isSufficientPayment(4,5)).toEqual(true);
  });
  test("Given total 11 and payment 5, it returns true.", ()=>{
    //Assert
    expect(isSufficientPayment(11,5)).toEqual(false);
  });
});

describe("calculateTotal", () => {
  // Arrange create something hypotheticaly 
  let myArray = [
    { name: "Jelly", price: 3.50 }, // comma between the objects
    { name: "Peanutbutter", price: 4.99}, 
    { name: "Gramcrackers", price: 5.00},  
  ]
  // does not need above just structure to go with ** ^

  test("Given an itemsArray of one item with price 4.99, it returns 4.99" ,() => {
    //Arrange
    let myArray = [ { name: "Peanutbutter", price: 4.99}, ]
    //Assert
    expect(calculateTotal(myArray)).toEqual(4.99)
  });

  test("Given an itemsArray of three items with prices 3.50, 12.99, and 0.03, it returns 16.52" ,() => {
    //Arrange
    let myArray = [ { name: "Jelly", price: 3.50 }, 
    { name: "Gummies", price: 12.99}, 
    { name: "Koolaid", price: 0.03},  
   ]
   //Assert
    expect(calculateTotal(myArray)).toBeCloseTo(16.52)
  });

  test("Given an empty itemsArray, it returns 0" ,() => {
    //Arrange
    let myArray = []
    // Asserts
    expect(calculateTotal(myArray)).toEqual(0)
  });

  test("Given an itemsArray of one item with price 25.00, 12.99 and returns 37.99 " ,() => {
    //Arrange
    let myArray = [ { name: "Steak", price: 25.00}, 
                    { name: "Gummies", price: 12.99},]
    //Assert
    expect(calculateTotal(myArray)).toEqual(37.99)
  });


});

describe("addItem", () => {
  test("Call addItem with an empty itemsArray, name Beans and price 3.", () =>{
    //Arrage 
    let emptyArray = [];
    //act 
    addItem(emptyArray,"Beans", 3);
    //assert
    expect(emptyArray).toEqual([{name: "Beans", price: 3}])
  });

  test("Create an itemsArray with one item in it: { name: Beans, price: 3 }.", () =>{
    //Arrage 
    let emptyArray = [];
    //act 
    addItem(emptyArray,"Beans", 3);
    //assert
    expect(emptyArray).toEqual([{name: "Beans", price: 3}])
  });

  test("Call addItem with itemsArray, name sugar and price 2..", () =>{
    //Arrage 
    let itemArray = [{name: "Beans", price: 3}];
    //act 
    addItem(itemArray,"sugar", 2);
    //assert
    expect(itemArray).toEqual([{name: "Beans", price: 3}, {name: "sugar", price: 2}])
  });





});

describe("removeItem", () => {
  test("Remove the first element from an array of three items.", () => {
    //arrange
    let myArray = [
      {name: "Getorade", price: 2.00},
      {name: "Hard drive", price: 200},
      {name: "Microphone", price: 300}
    ]

    // act
    removeItem(myArray, 0);

    // assert
    expect(myArray).toEqual([{name: "Hard drive", price: 200},
    {name: "Microphone", price: 300}])

  });
  test("Remove the last element from an array of three items.", () => {
    //arrange
    let myArray = [
      {name: "Getorade", price: 2.00},
      {name: "Hard drive", price: 200},
      {name: "Microphone", price: 300}
    ]

    // act
    removeItem(myArray, 2);

    // assert
    expect(myArray).toEqual([{name: "Getorade", price: 2.00},
    {name: "Hard drive", price: 200},])

  });

  
});