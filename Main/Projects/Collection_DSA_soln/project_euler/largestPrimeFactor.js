/* The prime factors of 13195 are 5, 7, 13 and 29. 
* What is the largest prime factor of the number 600851475143 ?
*/

const largestPrimeFactor = (n) => {
  let lastFactor = 0;
  let x = 2;
  let quotient = n;

  while (quotient > 1) {
    if (quotient % x === 0) {
      lastFactor = x;
      quotient = quotient / x;
    } else if (x < quotient) {
      x++;
    }
  }
  return lastFactor;
}

console.log(largestPrimeFactor(600851475143));
