console.log("Hello World!");

let age = 10;
let age2 = 30;

const name = "Ewa";
const first_name = "Ewi";

let addition = 10 + 20;

let sumOfAges = age + age2;

let difference = age2 - age;

let multiplication = age * age2;

let division = age2 / age;

console.log(addition, sumOfAges, difference, multiplication, division);

let graterThan = age > age2;
console.log(graterThan);

let firstname = "CODE";
let lastname = "Lancashire";
let fullName = firstname + " " + lastname;
console.log(`I think ${firstname} ${lastname} is the best!`);

let namesArray = ["Ewa", "Ewi", "John"];

let person1 = {
  name: "Ewa",
  age: 18,
};

let person2 = {
  name: "Ewi",
  age: 18,
};

let person3 = {
  name: "John",
  age: 30,
};

let pople = [person1, person2, person3];
console.log(pople);

function additionOfNumbers(a, b = 30) {
  //let a = 10;
  //let b = 30;

  let sum = a + b;
  return sum;
}

let additionValue = additionOfNumbers(-40, 10);
console.log(additionValue);
console.log(additionOfNumbers(40, 50));

let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
console.log("loop finished");

let start = 0;
while (start < numbers.length) {
  console.log(numbers[start]);
  start++;
}
