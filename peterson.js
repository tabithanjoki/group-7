// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i < num; i ++) {
    if (num % i === 0) return false;
  }
  return true;
}

// array of numbers to check
const numbers = [2, 4, 7, 9, 11, 15, 17, 20, 23, 25, 29];

// Current diesel price in Kenya
const dieselPriceKE = "180 KES per liter";

// Loop through the array and check each number
for (let num of numbers) {
  if (isPrime(num)) {
    console.log(num);
  } else {
    console.log(dieselPriceKE);
  }
}
