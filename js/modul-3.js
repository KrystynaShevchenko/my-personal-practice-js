"use strict";
// function getLastElementMeta(array) {
//   const last = array.length - 1;
//   const first = array[last];
//   const firstLast = [last, first];
//   return firstLast;
// }
// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));

// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// arr1[1] = 1; //[1, 1, 3];
// arr2[2] = 1; // [ 1, 1, 1 ];

// console.log(arr2);

// const array = [false];
// const result = array ? "A" : "B";

// console.log(result);

// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits[0]);
// console.log(fruits[3]);
// console.log(fruits[5]);
// const first1element = fruits[0];
// console.log(first1element);

// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];
// console.log(firstElement); //apple
// console.log(secondElement); // plum
// console.log(lastElement); //orange

// const planets = ["Earth", "Mars", "Venus", "Uranus"];
// planets[0] = "Jupiter";
// planets[2] = "Neptune";
// console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']

// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits);

// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits.length);

// function getOrderQuantity(order) {
//   return order.length;
// }
// console.log(getOrderQuantity(["apple", "peach", "pear", "banana"]));
// console.log(getOrderQuantity(["apple", "banana"]));

// const planets = ["Earth", "Mars", "Venus"];
// const lastElementIndex = planets.length - 1;
// console.log(planets[lastElementIndex]); // "Venus"
// console.log(lastElementIndex); // 2

// function getLastElementMeta(array) {
//   let last = array.length - 1;
//   let first = array[last];
//   let firstLast = [last, first];
//   return firstLast;
// }
// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"])); // [3, "banana"]
// console.log(getLastElementMeta(["apple", "peach", "pear"])); // [2, "pear"]

// function getExtremeElements(array) {
//   const first = array[0];
//   const last = array[array.length - 1];
//   const firstLast = [first, last];
//   return firstLast;
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5])); // повертає[1, 5]
// console.log(getExtremeElements(["Earth", "Mars", "Venus"])); // повертає ["Earth", "Venus"]

//Функція getLength(array) очікує один параметр array - масив довільних значень.
//Доповни код функції так, щоб вона перетворювала масив у рядок, без роздільників, і повертала кількість символів в отриманому рядку.
// function getLength(array) {
//   const str = array.join("");
//   const strLength = str.length;
//   return strLength;
// }

// console.log(getLength(["Mango", "hurries", "to", "the", "train"])); //  повертає 22
// console.log(getLength(["M", "a", "n", "g", "o"])); // повертає 5
// console.log(getLength(["top", "picks", "for", "you"])); //повертає 14

//Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

//Оголошена функція calculateEngravingPrice(message, pricePerWord).
//Ця функція приймає першим параметром рядок, що складається зі слів,
//розділених лише пробілами(параметр message) та другим параметром - число,
//що містить ціну гравірування за одне слово(параметр pricePerWord).
//Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord) {
//   const str = message.split(" ");
//   const cont = str.length;
//   const result = cont * pricePerWord;
//   return result;
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10)); //повертає 50
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20)); //повертає 100
// console.log(calculateEngravingPrice("Web-development is creative work", 40)); //повертає 160
// console.log(calculateEngravingPrice("Web-development is creative work", 20)); //повертає 80

// function getSlice(array, value) {
//   const index = array.indexOf(value);
//   if (index === -1) {
//     return [];
//   } else {
//     return array.slice(0, index + 1);
//   }
// }

// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly")); //["Mango", "Poly"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax")); //["Mango", "Poly", "Ajax"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango")); //["Mango"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob")); //[]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey")); //[]

// const tags = [];

// for (let i = 0; i < 3; i += 1) {
//   tags.push(`tag-${i}`);
// }

// console.log(tags); // ["tag-0", "tag-1", "tag-2"]

/*** Функція createArrayOfNumbers(min, max) приймає два параметра:
min - ціле число, з якого починаються обчислення
max - ціле число, до якого включно триватимуть обчислення
Доповни код функції createArrayOfNumbers(min, max) таким чином, 
щоб вона повертала масив усіх цілих чисел від значення min до max включно.
***/

// function createArrayOfNumbers(min, max) {
//   const a = [];
//   for (let i = min; i <= max; i += 1) {
//     [a.push(i)];
//   }
//   return a;
// }

// console.log(createArrayOfNumbers(1, 3)); //повертає [1, 2, 3]
// console.log(createArrayOfNumbers(14, 17)); //повертає [14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34)); //повертає [29, 30, 31, 32, 33, 34]
// console.log(createArrayOfNumbers(1, 3)); //повертає [1, 2, 3]

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// let arr = [10, 20, 30, 40, 50];
// console.log(arr);

// const courses = ["HTML", "CSS", "Java-Script", "React", "Node"];
// console.table(courses);

// console.log(courses[0]);
// console.log(courses[3]);
// console.log(courses[4]);
// console.log(courses[50]);

// const x1 = ["book1", "book2", "book3"];
// const x2 = ["book4", "book5", "book6"];

// console.log(x1);
// console.log(x2);

// x1[1] = "New book";
// console.log(x1);
// console.log(x1.length);
// console.log(x1.length - 1);
// const lastIndex = x2.length - 1;
// console.log(lastIndex); //2
// console.log(x2[lastIndex]); //book6

// const x2 = ["book4", "book5", "book6"];
// const lastIndex = x2.length - 1;
// const lastElement = x2[lastIndex];

