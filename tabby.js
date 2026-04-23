//generate random numbers from 0-100
let numbers = [];
for(let i = 2; i<= 13; i++){
    numbers.push (Math.floor(Math.random()*100))
}
//let even = []
//let odd = []

//for (let num of numbers) {
  //  if (num % 2 === 0){ 
    //    even.push(num);
    //} else{
      //  odd.push(num);
    //}
//}
//console.log("ALL:", numbers);
//console.log("even:", even);
//console.log("odd:", odd);


//Get even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);

//Get odd numbers
let oddNumbers = numbers.filter(num => num % 2 !== 0);

//Display results

console.log("Even numbers:", evenNumbers);
console.log("Odd numbers:", oddNumbers);