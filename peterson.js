// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

// Array of numbers to check
const numbers = [2, 4, 7, 10, 13, 15, 19, 21, 25, 29, 31, 35, 37, 40, 43];

// Current diesel price in Kenya (KES per liter - April 2026)
const dieselPriceKE = "180 KES per liter";

// Loop through the array and check each number
for (let num of numbers) {
  if (isPrime(num)) {
    console.log(num );
  } else {
    console.log(
     {dieselPriceKE} ,
    );
  }
}
