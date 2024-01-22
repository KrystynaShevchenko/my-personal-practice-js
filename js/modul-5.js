"use strict";
//================================================================

// function foo() {
//   console.log("Hello");
// }
// foo();
//================================================================

// function greet(name) {
//   return `Welcome ${name}!`;
// }

// Викликаємо функцію greet і виводимо результат у консоль
//console.log(greet("Mango")); // "Welcome Mango!"

// Виводимо функцію greet у консоль, не викликаючи її
//console.log(greet); // ƒ greet() {return `Welcome ${name}!`}

//================================================================

//*Функція makePizza повертає рядок з повідомленням клієнту.
//*Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza,
//*а у змінній pointer було посилання на функцію makePizza.
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();
// const pointer = makePizza;

//console.log(result); //Your pizza is being prepared, please wait.
//console.log(pointer); //ƒ makePizza() {return "Your pizza is being prepared, please wait.";}

//================================================================

// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// registerGuest("Mango", greet); // "Registering Mango!"
// "Welcome Mango!"

// registerGuest("Mango", notify); // "Registering Mango!"
// "Dear Mango, your room will be ready in 30 minutes"

//================================================================

//*Функція makeMessage приймає один параметр ім'я піци, що доставляється,
//*pizzaName та повертає рядок з повідомленням клієнту.
//*Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром
//*(параметр callback) колбек - функцію і повертала результат її виклику.
//*Функції deliverPizza або makePizza будуть передаватися як колбек
//*для makeMessage і очікувати аргументом ім'я готової піци, що доставляється.

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage("Royal Grand", makePizza)); //повертає рядок "Pizza Royal Grand is being prepared, please wait..."
// console.log(makeMessage("Ultracheese", deliverPizza)); //повертає рядок "Delivering Ultracheese pizza."
//================================================================

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// Передаємо інлайн-функцію greet у якості колбека
// registerGuest("Mango", function greet(name) {
//   console.log(`Welcome ${name}!`);
// });

// Передаємо інлайн-функцію notify у якості колбека
// registerGuest("Poly", function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// });

//================================================================
// const numbers = [5, 10, 15, 20, 25];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }

// Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });
//================================================================

// * Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел,
// *і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.
// *Доповни виклик метода forEach, передавши йому колбек-функцію,
// *яка на кожній ітерації додає до totalPrice значення поточного елемента масива orderedItems.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // повертає 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116
//================================================================

// * Функція filterArray(numbers, value) приймає першим параметром масив чисел numbers
// * і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву,
// * які більші за значення другого параметра числа value.Якщо таких значень не буде знайдено, функція повертає порожній масив.
// * Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function filterArray(numbers, value) {
//   let filteredArray = [];

//   numbers.forEach(function (number) {
// Перевірка, чи елемент більший за вказане значення value
//     if (number > value) {
// Додавання елемента до нового масиву
//       filteredArray.push(number);
//     }
//   });

//   return filteredArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); //повертає[(4, 5)];
// console.log(filterArray([1, 2, 3, 4, 5], 4)); //повертає[5];
// console.log(filterArray([1, 2, 3, 4, 5], 5)); //повертає[];
// console.log(filterArray([12, 24, 8, 41, 76], 38)); //повертає[41, 76];
// console.log(filterArray([12, 24, 8, 41, 76], 20)); //повертає[24, 41, 76];
// console.log(filterArray([12, 24, 8, 41, 76], 20)); //повертає[24, 41, 76];
//================================================================

// *Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.
// * function calculateTotalPrice(quantity, pricePerItem) {
//   *return quantity * pricePerItem;
// *}

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// console.log(calculateTotalPrice(3, 400)); //повертає 1200

//================================================================

//*Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона використовувала неявне повернення.
//* const calculateTotalPrice = (quantity, pricePerItem) => {
//*return quantity * pricePerItem;
//*};

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// console.log(calculateTotalPrice(5, 100)); //повертає 500
// console.log(calculateTotalPrice(8, 60)); //повертає 480
// console.log(calculateTotalPrice(3, 400)); //повертає 1200

//================================================================

// const numbers = [5, 10, 15, 20, 25];

// Звичайна анонімна функція
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// Стрілочна анонімна функція
// numbers.forEach((number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// });

//================================================================

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Inex ${index}, value ${number}`);
// };

// numbers.forEach(logMessage);
//================================================================

// *Виконай рефакторинг функції calculateTotalPrice(orderedItems),
// *замінивши її оголошення на стрілочну функцію.
// *Також заміни колбек - функцію, передану в метод forEach(), на стрілочну функцію.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

// Використання стрілочної функції для передачі колбека в метод forEach
//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };

// console.log(calculateTotalPrice([12, 85, 37, 4])); //повертає 138
//================================================================

// *Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

// Заміна колбека для методу forEach на стрілочну функцію
//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3)); //[4, 5]

//================================================================

//================================================================

//================================================================

//================================================================

//================================================================

//================================================================

//================================================================

//================================================================

//================================================================

//================================================================

//================================================================
//================================================================

//================================================================

//================================================================

//================================================================

//================================================================

//================================================================

//================================================================

//================================================================

//================================================================

//================================================================

//================================================================

//================================================================
//================================================================

//================================================================

//================================================================

//================================================================

//================================================================

//================================================================

//================================================================

//================================================================

//================================================================

//================================================================

//================================================================

//================================================================
