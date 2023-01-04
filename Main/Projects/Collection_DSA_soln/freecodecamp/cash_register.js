/*
Design a cash register drawer function checkCashRegister() 
that accepts purchase price as the first argument (price), payment 
as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, 
or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change 
if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, 
sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)

See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]

*/

const checkCashRegister = (price, cash, cid) => {
  // caculate change  
  const changeDue = cash - price;

  // reverse cid array
  let availableChange = cid.reverse();

  // initialize currencyCount object that stores count of each currency in cid
  const currencyCount = {};

  // initialize totalCid variable to store total amount of cid
  let totalCid = 0;

  // loop through cid array and add each currency to currencyCount object and add each amount to totalCid
  cid.forEach((unit) => {
    const currency = unit[0];
    const amt = unit[1];
    totalCid += amt;

    // add currency and count to currencyCount object
    switch (currency) {
      case "ONE HUNDRED":
        currencyCount[currency] = Math.round(amt / 100);
        break;
      case "TWENTY":
        currencyCount[currency] = Math.round(amt / 20);
        break;
      case "TEN":
        currencyCount[currency] = Math.round(amt / 10);
        break;
      case "FIVE":
        currencyCount[currency] = Math.round(amt / 5);
        break;
      case "ONE":
        currencyCount[currency] = Math.round(amt / 1);
        break;
      case "QUARTER":
        currencyCount[currency] = Math.round(amt / 0.25);
        break;
      case "DIME":
        currencyCount[currency] = Math.round(amt / 0.1);
        break;
      case "NICKEL":
        currencyCount[currency] = Math.round(amt / 0.05);
        break;
      default:
        currencyCount[currency] = Math.round(amt / 0.01);
        break;
    }
  });

    
  if (totalCid < changeDue) { // check if totalCid is less than changeDue
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (totalCid === changeDue) { // check if totalCid is equal to changeDue
    return { status: "CLOSED", change: [...cid.reverse()] };
  } else { // if totalCid is greater than changeDue
    // create a balance variable to store changeDue
    let balance = changeDue;

    // create a change array to store change
    const changeCurrency = [];

    // loop through availableChange array
    availableChange.forEach((unit) => {
      const currency = unit[0];

      // get available count of each currency from currencyCount object
      const availableCount = currencyCount[currency];

      // create a count variable to store count of each currency in change
      let neededCount;

      // initiaite an empty array to store change array per currency
      const newUnit = [];
      newUnit.push(currency);

      // using switch statement, change per currecy is calculated and added to change array
      switch (currency) {
        case "ONE HUNDRED":
          if ((balance > 100 || balance === 100) && availableCount !== 0) {
            neededCount = Math.floor(balance / 100);
            if (
              neededCount > availableCount ||
              neededCount === availableCount
            ) {
              balance = (balance - availableCount * 100).toFixed(2);
              newUnit.push(availableCount * 100);
              changeCurrency.push(newUnit);
            } else {
              balance = (balance - neededCount * 100).toFixed(2);
              newUnit.push(neededCount * 100);
              changeCurrency.push(newUnit);
            }
          }
          break;
        case "TWENTY":
          if ((balance > 20 || balance === 20) && availableCount !== 0) {
            neededCount = Math.floor(balance / 20);
            if (
              neededCount > availableCount ||
              neededCount === availableCount
            ) {
              balance = (balance - availableCount * 20).toFixed(2);
              newUnit.push(availableCount * 20);
              changeCurrency.push(newUnit);
            } else {
              balance = (balance - neededCount * 20).toFixed(2);
              newUnit.push(neededCount * 20);
              changeCurrency.push(newUnit);
            }
          }
          break;
        case "TEN":
          if ((balance > 10 || balance === 10) && availableCount !== 0) {
            neededCount = Math.floor(balance / 10);
            if (
              neededCount > availableCount ||
              neededCount === availableCount
            ) {
              balance = (balance - availableCount * 10).toFixed(2);
              newUnit.push(availableCount * 10);
              changeCurrency.push(newUnit);
            } else {
              balance = (balance - neededCount * 10).toFixed(2);
              newUnit.push(neededCount * 10);
              changeCurrency.push(newUnit);
            }
          }
          break;
        case "FIVE":
          if ((balance > 5 || balance === 5) && availableCount !== 0) {
            neededCount = Math.floor(balance / 5);
            if (
              neededCount > availableCount ||
              neededCount === availableCount
            ) {
              balance = (balance - availableCount * 5).toFixed(2);
              newUnit.push(availableCount * 5);
              changeCurrency.push(newUnit);
            } else {
              balance = (balance - neededCount * 5).toFixed(2);
              newUnit.push(neededCount * 5);
              changeCurrency.push(newUnit);
            }
          }
          break;
        case "ONE":
          if ((balance > 1 || balance === 1) && availableCount !== 0) {
            neededCount = Math.floor(balance / 1);
            if (
              neededCount > availableCount ||
              neededCount === availableCount
            ) {
              balance = (balance - availableCount * 1).toFixed(2);
              newUnit.push(availableCount * 1);
              changeCurrency.push(newUnit);
            } else {
              balance = (balance - neededCount * 1).toFixed(2);
              newUnit.push(neededCount * 1);
              changeCurrency.push(newUnit);
            }
          }
          break;
        case "QUARTER":
          if ((balance > 0.25 || balance === 0.25) && availableCount !== 0) {
            neededCount = Math.floor(balance / 0.25);
            if (
              neededCount > availableCount ||
              neededCount === availableCount
            ) {
              balance = (balance - availableCount * 0.25).toFixed(2);
              newUnit.push(availableCount * 0.25);
              changeCurrency.push(newUnit);
            } else {
              balance = (balance - neededCount * 0.25).toFixed(2);
              newUnit.push(neededCount * 0.25);
              changeCurrency.push(newUnit);
            }
          }
          break;
        case "DIME":
          if ((balance > 0.1 || balance === 0.1) && availableCount !== 0) {
            neededCount = Math.floor(balance / 0.1);
            if (
              neededCount > availableCount ||
              neededCount === availableCount
            ) {
              balance = (balance - availableCount * 0.1).toFixed(2);
              newUnit.push(availableCount * 0.1);
              changeCurrency.push(newUnit);
            } else {
              balance = (balance - neededCount * 0.1).toFixed(2);
              newUnit.push(neededCount * 0.1);
              changeCurrency.push(newUnit);
            }
          }
          break;
        case "NICKEL":
          if ((balance > 0.05 || balance === 0.05) && availableCount !== 0) {
            neededCount = Math.floor(balance / 0.05);
            if (
              neededCount > availableCount ||
              neededCount === availableCount
            ) {
              balance = (balance - availableCount * 0.05).toFixed(2);
              newUnit.push(availableCount * 0.05);
              changeCurrency.push(newUnit);
            } else {
              balance = (balance - neededCount * 0.05).toFixed(2);
              newUnit.push(neededCount * 0.05);
              changeCurrency.push(newUnit);
            }
          }
          break;
        default:
          if ((balance > 0.01 || balance === 0.01) && availableCount !== 0) {
            neededCount = Math.floor(balance / 0.01);
            if (
              neededCount > availableCount ||
              neededCount === availableCount
            ) {
              balance = (balance - availableCount * 0.01).toFixed(2);
              newUnit.push(availableCount * 0.01);
              changeCurrency.push(newUnit);
            } else {
              balance = (balance - neededCount * 0.01).toFixed(2);
              newUnit.push(neededCount * 0.01);
              changeCurrency.push(newUnit);
            }
          }
          break;
      }
    });

    // converting balance to number
    balance = Number(balance);

    // if balance is greater than 0, return insufficient funds
    return balance === 0
      ? { status: "OPEN", change: [...changeCurrency] }
      : { status: "INSUFFICIENT_FUNDS", change: [] };
  }
};

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