// console.log(lastIndex); // 2
// console.log(x2[lastIndex]); // book6

// x2[lastIndex] = "LAST NAME";
// console.log(x2); // [ 'book4', 'book5', 'LAST NAME' ]

// const arr = [];
// arr[10] = "Hello";
// console.log(arr);

// const arr1 = [10, 20, 30];
// const arr2 = [10, 20, 30];
// console.log(arr1 === arr2); //false
// console.log(arr1 === arr1); //true

// const arr3 = arr1;
// console.log(arr1 === arr3); //true;

// arr3[0] = "hello";
// console.log(arr1); // [ 'hello', 20, 30 ]

// const a = [1, 2, 3];
// const b = a;

// console.log(a); //[ 1, 2, 3 ]
// console.log("a", a); //a [ 1, 2, 3 ]
// console.log(b); //[ 1, 2, 3 ]
// console.log("b", b); // b [ 1, 2, 3 ]

// a[0] = 500;
// console.log("a", a); //a [ 500, 2, 3 ]
// console.log("b", b); //b [ 500, 2, 3 ]
// console.log(a === b); // true

// const courses = ["HTML", "CSS", "Java-Script", "React", "Node"];
// console.log(courses.join("-"));

// const str = "Hello world test slice line";
// const result = str.split(" ");

// console.log(result);

// const courses = [
//   "HTML",
//   "CSS",
//   "Java-Script",
//   "React",
//   "Node",
//   "C++",
//   "English",
// ];
// const result = courses.slice(3, 6);
// const result = courses.slice(0, -2);
// console.log(result);

// const x1 = [1, 2, 3];
// const x2 = [4, 5, 6];
// const x3 = [7, 8, 9];
// const result1 = x1.concat(x2, x3); // [1, 2, 3, 4, 5,6, 7, 8, 9]
// const result2 = [].concat(x1, x2, x3); // [1, 2, 3, 4, 5,6, 7, 8, 9]
// console.log(result1);
// console.log(result2);

// const copy = x1.concat();
// console.log(copy); //[1, 2, 3]
// console.log(copy === x1); //false

// const books = ["book1", "book2", "book3", "book4", "book5", "book6"];
// const index = books.indexOf("book3");
// console.log(index);

// const arr = [1, 2, 3];
// arr.push("ell1");
// arr.push("ell2");
// arr.push("ell3");
// console.log(arr); //[ 1, 2, 3, 'ell1', 'ell2', 'ell3' ]

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// arr.pop();
// arr.pop();
// arr.pop();
// console.log(arr); //[ 1, 2, 3, 4, 5 ]

// arr.shift();
// const removedElement = arr.shift();
// arr.unshift();

//=============================================================

// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);
// console.log(friends[4]);
// console.log(friends[5]);
// console.log(friends[6]);
// console.log(friends[7]);
// console.log(friends[8]);
// console.log(friends[9]);
// for (let i = 0; i < friends.length; i += 1) {
//   console.log(friends[i]);
// }

//=============================================================

// const arr = [4, 8, 5, 4, 6, 4, 455, 554, 58, 58, 69, 65, 74, 54, 5, 521, 22, 2];
// const result1 = arr.includes(35);
// const result2 = arr.includes(455);
// console.log(result1); //false
// console.log(result2); //true

//============================================================

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

//============================================================

/*Функція calculateTotalPrice(order) приймає один параметр order - масив чисел. 
Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.*/
// function calculateTotalPrice(order) {
//   let result = 0;
//   for (let item of order) {
//     result += item;
//   }
//   return result;
// }

// function calculateTotalPrice(order) {
//   let result = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     result += order[i];
//   }
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); //повертає 138
// console.log(calculateTotalPrice([164, 48, 29112, 85, 37, 4])); //повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //повертає 1116

// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// console.log(sum(2, 5));

// function multiply() {
//   let total = 1;

//   for (const arg of arguments) {
//     total *= arg;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

// function foo() {
//   // У змінній args буде повноцінний масив з усіх аргументів
//   const args = Array.from(arguments);
//   return args.join("-");
// }

// console.log(foo(1, 2, 3)); // Поверне "1-2-3"

// function createReversedArray() {
//   let args = Array.from(arguments);
//   return args.reverse();
// }

// console.log(createReversedArray(12, 85, 37, 4)); //[4, 37, 85, 12]
// console.log(createReversedArray(164, 48, 291)); //[291, 48, 164]
// console.log(createReversedArray(412, 371, 94, 63, 176)); //[176, 63, 94, 371, 412]

// function count(from, to, step = 1) {
//   console.log(`from: ${from}, to: ${to}, step: ${step}`);

//   for (let i = from; i <= to; i += step) {
// ...
//   }
// }

// console.log(count(1, 15, 4)); // "from: 1, to: 15, step: 4"
// console.log(count(1, 15)); // "from: 1, to: 15, step: 1"

// function slugify(title) {
//   let slug = title.toLowerCase().split(" ");
//   return slug.join("-");
// }

// console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// function makeArray(firstArray, secondArray, maxLength) {
//   let newArray = firstArray.concat(secondArray);
//   if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
//   } else {
//     return newArray;
//   }
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// function filterArray(numbers, value) {
//   let filteredArray = [];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       filteredArray.push(numbers[i]);
//     }
//   }

//   return filteredArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
