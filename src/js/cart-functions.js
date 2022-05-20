// calculateChange, isSufficientPayment, calculateTotal, addItem, and removeItem.

let calculateChange = (payment, total) => {
  return payment - total;
}

let isSufficientPayment = (total, payment)=>{

  //different options 

  // if (payment >= total) {
  //   return true; 
  // } else {
  //   return false;
  // }
  //*** 
  // return true ? payment >= total : false;

  return payment >= total

}


let calculateTotal = (itemsArray) =>{
  let sum = 0;
  for (let i = 0; i < itemsArray.length; i++) {
    sum += itemsArray[i].price; // getting that things price* 
  }
  return sum;

}

let addItem = (itemsArray, name, price) => {
  itemsArray.push({name: name, price: price});
}

let removeItem = (itemsArray, index) => {
  console.log("before", itemsArray);
  itemsArray.splice(index,1);
  console.log("after", itemsArray);
}



module.exports = {calculateChange , isSufficientPayment, calculateTotal, addItem, removeItem};