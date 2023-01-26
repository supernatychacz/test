//console.log("Hello World!");

//let age = 10;
//let age2 = 30;

//const name = "Ewa";
// const first_name = "Ewi";

// let addition = 10 + 20;

// let sumOfAges = age + age2;

// let difference = age2 - age;

// let multiplication = age * age2;

// let division = age2 / age;

// console.log(addition, sumOfAges, difference, multiplication, division);

// let graterThan = age > age2;
// console.log(graterThan);

// let firstname = "CODE";
// let lastname = "Lancashire";
// let fullName = firstname + " " + lastname;
// console.log(`I think ${firstname} ${lastname} is the best!`);

// let namesArray = ["Ewa", "Ewi", "John"];

// let person1 = {
//   name: "Ewa",
//   age: 18,
// };

// let person2 = {
//   name: "Ewi",
//   age: 18,
// };

// let person3 = {
//   name: "John",
//   age: 30,
// };

// let pople = [person1, person2, person3];
// console.log(pople);

// function additionOfNumbers(a, b = 30) {
//   //let a = 10;
//   //let b = 30;

//   let sum = a + b;
//   return sum;
// }

//let additionValue = additionOfNumbers(-40, 10);
//console.log(additionValue);
//console.log(additionOfNumbers(40, 50));

//let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

//for (let i = 0; i < numbers.length; i++) {
//  console.log(numbers[i]);
//}
//console.log("loop finished");

//let start = 0;
//while (start < numbers.length) {
//  console.log(numbers[start]);
//  start++;
//}

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const squares = numbers.map((number, index) => {
//   return number * number;
// });

// console.log("numbers", numbers);
// console.log("squares", squares);

// const evenNumbers = numbers.filter((number, index) => {
//   return number % 2 == 0;
// });

// console.log("evenNumbers", evenNumbers);

// const sum = numbers.reduce((previousValue, currentValue) => {
//   previousValue = previousValue + currentValue;
//   return previousValue;
// }, 0);

// console.log("sum", sum);

let form, list, image, span;
window.addEventListener("load", () => {
  form = document.querySelector("#form");
  list = document.querySelector("#list");
  image = document.querySelector("#userImage");
  span = document.querySelector("username");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    console.log("formData", formData);
    const data = Object.fromEntries(formData);
    console.log("data", data);
    const username = data.username;
    fetch(`https://api.github.com/users/${data.username}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const { avatar_url, public_repos, followers } = data;
        image.setAttribute("src", avatar_url);
        span.innerHTML = username;
        const li1 = document.createElement("li");
        li1.innerHTML = `Public Repos: ${public_repos}`;
        const li2 = document.createElement("li");
        li2.innerHTML = `Followers: ${followers}`;
        list.appendChild(li1);
        list.appendChild(li2);
        console.log("response", data);
      });
  });
});
