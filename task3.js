//1

// let numberArr = [
//     [10, 20, 60],
//     [8, 10, 52],
//     [15, 5, 24],
//     [26, 28, 43],
//     [12, 16, 51]
// ];

// let sum = 0;

// for (let i = 0; i < numberArr.length; i++) {
//     for (let j = 0; j < numberArr[i].length; j++) {
//         sum += numberArr[i][j];
//     }
// }

// console.log(sum); 



//2


// let person = [
//     {
//         name: "A",
//         age: 25,
//         detail: {
//             married: true,
//             exp: 2
//         }
//     },
//     {
//         name: "B",
//         age: 25,
//         detail: {
//             married: true,
//             exp: 5
//         }
//     },
//     {
//         name: "C",
//         age: 25,
//         detail: {
//             married: true,
//             exp: 2
//         }
//     }
// ];

// for (let i = 0; i < person.length; i++) {
//     person[i].detail.exp = 8;
// }

// console.log(person);




//3


// let person = [
//     {
//         name: "A",
//         age: 25,
//         detail: {
//             married: true,
//             exp: 2
//         }
//     },
//     {
//         name: "B",
//         age: 28,
//         detail: {
//             married: false,
//             exp: 5
//         }
//     },
//     {
//         name: "C",
//         age: 29,
//         detail: {
//             married: true,
//             exp: 2
//         }
//     }
// ];

// let peopleAbove25 = person.filter(person => person.age > 25);

// let totalPeopleAbove25 = peopleAbove25.length;

// console.log(totalPeopleAbove25PeopleAbove25);




//4


// const isPalindrome = word => {
//     let cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
//     let reversedWord = cleanedWord.split('').reverse().join('');
//     return cleanedWord === reversedWord;
// };
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello")); 




//5


// const reverseNumber = (number) => {
//     let reversedNumber = 0;
//     while (number !== 0) {
//         reversedNumber = (reversedNumber * 10) + (number % 10);
//         number = Math.floor(number / 10);
//     }
//     return reversedNumber;
// }
// console.log(reverseNumber(12345));
// console.log(reverseNumber(9876)); 




//6


// function isArmstrongNumber(number) {
//     const digits = number.toString().split('');
//     const numDigits = digits.length;
//     let sum = 0;

//     digits.forEach(function (digit) {
//         sum += Math.pow(parseInt(digit), numDigits);
//     });

//     return sum === number;
// }

// console.log(isArmstrongNumber(153)); 
// console.log(isArmstrongNumber(370));
// console.log(isArmstrongNumber(123)); 




//7


// const numbers = [87, 23, 446, 99, 224, 22];
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const count = evenNumbers.length;
// console.log(`There are ${count} even numbers in the array.`);



//8


// const data = [["Mango", "5kg", 100], ["Apple", "2kg", 150], ["Grapes", "5kg", 80]];
// let totalPrice = 0;

// for (let i = 0; i < data.length; i++) {
//     totalPrice += data[i][2];
// }
// console.log("The total price is " + totalPrice );




//9

// const fruits = [{ name: "Apple", weight: "1Kg", price: 280 }, { name: "Orange", weight: "1Kg", price: 180 }, { name: "Pomegranate", weight: "1Kg", price: 250 }];

// localStorage.setItem('fruits', JSON.stringify(fruits));




//10


// //map
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map((number) => {
//     return number * 2;
// });
// console.log(doubledNumbers)

// // for each
// const numb = [1, 2, 3, 4, 5];
// numb.forEach((number) => {
//     console.log(number * 2);
// });



//11

//Local Storage
// localStorage.setItem('username', 'Ajay');
// const username = localStorage.getItem('username');
// console.log(username);

// Session Storage
// sessionStorage.setItem('password', 1947);
// const theme = sessionStorage.getItem('password');
// console.log(theme); 



//12

// let students = [
//     { name: 'pavithran', age: 22, roll: 1, marks: 98 },
//     { name: 'ajay', age: 24, roll: 2, marks: 79 },
//     { name: 'dinakaran', age: 22, roll: 3, marks: 85 },
//     { name: 'jacky', age: 20, roll: 4, marks: 68 },
// ];
// let highScoreStudents = students.filter((student) => student.marks > 75);
// console.log(highScoreStudents);


//13

// // 1. map method:

// const student = [
//     { name: 'pavi', age: 22 },
//     { name: 'ajay', age: 24 },
//     { name: 'selva', age: 23 }
// ];
// const studentNames = student.map(student => student.name);
// console.log(studentNames);

// // filter method:

// const numbers = [10, 20, 30, 40, 50];

// const filteredNumbers = numbers.filter(number => number > 20);
// console.log(filteredNumbers);

// //  reduce method
// const numberses = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(sum);

// //  find method

// const fruits = [
//     { name: 'Apple', color: 'red' },
//     { name: 'Banana', color: 'yellow' },
//     { name: 'Orange', color: 'orange' }
// ];

// const foundFruit = fruits.find(fruit => fruit.color === 'red');
// console.log(foundFruit);

// // forEach` method
// const colors = ['red', 'green', 'blue'];
// colors.forEach(color => console.log(color));



//14

// const numb = [22, 66, 25, 87, 45, 28, 99];
// const filteredNumbers = numb.filter(number => number === 22 || number === 66 || number === 99);
// console.log(filteredNumbers);


//15

// const digits = [2, 5, 3, 9, 20, 45, 36, 89];
// const sumOfEvens = digits.reduce((accumulator, currentValue) => {
//     if (currentValue % 2 === 0) {
//         return accumulator + currentValue;
//     }
//     return accumulator;
// },0);
// console.log(sumOfEvens);







