let groupAges = [17,18,19,20]
let totalAge = 0;
for (let i = 0; i < groupAges.length; i++){
    totalAge = totalAge + groupAges [i];
}
let avarageAge = totalAge / groupAges.length;
console.log("total age of members:",totalAge);
console.log("avarage age of members:",avarageAge)