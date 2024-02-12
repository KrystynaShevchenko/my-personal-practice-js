"use strict";

//================================================================

// const user = {
//   username: "Victor",
//   showName() {
// ✅ Віктор біжить швидко, тому що він (this) намагається зловити поїзд.
//     console.log(this.username);
//   },
// };

// user.showName();

//* Метод showName — це функція, яка викликається в контексті об'єкта user.
//* Під час її виклику в this записується посилання на об'єкт user, і ми можемо звертатися до його властивостей і методів.

//================================================================
//*Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace.order("Four meats")); //повертає рядок "Order accepted, preparing «Four meats» pizza"
// console.log(pizzaPalace.order("Big Mike")); //повертає рядок "Sorry, there is no pizza named «Big Mike»"
// console.log(pizzaPalace.order("Viennese")); //повертає рядок "Sorry, there is no pizza named «Viennese»"

//================================================================

// const user = {
//   username: "Poly",
//   showThis() {
//     console.log(this);
//   },
// };

// console.log(user.showThis()); // {username: "Poly", showThis: ƒ}

//================================================================
// function showThis() {
//   console.log("this in showThis: ", this);
// }

// Викликаємо у глобальному контексті
// console.log(showThis()); // "this in showThis: undefined"
//================================================================

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
//   room: 27,
// };

// const poly = {
//   username: "Poly",
//   room: 191,
// };

// console.log(greet.call(mango, "Welcome")); // "Welcome, Mango, your room is 27!"
// console.log(greet.call(poly, "Aloha")); // "Aloha, Poly, your room is 191!"
//================================================================

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
//   room: 27,
// };

// const poly = {
//   username: "Poly",
//   room: 191,
// };

// greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
// greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"
//================================================================

// const customer = {
//   username: "Jacob",
//   sayHello() {
//     console.log(`Hello, ${this.username}!`);
//   },
// };

// customer.sayHello(); // "Hello, Jacob!"

// const greet = customer.sayHello.bind(customer);

// greet(); // "Hello, Jacob!"

//================================================================
// function sayHello(greeting) {
//   console.log(`${greeting}, ${this.name}!`);
// }

// const user = {
//   name: "Alice",
// };

// const greet = sayHello.bind(user);

// greet("Hello");
//================================================================
// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   const username = callback();
//   console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"
//================================================================
// const library = {
//   books: 1923,
//   logBookCount() {
//     console.log(this.books);
//   },
// };

// const showBooks = library.logBookCount.bind({ books: 724 });

// showBooks();
//================================================================
// const library = {
//   books: 1923,
//   logBookCount() {
//     console.log(this.books);
//   },
// };

// function showBooks(callback) {
//   callback();
// }

// showBooks(library.logBookCount);
//================================================================
// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// const user = {
//   username: "Mango",
// };

// user.showContext = showThis;

// user.showContext(); // this in showThis: window
//================================================================
// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis(); // this in showThis: window
//================================================================
// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }
//================================================================
// const customer = {
//   username: "Jacob",
// };

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

// console.log(animal.isPrototypeOf(dog)); // true
// console.log(dog.isPrototypeOf(animal)); // false
// console.log(customer.isPrototypeOf(dog)); // false
//================================================================

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // {name: "Mango", [[Prototype]]: animal}
// console.log(dog.name); // "Mango"
// console.log(dog.legs); // 4
//================================================================
// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// for (const key in dog) {
//   console.log(key); // "name" "legs"
// }
//================================================================
// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key); // "name"
//   }
// }
//================================================================
// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(Object.keys(dog)); // ["name"]
// console.log(Object.values(dog)); // ["Mango"]

// for (const key of Object.keys(dog)) {
//   console.log(key); // "name"
// }
//================================================================

// const objC = { c: "objC prop" };

// const objB = Object.create(objC);
// objB.b = "objB prop";

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
// console.log(objC); // { c: "objC prop", [[Prototype]]: Object }

// console.log(objA.hasOwnProperty("a")); // true
// console.log(objA.a); // "objA prop"

// console.log(objA.hasOwnProperty("b")); // false
// console.log(objA.b); // "objB prop"

// console.log(objA.hasOwnProperty("c")); // false
// console.log(objA.c); // "objC prop"

// console.log(objA.hasOwnProperty("x")); // false
// console.log(objA.x); // undefined
//================================================================
// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";
// dog.legs = 5;

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

//================================================================

// const customer = {
// 	username: "Jacob"
// };

// const animal = {
// 	legs: 4
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

// console.log(animal.isPrototypeOf(dog)); // true
// console.log(dog.isPrototypeOf(animal)); // false
// console.log(customer.isPrototypeOf(dog)); // false

//================================================================

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// for (const key in dog) {
//   console.log(key); // "name" "legs"
// }

//================================================================

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key); // "name"
//   }
// }

//================================================================

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(Object.keys(dog)); // ["name"]
// console.log(Object.values(dog)); // ["Mango"]

// for (const key of Object.keys(dog)) {
//   console.log(key); // "name"
// }

//================================================================

// const objC = { c: "objC prop" };

// const objB = Object.create(objC);
// objB.b = "objB prop";

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
// console.log(objC); // { c: "objC prop", [[Prototype]]: Object }

// console.log(objA.hasOwnProperty("a")); // true
// console.log(objA.a); // "objA prop"

// console.log(objA.hasOwnProperty("b")); // false
// console.log(objA.b); // "objB prop"

// console.log(objA.hasOwnProperty("c")); // false
// console.log(objA.c); // "objC prop"

// console.log(objA.hasOwnProperty("x")); // false
// console.log(objA.x); // undefined

//================================================================

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// getWage(baseSalary, overtime, rate);

//================================================================

// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// console.log(employee.getWage());

//================================================================

// class User {
// Тіло класу
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}

//================================================================

// class User {
//   constructor(name, email) {
//     console.log(name, email);
//   }
// }

// const mango = new User("Mango", "mango@mail.com"); // "Mango mango@mail.com"
// console.log(mango); // {}

//================================================================

// class User {
//   constructor(name, email) {
// Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }

//================================================================

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

// Метод getEmail
//   getEmail() {
// ...
//   }

// Метод changeEmail
//   changeEmail(newEmail) {
// ...
//   }
// }

//================================================================

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }
//================================================================

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// console.log(mango.getEmail()); // "mango@mail.com"

// mango.changeEmail("new@mail.com");

// console.log(mango.getEmail()); // "new@mail.com"

//================================================================

// class User {
// Необов'язкове оголошення публічних властивостей
//   name;
// Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango.name); // "Mango"
// console.log(mango.#email); // Виникне помилка, це приватна властивість

//================================================================

// class User {
//   name;
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// console.log(mango.getEmail()); // "mango@mail.com"
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // "mango@supermail.com"

//================================================================

// class User {
// Тіло класу
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}
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