"use strict";
// console.log(Boolean(true)); // true
// console.log(Boolean(false)); // false

// function checkStorage(available, ordered) {
//   if (available >= ordered) {
//     console.log("Not enough goods in stock!");
//   } else {
//     console.log("Order is processed, our manager will contact you");
//   }
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));

// const ageCustomer = 10;
// const money = 40;
// if (ageCustomer > 18) {
//   console.log("Hi");
// } else if (money >= 50) {
//   console.log("OK");
// } else {
//   console.log("Bye");
// }

// function security(agePerson, money1) {
//   if (agePerson >= 18) {
//     console.log("Go");
//     return "Vip";
//   } else if (money1 >= 50) {
//     console.log("Ok. Tou can go");
//     return "Basick";
//   } else {
//     console.log("Buy");
//     return "Non";
//   }
// }

// const ticket = security(10, 20);
// console.log(ticket);

// security(20, 50);
// security(10, 50);
// security(11, 40);

// let exp = 500;
// let myStutus = 5;

// if (exp >= myStutus) {
//   myStutus = "Top";
// } else {
//   myStutus = "Norm";
// }
// console.log(myStutus);

// let exp = 100;
// let myStutus = exp > 200 ? "Top" : "Normal";
// console.log(myStutus);

// let hours = 14;
// let minuties = 10;
// let time;

// if (minuties === 0) {
//   time = `${hours}г.`;
// } else {
//   time = `${hours}г. ${minuties}хв.`;
// }

// let time = minuties === 0 ? `${hours}г.` : `${hours}г. ${minuties}хв.`;
// console.log(time);

// let hours = 14;
// let minuties = 0;
// let time = `${hours}г.`;

// if (minuties !== 0) {
//   time += `${minuties}хв.`;
// }
// console.log(time);

// const userName = "Mango";
// switch (userName) {
//   case "Poly":
//     console.log(1);
//     break;
//   case "Mango":
//     console.log(2);
//     break;
//   case "Apple":
//     console.log(3);
//     break;
// }

// const daysUntilDeadline = 3;

// if (daysUntilDeadline === 0) {
//   console.log("Today");
// } else if (daysUntilDeadline === 1) {
//   console.log("Tommotow");
// } else if (daysUntilDeadline === 2) {
//   console.log("Overmorrow");
// } else {
//   console.log("Date in the future");
// }

// const daysUntilDeadline = 5;

// switch (daysUntilDeadline) {
//   case 0:
//     console.log("Today");
//     break;
//   case 1:
//     console.log("Tommotow");
//     break;
//   case 2:
//     console.log("Overmorrow");
//     break;
//   default:
//     console.log("Date in the future");
// }

// const option = 3;
// let message = "";
// console.log(message);

// switch (option) {
//   case 1:
//     message = "You can get it at 12:00 in the office.";
//     break;
//   case 2:
//     message = "Your bag is sending today";
//     break;
//   case 3:
//     message = "Over driver on the way to your home";
//     break;
//   default:
//     message = "Our manager will call you";
// }
// console.log(message);

// ============================================
// const userName = "Jacob Mercer";

// const result = userName.slice(-4, -1);

// console.log(userName);
// console.log(result);
// ============================================
// const userName = "Jacob Mercer Test";
// const firstIndex = 6;
// const lastIndex = 13;
// const myWord = userName.slice(firstIndex, lastIndex);
// console.log(myWord);
// ============================================
// const namePerson = "Krystyna";
// const result1 = namePerson.toLocaleLowerCase();
// const result2 = namePerson.toLocaleUpperCase();

// console.log(namePerson);
// console.log(result1);
// console.log(result2);
// ============================================

// ==================includes()==========================

// const banWord = "spam";
// const text = "Hello my world, this is SpaM";

// const res1 = text.toLocaleLowerCase().includes("spam");
// console.log(res1);
// ============================================
// const banWord1 = "spam";
// const banWord2 = "***";
// const banWord3 = "*****";
// const text = "Hello my world, this is SpaM";

// const res1 = text.toLocaleLowerCase().includes(banWord1);
// const res2 = text.toLocaleLowerCase().includes(banWord2);
// const res3 = text.toLocaleLowerCase().includes(banWord3);

// const result = res1 || res2 || res3;

// console.log(result);
// ============================================
//? const enterName = "Username: " + prompt("enter your name");
//? const banWord = "Misha";
//? console.log(enterName.includes(banWord, 9));
// ============================================
// ========StartsWith/EndWith====================================
// const phone = prompt("Enter your phone number");

// if (phone.startsWith("+380")) {
//   console.log("hello");
// } else {
//   console.log("Bye");
// }
// ============================================

// const str = "djnjfn ngfknr lkrkr";
// console.log(str.endsWith("!"));
// ============================================
// ============IndexOf================================
// const str = "Some Words";
// const index = str.indexOf(" ");

// console.log(index);
// ============================================
// const str = "Some words on the";
// const firstIndex = str.indexOf(" ");
// const nextIndex = str.indexOf(" ", firstIndex + 1);

