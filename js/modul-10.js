"use strict";

//================================================================

// console.log("First log");
// console.log("Second log");
// console.log("Third log");

//================================================================
// Виконується першою
// console.log("First log");

// setTimeout(() => {
// Виконується третьою, через 2000 мілісекунд (2 секунди)
//   console.log("Second log");
// }, 2000);

// Виконується другою
// console.log("Third log");

//================================================================

// const greet = () => {
//   console.log("Hello!");
// };

// const timerId = setTimeout(greet, 3000);

// clearTimeout(timerId);

//================================================================
// const date = new Date();

// console.log(date);
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

//================================================================

// const date = new Date("2030-03-16");
// console.log(date); // "Sat Mar 16 2030 00:00:00 GMT+0200"

//================================================================
// const date = new Date("2030-03-16T14:25:00");
// console.log(date); // "Sat Mar 16 2030 14:25:00 GMT+0200"

//================================================================
// console.log(new Date("2030")); // "Tue Jan 01 2030 02:00:00 GMT+0200"
// console.log(new Date("2030-03")); // "Fri Mar 01 2030 02:00:00 GMT+0200"
// console.log(new Date("2030-03-16")); // "Sat Mar 16 2030 02:00:00 GMT+0200"
// console.log(new Date("2030-03-16T14:25:00")); // "Sat Mar 16 2030 14:25:00 GMT+0200"

//================================================================

// const date = new Date(2030, 2, 16, 14, 25, 0, 0);
// console.log(date); // "Sat Mar 16 2030 14:25:00 GMT+0200 "

//================================================================
// const date = new Date("March 16, 2030 14:25:00");
// console.log("Date: ", date); // "Sat Mar 16 2030 14:25:00 GMT+0200"

// Повертає день місяця від 1 до 31
// console.log("Day: ", date.getDate()); // 16

// Повертає день тижня від 0 до 6, починається з неділі
// console.log("Day of the week: ", date.getDay()); // 6

// Повертає місяць від 0 до 11
// console.log("Month: ", date.getMonth()); // 2

// Повертає рік з 4 цифр
// console.log("Full year: ", date.getFullYear()); // 2030

// Повертає години
// console.log("Hours: ", date.getHours()); // 14

// Повертає хвилини
// console.log("Minutes: ", date.getMinutes()); // 25

// Повертає секунди
// console.log("Seconds: ", date.getSeconds()); // 0

// Повертає мілісекунди
// console.log("Milliseconds: ", date.getMilliseconds()); // 0

//================================================================
// const date = new Date("March 16, 2030 14:25:00");

// date.setMinutes(50);
// console.log(date); // "Sat Mar 16 2030 14:50:00 GMT+0200"

// date.setFullYear(2040);
// console.log(date); // "Fri Mar 16 2040 14:50:00 GMT+0200"

// date.setMonth(4);
// console.log(date); // "Wed May 16 2040 14:50:00 GMT+0300"

//================================================================
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// console.log(promise); // Об'єкт промісу

//================================================================
// const isSuccess = true;

// Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// Registering promise callbacks
// promise.then(
//   (value) => {
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   (error) => {
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

//================================================================

// const isSuccess = true;

// Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// Registering promise callbacks
// promise
//   .then((value) => {
//     console.log(value); // "Success! Value passed to resolve function"
//   })
//   .catch((error) => {
//     console.log(error); // "Error! Error passed to reject function"
//   });

//================================================================
// const isSuccess = true;

// Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// Registering promise callbacks
// promise
//   .then((value) => console.log(value)) // "Success! Value passed to resolve function"
//   .catch((error) => console.log(error)) // "Error! Error passed to reject function"
//   .finally(() => console.log("Promise settled")); // "Promise settled"

//================================================================
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then((value) => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then((value) => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then((value) => {
//     console.log(value); // 30
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

//================================================================
const fetchUserFromServer = (username, onSuccess, onError) => {
  console.log(`Fetching data for ${username}`);

  setTimeout(() => {
    // Change value of isSuccess variable to simulate request status
    const isSuccess = true;

    if (isSuccess) {
      onSuccess("success value");
    } else {
      onError("error");
    }
  }, 2000);
};

fetchUserFromServer(
  "Mango",
  (user) => console.log(user),
  (error) => console.error(error)
);

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

//==============================================================
