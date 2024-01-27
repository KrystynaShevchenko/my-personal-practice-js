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

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// Відбулася мутація вихідних даних - масиву numbers
// console.log(numbers); // [2, 4, 6, 8, 10]

//================================================================

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach((element) => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

//================================================================

//* Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент,
//* значення якого - це парне число, додаючи до нього значення параметра value, який точно є числом.
//* Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers,
//* а створювала, наповнювала і повертала новий масив з оновленими значеннями.

// *************
// function changeEven(numbers, value) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
// }
// *************

// function changeEven(numbers, value) {
// Створення нового масиву з оновленими значеннями
//   const updatedNumbers = numbers.map((number) => {
// Перевірка, чи число парне
//     if (number % 2 === 0) {
// Додавання до парного числа значення параметра value
//       return number + value;
//     }
// Залишити непарне число без змін
//     return number;
//   });

// Повернення нового масиву
//   return updatedNumbers;
// }

// *************

// function changeEven(numbers, value) {
// Створення нового масиву без зміни оригінального
//   const updatedNumbers = [];

//   numbers.forEach((number) => {
// Перевірка, чи число парне
//     if (number % 2 === 0) {
// Додавання до парного числа значення параметра value
//       updatedNumbers.push(number + value);
//     } else {
// Залишити непарне число без змін
//       updatedNumbers.push(number);
//     }
//   });

// Повернення нового масиву
//   return updatedNumbers;
// }

// *************

// console.log(changeEven([1, 2, 3, 4, 5], 10)); // повертає новий масив [1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // повертає новий масив [12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100)); // повертає новий масив [17, 124, 168, 31, 142]
//================================================================

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
// console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// Оригінальний масив не змінився
// console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]

//================================================================

// *В масиві planets зберігаються назви планет.
// *Доповни код таким чином, щоб у змінній planetsLengths вийшов масив,
// *що буде складатися з довжин назв кожної планети з масиву planets.Обов'язково використовуй метод map().

// *************
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets;
// *************

// *Оголошена змінна planets
// *Значення змінної planets - це масив ["Earth", "Mars", "Venus", "Jupiter"]
// *Оголошена змінна planetsLengths
// *Значення змінної planetsLengths - це масив [5, 4, 5, 7]
// *Для перебирання масиву планет використаний метод map()

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets.map((planet) => planet.length);

// console.log(planets);
// console.log(planetsLengths);
//================================================================
// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// const mappedCourses = students.map((student) => student.courses);
// console.log(mappedCourses); // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

// const flattenedCourses = students.flatMap((student) => student.courses);
// console.log(flattenedCourses); // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
//================================================================

// *Масив books містить колекцію об'єктів книг, кожен з яких містить властивість genres,
// *значенням якої є масив жанрів.Використовуючи метод flatMap(),
// *зроби так, щоб у змінній genres вийшов масив жанрів усіх книг(властивість genres) з масиву books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

// const genres = books.flatMap((book) => book.genres);

// console.log(genres);

//================================================================
//* Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
// *Доповни стрілочну функцію getUserEmails(users) таким чином,
// *щоб вона повертала масив поштових адрес користувачів(властивість email) з масиву об'єктів в параметрі users.

// const getUserEmails = (users) => { };

// const getUserEmails = (users) => users.map((user) => user.email);

// Приклад використання функції
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
// інші властивості
//   },
// інші користувачі
// ];

// const userEmails = getUserEmails(users);
//================================================================
// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter((value) => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]
// до positiveValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були >= 0

// const negativeValues = values.filter((value) => value < 0);
// console.log(negativeValues); // [-3, -68, -37]
// до negativeValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були < 0

// const bigValues = values.filter((value) => value > 1000);
// console.log(bigValues); // []
// до negatibigValues eValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були > 1000

// console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// Оригінальний масив values не змінився

//================================================================
//*Доповни код так, щоб у змінній evenNumbers був масив парних чисел із масиву numbers,
//*а у змінній oddNumbers — масив непарних.Обов'язково використовуй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);
//================================================================

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const best = students.filter((student) => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Mango і Kiwi

// const worst = students.filter((student) => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Ajax

// У колбек-функції зручно деструктуризувати властивості об'єкта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Poly і Houston
//================================================================

//**Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating.
//*Використовуючи метод filter(), доповни код таким чином, щоб:
//*У змінній topRatedBooks утворився масив книг,
//*рейтинг яких(властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
//*У змінній booksByAuthor утворився масив книг,
//*написаних автором з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR. */

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);
//================================================================

//*Доповни функцію getUsersWithEyeColor(users, color) таким чином,
//*щоб вона повертала масив користувачів, у яких колір очей(властивість eyeColor) збігається зі значенням другого параметра color.

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter((user) => user.eyeColor === color);
// };
//================================================================

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.find((option) => option.label === "blue"); // { label: "blue", color: "#2196F3" }
// colorPickerOptions.find((option) => option.label === "pink"); // { label: "pink", color: "#E91E63" }
// colorPickerOptions.find((option) => option.label === "white"); // undefined

//================================================================

//*Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating.
//*Використовуючи метод find(), доповни код таким чином, щоб:
//*У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) збігається зі значенням змінної BOOK_TITLE.
//*У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається зі значенням змінної AUTHOR.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);
//================================================================

//*Доповни функцію getUserWithEmail(users, email) таким чином, щоб вона повертала об'єкт користувача,
//*пошта якого(властивість email) збігається зі значенням другого параметра email.const

// const getUserWithEmail = (users, email) => {
//   return users.find((user) => user.email === email);
// };

//================================================================
// Усі елементи більші або дорівнюють нулю? - так
// [1, 2, 3, 4, 5].every((value) => value >= 0); // true

// Усі елементи більші або дорівнюють нулю? - ні
// [1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false
//================================================================
// const products = [
// 	{ name: "apple", quantity: 2 },
// 	{ name: "orange", quantity: 5 },
// 	{ name: "plum", quantity: 0 },
// ];

// const hasEveryProduct = products.every(product => product.quantity > 0);
// console.log(hasEveryProduct); // false
//================================================================

//*Доповни функцію isEveryUserActive(users) таким чином, щоб вона перевіряла,
//*чи всі користувачі зараз активні(властивість isActive) і повертала true або false.

// const isEveryUserActive = (users) => {
//   return users.every((user) => user.isActive);
// };

//================================================================

//*Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх, одним гравцем.
//*У змінній players зберігається об'єкт, де ключ це ім'я гравця, а значення - його ігровий час.
//*У змінній playtimes зберігається масив значень об'єкта players, тобто масив ігрового часу усіх гравців.
//*Значенням змінної averagePlayTime буде середній час, проведений одним гравцем в іграх.
//*Доповни код таким чином, щоб у змінній totalPlayTime вийшов загальний ігровий час з масиву playtimes.
//*Використовуй метод reduce().

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce(
//   (total, playtime) => total + playtime,
//   0
// );

// const averagePlayTime = totalPlayTime / playtimes.length;

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