// console.log(firstIndex);
// console.log(nextIndex);
// console.log(str.slice(firstIndex + 1, nextIndex));
// ============================================
// const str = "Some words on the";
// const result = str.indexOf("5");
// console.log(result);
// ============================================
// const str = "Some words on the";

// const lastIndex = str.lastIndexOf(" ");
// const firstIndex = str.lastIndexOf(" ", lastIndex - 1);
// console.log(str.slice(firstIndex + 1, lastIndex));

// const result = str.indexOf("5");
// ============================================
// =======trim=====================================
// const str = "      Hello user Kris    ";
// console.log(str);
// console.log(str.trim());
// ============================================
// =======replace=====================================
// let str = "Hello user Kris";
// str = str.replaceAll(" ", ",");
// console.log(str);
// ============================================
// let str = "Hello, User Kris";
// str = str.replaceAll(",", "!");
// console.log(str);
// ============================================

// ============================================
/**
 * Форматування посилання (endsWith)
 *
 * Напиши скрипт який перевіряє чи закінчується значення
 *  змінної link символом /. Якщо ні, додай до кінця
 *  значення link цей символ.
 * Використовуй конструкцію if...else.
 */
// let link = "https://my-site.com/about/";

// function checkUrl(link) {
//   if (!link.endsWith("/")) {
//     link += "/";
//   }
//   return link;
// }

// const res1 = checkUrl(link);

// console.log(res1);
// ============================================

// function checkPhoneNumber(phoneNumber) {
//   if (!phoneNumber.startsWith("+")) {
//     phoneNumber = "+" + phoneNumber;
//   }
//   return phoneNumber;
// }

// const updatenumber = checkPhoneNumber("5484844");
// console.log(updatenumber);
// ============================================

/**
 * Форматування посилання (includes та логічне «І»)
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /. Якщо ні, додай до кінця
 * значення link цей символ, але тільки в тому випадку,
 * якщо в link є підрядок "my-site".
 * Використовуй конструкцію if...else або тернарний оператор.
 */

// let url = "https://my-site.com/about";

// function checkLink(link) {
//   if (link.includes("my-site") && !link.endsWith("/")) {
//     link += "/";
//   }
//   console.log(link);
// }
// checkLink(url);

// ============================================
// let url = "https://some-site.com/about";

// function checkLink(link) {
//   if (link.includes("my-site") && !link.endsWith("/")) {
//     link += "/";
//   }
//   console.log(link);
// }
// checkLink(url);
// ============================================

/*
 * Пошук у рядку методом includes()
 */

// const blacklistedWord1 = "spam";
// const blacklistedWord2 = "sale";

// const string1 =
//   "Hello, I'm Prince Abdul, this is not spam, I'm offering you a SALE million!";
// const string2 = "Biggest SALE this week, don't miss out!";
// const string3 = "#fatlivesmatter advertising campaign";

// function checkSpam(str) {
//   if
// }
// function normalizeInput(input, to) {
//   let = text;

//   switch (to) {
//     case "lower":
//       text = input.toLowerCase();
//       break;
//     case "upper":
//       text = input.toUpperCase();
//       break;
//     default:
//       text = input;
//       return text;
//   }
// }

// normalizeInput("This ISN'T SpaM", "lower"); //"this isn't spam"
// normalizeInput("This ISN'T SpaM", "upper"); //"THIS ISN'T SPAM"
// normalizeInput("Big SALE", "lower"); //"big sale"
// normalizeInput("Big SALE", "upper"); //"BIG SALE"
// normalizeInput("Stay Awhile and Listen", "lower"); // "stay awhile and listen"
// normalizeInput("Stay Awhile and Listen", "upper"); //"STAY AWHILE AND LISTEN"

// function checkFileExtension(fileName, ext) {
//   if (fileName.endsWith(ext)) {
//     return "File extension matches";
//   } else {
//     return "File extension does not match";
//   }
// }

// console.log(checkFileExtension("styles.css", ".css"));
// console.log(checkFileExtension("styles.css", ".js"));
// console.log(checkFileExtension("app.js", ".js"));
// console.log(checkFileExtension("app.js", ".html"));
// console.log(checkFileExtension("index.html", ".html"));

// function getFileName(file) {
//   const index = file.indexOf(".");
//   if (index === -1) {
//     return file;
//   } else {
//     return file.slice(0, index);
//   }
// }

// console.log(getFileName("styles.css")); //"styles"
// getFileName("app.js"); //"app"
// getFileName("app"); //"app"
// getFileName("index.js"); //getFileName("index.js")
// getFileName("index.html"); //"index"
// getFileName("index.css"); // "index"
// getFileName("index"); // "index"

// function createFileName(name, ext) {
//   const lastName = name.trim();
//   return `${lastName}.${ext}`;
// }

// console.log(createFileName(" order ", "txt")); //  "order.txt"
// console.log(createFileName("report ", "csv")); //  "report.csv"
// console.log(createFileName(" presentation", "xml")); // "presentation.xml"

