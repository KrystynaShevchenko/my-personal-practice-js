"use strict";
//========================================================
//*Створення об'єкта*//

// const book = {
//   title: "The Last Kindom",
//   author: "Berhand Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// console.log(book);
//========================================================

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// console.log(apartment);
//========================================================
// * Вкладені властивості*/

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// console.log(user);
//========================================================

// const ststs = {
//   followers: 510,
//   views: 236,
// };

// console.log(ststs);

//========================================================

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// console.log(apartment);

//========================================================
//*Доступ до властивостей через крапку*//

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // "The Last Kingdom"

// const bookGenres = book.genres;
// console.log(bookGenres); // ["historical prose", "adventure"]

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

//========================================================

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

//========================================================
//*Доступ до вкладених властивостей *//
// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swimming", "music", "sci-fi"],
// };

// const location = user.location;
// console.log(location); // {country: "Jamaica", city: "Ocho Rios"}

// const country = user.location.country;
// console.log(country); // "Jamaica"
//========================================================

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastElementTag = apartment.tags.length - 1;
// const lastTag = apartment.tags[lastElementTag];
// ***const lastTag = apartment.tags[2];

// console.log(ownerName); //Henry
// console.log(ownerPhone); //982-126-1588
// console.log(ownerEmail); //henry.carter@aptmail.com
// console.log(numberOfTags); //3
// console.log(firstTag); //premium
// console.log(lastTag); //top

//========================================================

//*Доступ до властивостей через квадратні дужки//

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log(book.title); // "The Last Kingdom"
// console.log(book["title"]); // "The Last Kingdom"

// console.log(book.genres); // ["historical prose", "adventure"]
// console.log(book["genres"]); // ["historical prose", "adventure"]

// const propKey = "author";
// console.log(book.propKey); // undefined
// console.log(book[propKey]); // "Bernard Cornwell"
//========================================================

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);
//========================================================

//*Зміна значення властивостей*//

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.isPublic = false;
// book.genres.push("drama");

// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ["historical prose", "adventure", "drama"]
//========================================================

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// console.log(apartment);
//========================================================

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];
// book.price = {
//   hardcover: 39,
//   softcover: 29,
// };

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // "en"
// console.log(book.translations); // ["ua", "ru"]

//========================================================

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// };

// console.log(apartment);

//========================================================
//*Короткі властивості*//

// const name = "Henry Sibola";
// const age = 25;

// const user = {
//   name: name,
//   age: age,
// };

// console.log(user.name); // "Henry Sibola"
// console.log(user.age); // 25

//========================================================
// const name = "Henry Sibola";
// const age = 20;

// const user = {
//   name,
//   age,
// };

// console.log(user.name); // "Henry Sibola"
// console.log(user.age); // 25

//========================================================
//*Обчислювальні властивості*//

//========================================================
// const propName = "name";
// const user = {
//   age: 25,
// };

// user[propName] = "Henry Sibola";
// console.log(user.name); // "Henry Sibola"
//========================================================

// const propName = "name";
// const user = {
//   age: 25,
// ключ цієї властивості буде взято зі значення змінної propName
//   [propName]: "Henry Sibola",
// };

// console.log(user.name); // "Henry Sibola"

//========================================================
// ** Перебір об'єкта. Цикл for...in *//

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості з таким ключем
// }

//========================================================

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);
//========================================================
//* Метод Object.keys() *//

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

//========================================================

// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }

//========================================================

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(values);
// console.log(keys);
//========================================================

// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// }
//========================================================

// function countProps(object) {
//   let propCount = Object.keys(object).length;
//   return propCount;
// }
//========================================================
//*Метод Object.values()*//

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ["title", "author", "rating"]

// const values = Object.values(book);
// console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]

//========================================================
//* Запиши у змінну keys масив ключів властивостей об'єкта apartment, а у змінну values - масив їх значень.
//*Використовуй методи Object.keys() і Object.values(). *//

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);
//========================================================
//* Модуль 4. Заняття 1. Об'єкти

// const user = {
//   name: "Kris",
//   age: 24,
//   isStudent: false,
//   address: {
//     city: "Kharkiv",
//     country: "Ukraine",
//     location: {
//       x: 10,
//       y: 30,
//     },
//   },
// };

// const age = user.age;
// console.log(age); // 24
// console.log(user); //{ name: 'Kris', age: 24, city: 'Kharkiv', isStudent: false }
// console.log(user["address"]); //address: { city: 'Kharkiv', country: 'Ukraine', location: { x: 10, y: 30 } }
// console.log(user.isAdmin); //undefined
// console.log(user.address.location.x); //10
// console.log(user.address["location"]); //{ x: 10, y: 30 }
// console.log(user["address"]["location"]); //{ x: 10, y: 30 }
//========================================================

// const playList = {
//   name: "My amazing playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   isFavourite: true,
// };

// playList.name = "NewName";
// playList["rating"] = 3;

// playList.newProps = "HELLO WORD";

// console.log(playList);

// delete playList.isFavourite;
// delete playList.tracks[0];
// console.log(playList);

//========================================================

// const playList = {
//   name: "My amazing playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   isFavourite: true,
// };

// const propertyName = "tracks";
// playList[propertyName] = [];

// console.log(playList);

// delete playList[propertyName];
// console.log(playList);

//========================================================

// const playList = {
//   name: "My amazing playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   isFavourite: true,
// };

// playList.autor = {
//   nameAutor: "Zozo",
//   age: 28,
// };

// playList.autor.test = "data";
// console.log(playList);

//========================================================

// function foo(values) {
//   console.log(values);
//   console.log(values.a);
//   console.log(values.b);
// }
// const obj = {
//   a: "543",
//   b: "382",
// };

// foo(obj);

//========================================================

// function showUserInfo(user) {
//   console.log("\n\n--------------------------");
//   console.log(`name: ${user.name}`);
//   console.log(`name: ${user.age}`);
//   console.log(`name: ${user.city}`);
//   console.log("--------------------------");
// }

// const user1 = {
//   name: "Max",
//   age: 25,
//   city: "Kyiv",
// };

// const user2 = {
//   name: "Kata",
//   age: 18,
//   city: "Kharkiv",
// };

// const user3 = {
//   name: "Dima",
//   age: 15,
//   city: "Dnipro",
// };

// showUserInfo(user1);
// showUserInfo(user2);
// showUserInfo(user3);
//========================================================
// const objA = {
//   x: 1,
//   y: 2,
// };

// const objB = {
//   y: 3,
// };

// const result = {
//   x: 5,
//   ...objA,
//   y: 10,
//   ...objB,
//   z: 15,
// };

// console.log(result);
//========================================================
//========================================================

//========================================================
//========================================================

//========================================================
//========================================================

//========================================================
//========================================================

//========================================================
//========================================================

//========================================================
//========================================================

//========================================================
//========================================================

//========================================================
//========================================================

//========================================================
