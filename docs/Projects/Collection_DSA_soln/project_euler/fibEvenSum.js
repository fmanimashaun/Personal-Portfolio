/* 
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

*/

// Create a function the sum all the even number in an array
function sumOfEven (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i]
    }
  }
  return sum
}

// Create a function that sum all the even number in a fib series
function sumOfEvenFib (n) {
  const fibArr = [1, 2];
  let lastIndex = fibArr.length - 1;
  while (fibArr[lastIndex] < n) {
    let nextFib = fibArr[lastIndex - 1] + fibArr[lastIndex]
    if (nextFib < n) {
      fibArr.push(nextFib);
      lastIndex = fibArr.length - 1;
    } else {
      break;
    }
  }
  return sumOfEven(fibArr);
}

// Checking function
console.log(sumOfEvenFib(4000000));
