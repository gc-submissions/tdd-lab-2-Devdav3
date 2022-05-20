// formatCurrency and getCoins.
let formatCurrency = (amount) => {
  amount = amount.toFixed(2)

   if (amount < 0) {
     //substring** Google how to remove 1st ch of a string take away the - sign 
      amount = amount.substring(1)
    return "-$" + amount

  } else {
    return "$" + amount
  }
}

//The function determines how many quarters, dimes, nickels, and pennies are required to make up the given number of cents. It must find the combination of these coins with the minimum number of coins.


let getCoins = (cents) => {
let quarters = 0
let dimes = 0
let nickels = 0
let pennies = 0

// loops back whats avaliable 
while (cents > 0) {

  if (cents >= 25) {
    quarters++ 
    cents = cents -25 
  } else if (cents >= 10) {
    dimes++
    cents = cents - 10
  }else if (cents >= 5) {
    nickels++
    cents = cents - 5
  }else {
    pennies++
    cents = cents -1
  }
  
}
  
// It returns the result as an object with the names of the coins as keys. The following example would represent 1 quarter, 0 dimes, 1 nickel, and 2 pennies (32 cents).

// {
//   quarters: 1,
//   dimes: 0,
//   nickels: 1,
//   pennies: 2
// }

return {
  quarters: quarters,
  dimes: dimes,
  nickels: nickels,
  pennies: pennies,
}

}


// short version** 
let getCoins2 = (cents2) =>{
  let numberOfQuarters = Math.floor(cents2/25);
  let remainingChange = (cents2 - 25 * numberOfQuarters).toFixed(2)
  let numberOfDimes = Math.floor(remainingChange/ 10);
  remainingChange = (remainingChange - 10 * numberOfDimes).toFixed(2)
  let numberOfNickles = Math.floor(remainingChange / 5);
  remainingChange = (remainingChange - 5 * numberOfNickles).toFixed(2)
  let numberOfPennies = Math.floor(remainingChange/1);

  let coins2 = {
    quarters : numberOfQuarters,
    dimes: numberOfDimes,
    nickels: numberOfNickles,
    pennies: numberOfPennies,
  }
  return coins2;
}


module.exports = {formatCurrency, getCoins, getCoins2}