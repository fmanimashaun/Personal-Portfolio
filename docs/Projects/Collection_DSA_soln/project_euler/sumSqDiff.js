/*
 he sum of the squares of the first ten natural numbers is,
  1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,
  (1 + 2 + ... + 10)^2 = 55^2 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .
  3025 - 385 = 2640
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

const sumOfSquares = (n) => {
  let sumOfSq = 0
  for (let i = 1; i <= n; i++) {
    sumOfSq += Math.pow(i, 2);
  }

  return sumOfSq;
}

const squareOfSum = (n) => {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return Math.pow(sum, 2);
}

const diffSquareSums = (n) => {
  let diff = squareOfSum(n) - sumOfSquares(n);

  return diff;
}

console.log(diffSquareSums(100));