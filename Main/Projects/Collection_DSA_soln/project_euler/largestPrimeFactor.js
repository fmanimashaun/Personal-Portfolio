/* The prime factors of 13195 are 5, 7, 13 and 29. 
* What is the largest prime factor of the number 600851475143 ?
*/

const largestPrimeFactor = (n) => {
  let lastFactor = 0;
  let x = 2;

  while (n > Math.sqrt(n)) {
    if (n % x === 0) {
      lastFactor = x;
      n = n / x;
    } else {
      x++;
    }
  }
  return lastFactor;
}

let startTime = performance.now();
console.log(largestPrimeFactor(600851475143));
let endTime = performance.now();
console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)