//* Функція calculateTotal(number) приймає ціле число (параметр number).
// * Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно.
// * Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
// Оголошена функція calculateTotal(number)
// Виклик функції calculateTotal(1) повертає 1
// Виклик функції calculateTotal(3) повертає 6

// Виклик функції calculateTotal() з випадковим числом повертає правильне значення

// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 0; i <= number; i++) {
//     total += i;
//   }
//   return total;
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(0)); // Виклик функції calculateTotal(0) повертає 0
// console.log(calculateTotal(18)); // Виклик функції calculateTotal(18) повертає 171
// console.log(calculateTotal(24)); // Виклик функції calculateTotal(24) повертає 300

// спочатку треба створити "змінну для суми" яка = 0 (для зберігання всіх цілих чисел від 1 до number)
//потім створити змінну i = 1 для ітерації всіх цілих чисел до number.
//Далі йде while (i <= number) потім { "змінна суми" += i і після нього i++ } return "змінна суми".
//У кожній ітерації циклу while , змінна i збільшується на одиницю, а змінна "суми" збільшується на поточне значення i.
//Після того, як цикл закінчився, функція повертає значення змінної "суми", яке є сумою всіх цілих чисел від одиниці до number, включно.
//Якось так)
// function calculateTotal(number) {
//   let summ = 0;
//   let i = 1;
//   while (i <= number) {
//     summ += i;
//     i++;
//   }
//   return summ;
// }
// console.log(calculateTotal(0));
// console.log(calculateTotal(18)); // Виклик функції calculateTotal(18) повертає 171
// console.log(calculateTotal(24)); // Виклик функції calculateTotal(24) повертає 300

// function calculateEvenTotal(number) {
//   let even = 0;
//   for (let i = 0; i <= number; i++) {
//     if (i % 2 === 0) {
//       even += i;
//     }
//   }
//   return even;
// }

// const start = 6;
// const end = 17;
// let number;
// for (let start = 0; i < end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// function findNumber(start, end, divisor) {
//   let result;
//   for (i = start; i <= end; i += 1) {
//     if (i % divisor === 0) {
//       result = i;
//       return result;
//     }
//   }
// }

// console.log(findNumber(8, 17, 3)); //повертає `9`
// console.log(findNumber(16, 35, 7)); //повертає `21`
// console.log(findNumber(2, 6, 5)); //повертає `5`
// console.log(findNumber(6, 9, 4)); //повертає `8`

// ==============================================

// let price = 100;
// const subscription = "pro";

// if (subscription === "pro") {
//   price = 100;
// }

// console.log(price);
// ==============================================

// let price = 0;
// const subscription = "free";

// if (subscription === "free") {
//   price = 0;
// }

// console.log(price);
// ==============================================

// function checkAge(age) {
//   if (age >= 18) {
//     return "You are an adult";
//   }
// }

// console.log(checkAge(20));
// console.log(checkAge(10));
// console.log(checkAge(18));
// ==============================================

// const grade = 85;

// if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }
// ==============================================
// const grade = 40;

// if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }

// ==============================================

// const fruit = "orange";

// switch (fruit) {
//   case "apple":
//     console.log("Apple selected");
//     break;
//   case "banana":
//     console.log("Banana selected");
//     break;
//   case "orange":
//     console.log("Orange selected");
//     break;
//   default:
//     console.log("The fruit is unknown");
// }

// ==============================================

// const day = 3;

// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log("This is a working day");
//     break;
//   case 6:
//   case 7:
//     console.log("It is a day off");
//     break;
//   default:
//     console.log("Invalid");
// }

// ==============================================
// const a = 20;
// console.log(a > 10 && a < 30); // true && true -> true

// const b = 50;
// console.log(b > 10 && b < 30); // true && false -> false
// console.log(b > 80 && b < 120); // false && true -> false

// ==============================================

// console.log("hello" && 0); // 0
// console.log(0 && "hello"); // 0

// console.log(3 && false); // false
// console.log(false && 3); // false

// console.log(0 && ""); // 0
// console.log("" && 0); // ""

// ==============================================

// function checkForName(fullName, firstName) {
//   let message;
//   const fullNameToLowerCase = fullName.toLowerCase();
//   const firstNameToLowerCase = firstName.toLowerCase();

//   if (fullNameToLowerCase.includes(firstNameToLowerCase)) {
//     message = "true";
//   } else {
//     message = "false;";
//   }
//   return message;
// }

// console.log(checkForName("Caty Stars", "Andromeda"));//false
// console.log(checkForName("Caty Stars", "cAtY"));//true
// ==============================================

// function checkForName(fullName, firstName) {
//   if (fullName.toLowerCase().includes(firstName.toLowerCase())) {
//     return "true";
//   } else {
//     return "false";
//   }
// }

// console.log(checkForName("Caty Stars", "Andromeda")); //false
// console.log(checkForName("Caty Stars", "cAtY")); //true
// console.log(checkForName("Jason Neis", "Jacob"));
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================
