const {formatCurrency, getCoins,getCoins2} = require ("../src/js/money-functions")

describe("formatCurrency", () => {
  test("Given the amount 0, it returns $0.00", () => {  
    // Assert
    expect(formatCurrency(0)).toEqual('$0.00')
    
  });
  test("Given the amount -1, it returns -$1.00", () => {  
    // Assert
    expect(formatCurrency(-1)).toEqual('-$1.00')
    
  });
  test("Given the amount 0.01, it returns $0.01", () => {  
    // Assert
    expect(formatCurrency(0.01)).toEqual('$0.01')
    
  });

  test("Given the amount 527.6789, it returns $527.68.", () => {  
    // Assert
    expect(formatCurrency(527.6789)).toEqual('$527.68')
    
  });


});

describe("getCoins", () => {
  test("32 cents produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2.", ()=> {

    //32 cents produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2.
    expect(getCoins(32)).toEqual({quarters: 1, dimes: 0, nickels: 1, pennies: 2})
  });

});
describe("getCoins2", () => {
  test("32 cents produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2.", ()=> {

    //32 cents produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2.
    expect(getCoins2(32)).toEqual({quarters: 1, dimes: 0, nickels: 1, pennies: 2})
  });

});