/*
* A palindromic number reads the same both ways. 
* The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
* Find the largest palindrome made from the product of two 3-digit numbers.
*/

const reverseStr = str => [...str].reverse().join('');

const isPallindrome = (n) => {
  return n.toString() === reverseStr(n.toString());
}


const largestPalindromeProduct = (x, y) => {
  let largestPalindrome = 0;
  let product = 0;

  for (let i = x; i < y; i++) {
    for (let j = x; j < y; j++) {
      product = i * j;
      if (isPallindrome(product) && product > largestPalindrome) {
        largestPalindrome = product;
      }
    }
  }

  return largestPalindrome;
}

let startTime = performance.now();
console.log(largestPalindromeProduct(100, 1000));
let endTime = performance.now();
console.log(`Function ran for ${endTime - startTime} milliseconds`)