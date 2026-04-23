// Function to get the FizzBuzz output for a number
function getFizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "fizz";
    } else if (num % 5 === 0) {
        return "buzz";
    } else {
        return num;
    }
}

// Loop from 1 to 50 and print the result
for (let i = 1; i <= 50; i++) {
    console.log(getFizzBuzz(i));
}