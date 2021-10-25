// function helloWorld() {
//   console.log("HelloWorld");
// }
// helloWorld();

// const isUserAuth = true;
// function checkAccess() {
//   if (isUserAuth) {
//     console.log("Доступ есть");
//   } else {
//     console.log("Доступа нет");
//   }
// }
// checkAccess();

// function writeMessage() {
//   if (isUserAuth) {
//     console.log("Привет пользователь");
//   } else {
//     console.log("Привет гость");
//   }
// }
// writeMessage();

// function sum(a, b = 0) {
//   console.log(b);
//   console.log(a + b);
// }
// sum(1, 4);
// sum(16);

// function getName(name) {
//   console.log("до return");
//   return name;
//   console.log("После return");
// }
// const userName = getName("Ivan");
// console.log(userName);

// function getName(name) {
//   return;
// }
// const userName = getName("Ivan");
// console.log(userName);

// let name = "Alex";
// function getName(userName) {
//   return userName;
// }
// const nameUserOne = getName(name);
// console.log(nameUserOne);

// name = "Ivan";

// const nameUserTwo = getName(name);
// console.log(nameUserTwo);

// let name = "alex";
// console.log(name, "!1");
// function sayHi(userName) {
//   userName = "Petr";
//   console.log(userName, "function");
// }
// sayHi(name);
// console.log(name, "!2");

// let a = 0;
// let b = 0;
// function sum() {
//   a += 1;
//   b += 1;
//   console.log(a + b);
// }
// sum();
// sum();
// sum();
// sum();

// function sum() {
//   const a = 0;
//   const b = 1;
//   console.log(a + b);
// }

// sum();
// sum();
// sum();
// sum();

// let userName = "Alex";
// function sayHi(name) {
//   if (name) {
//     console.log(`Привет, ${name}`);
//   } else {
//     console.log("Привет, гость");
//   }
// }
// sayHi(userName);
// sayHi();

// function
// function extent(a, b = 1) {
//   k = a ** b;
//   console.log(k);
// }
// extent(2, 10);

// function average(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.lenght; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.lenght;
// }
// average([1, 2, 3]);

// const sayName = function (name) {
//   return name;
// };
// const copy = sayName;
// console.log(sayName("Alex"));

// console.log(copy("Ivan"));

// const getName = function () {
//   console.log("Alex");
// };
// const getUserInfo = function (callBack) {
//   console.log("USER INFO");
//   callBack();
// };
// getUserInfo(getName);

// test();
// function test() {
//   console.log("test");
// }
// test2();
// const test2 = function () {
//   console.log("test2");
// };

// const myFirstArrowFunc = () => console.log("!!");
// myFirstArrowFunc();

// const test1 = (name) => {
//   //тело функции
//   return name;
// };

// test1("Alex");

// const getLog = () => console.log("LOG");
// getLog();
//FD
// function exmple1(param) {
//   return param;
// }
// exmple1(1);
// //FE
// const example2 = function (param) {
//   return param;
// };
// example2(2);
// //AF
// const example3 = (param) => {
//   //big body
//   return param;
// };
// example3(3);
// const example3 = (param) => param;
// example3(3);

// const getString = (str, n) => {
//   for (let i = 0; i < n; i++) {
//     console.log(str);
//   }
// };
// getString("Привет", 6);

// let str = "уеыаояиюёэ";
// const getLet = (a) => {
//   for (let i = 0; i < str.lenght; i++) {
//     console.log(str[i]);
//     if (a === str[i]) {
//       console.log("True");
//     } else {
//       console.log("False");
//     }
//   }
// };
// getLet("а");

//ЗАДАЧА 2 ВАРИАНТ ЧЕРЕЗ SWITCH
// const getLet = (a) => {
//   switch (a) {
//     case "ё":
//     case "у":
//     case "е":
//     case "ы":
//     case "а":
//     case "о":
//     case "я":
//     case "и":
//     case "ю":
//     case "э":
//       console.log("True");
//       break;
//     default:
//       console.log("False");
//   }
// };
// getLet("п");

//ТРЕТЬЯ ЗАДАЧА

// ТУТ БУДЕТ РЕШЕНИЕ СРАВНИВАНИЯ С КОНЦОВ

// let getPalin = (str) => {
//   let len = str.lenght;
//   for (let i = 0; i < len; i += 1) {
//     if (str[i] === str[len - i]) {
//       continue;
//       //console.log("true");
//     } else {
//       console.log("False");
//     }
//   }
// };
// getPalin("ШАЛАШ");

// let getPalin = (str) => {
//   let len = str.lenght;
//   for (let i = 0; i <= len/2; i += 1) {
//     if (str[i] === str[len - i]) {
//       console.log("true");
//     } else {
//       console.log("False");
//     }
//   }
// };
// getPalin("ШАЛАШ");

//
// const isPalindrom = (str) => {
//   let newStr = "";
//   for (let i = 0; i < str.length; i += 1) {
//     newStr += str[str.length-i-1];
//   }
//   if (newStr===str){
//       return  true
//   }else{
//           return false
//         }
//       }
// };
// console.log(isPalindrom('asddf'));
