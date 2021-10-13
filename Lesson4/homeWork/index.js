// 1)

// let a = -3;
// if (a == 0) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// 1.2)

// let a = 0;
// if (a > 0) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// 1.3)

// let a = 0;
// if (a < 0) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// 1.4)

// let a = 0;
// if (a >= 0) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// 1.5)

// let a = 0;
// if (a <= 0) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// 1.6)

// let a = 0;
// if (a != 0) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// 1.7)

// let a = "тест";
// if (a === "test") {
//   console.log("True");
// } else {
//   console.log("False");
// }

// 1.8)

// let a = "1";
// if (a === 1) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// 2)
// let test = "";
// if (test) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// let test = "1";
// test ? console.log("True") : console.log("False");

// 2.2)
// let test = "";
// if (!test) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// let test = 2;
// !test ? console.log("True") : console.log("False");

// 3)

// let a = -3;
// if (a > 0 && a < 5) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// 3.2)

// let a = -3;
// if (a == 0 || a == 2) {
//   console.log((a += 7));
// } else {
//   console.log((a /= 10));
// }

// 3.3)

// let a = 3;
// let b = 5;
// if (a <= 1 && b >= 3) {
//   console.log(a + b);
// } else {
//   console.log(a - b);
// }

// 3.4)

// let a = 1;
// let b = 14;
// if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// 4)

// let result;
// let num = 2;
// switch (num) {
//   case 1:
//     result = "Зима";
//     break;
//   case 2:
//     result = "Весна";
//     break;
//   case 3:
//     result = "Лето";
//     break;
//   case 4:
//     result = "Осень";
//     break;
// }
// console.log(result);

// 5)

// let day = 31;
// if (day <= 10) {
//   console.log(`День ${day} входит в первую декаду месяца`);
// } else {
//   day > 10 && day <= 20
//     ? console.log(`День ${day} входит в вторую декаду месяца`)
//     : console.log(`День ${day} входит в третью декаду месяца`);
// }
//Задача не учитывает числа в диапазоне до 1 и больше 31, реализовать это можно с помощью дополнительных сравнений и вывод ошибки, если значение day принимает число, которое не может быть днем месяца

// 5.2)

// let month = 13;
// switch (month) {
//   case 3:
//   case 4:
//   case 5:
//     console.log(`${month} месяц это весна`);
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log(`${month} месяц это лето`);
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log(`${month} месяц это осень`);
//     break;
//   case 12:
//   case 1:
//   case 2:
//     console.log(`${month} месяц это зима`);
//     break;
//   default:
//     console.log("Нет месяца с таким номером");
// }

// 5.3)

// let str = "abcde";
// if (str[0] == "a") {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// 5.4)

// let str = "12345";
// if (str[0] == 1 || str[0] == 2 || str[0] == 3) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// 5.5)

// let str = "555";
// let sum = +str[0] + +str[1] + +str[2];
// console.log(sum);

// 5.6)

// let str = "123006";
// let sumLeft = +str[0] + +str[1] + +str[2];
// let sumRight = +str[3] + +str[4] + +str[5];
// if (sumLeft === sumRight) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// 6)

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   i += 1;
// }

// 6.2)

// for (let i = 11; i <= 33; i++) {
//   console.log(i);
// }

// let i = 11;
// while (i <= 33) {
//   console.log(i);
//   i += 1;
// }

// 6.3)

// for (let i = 0; i <= 100; i += 2) {
//   console.log(i);
// }
// let i = 0;
// while (i <= 100) {
//   console.log(i);
//   i += 2;
// }

// 6.4)

// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// let i = 0;
// let sum = 0;
// while (i <= 100) {
//   sum += i;
//   i += 1;
// }
// console.log(sum);

// 7)

// let array = [1, 2, 3, 4, 5];
// for (i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// 7.1)

// let result = 0;
// let array = [1, 2, 3, 4, 5];
// for (i = 0; i < array.length; i++) {
//   result = result + array[i];
// }
// console.log(result);

// 8)

// let array = [2, 5, 9, 15, 0, 4];
// for (i = 0; i < array.length; i++) {
//   if (array[i] > 3 && array[i] < 10) {
//     console.log(array[i]);
//   }
// }

// 8.2)
// let sum = 0;
// let array = [2, 5, 9, 15, 0, 4, -2, -5, 1];
// for (i = 0; i < array.length; i++) {
//   if (array[i] > 0) {
//     sum += array[i];
//   }
// }
// console.log(sum);

// 8.3)

// let array = [1, 2, 5, 9, 4, 13, 4, 10];
// for (i = 0; i < array.length; i++) {
//   if (array[i] == 4) {
//     console.log("Есть");
//     break;
//   }
// }

// 8.4)

// let array = [10, 20, 30, 50, 235, 3000];
// for (i = 0; i < array.length; i++) {
//   let a = array[i].toString()[0];
//   if (a == "1" || a == "2" || a == "5") {
//     console.log(array[i]);
//   }
// }

// 8.5)

// let str = "-";
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (i = 0; i < array.length; i++) {
//   str = str + `${array[i]}-`;
// }
// console.log(str);

// 8.6)

// let array = ["Monday", "Tuesday ", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// for ( i=0; i<array.length;i++){
//     if (array[i]=="Saturday" || array[i]=="Sunday"){
//         document.write(array[i].bold(), " ");

//     }else{
//         document.write(array[i], " ");
//     }
// }
// Вывод в консоль выходных будет иметь имя в теге <b></b>, поэтому для наглядности ипользуем document.write

// 8.7)

// day = 3;
// let array = ["Monday", "Tuesday ", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// for ( i=0; i<array.length;i++){
//     if (i == (day - 1)){
//         document.write(array[i].italics(), " ");

//     }else{
//         document.write(array[i], " ");
//     }
// }
// Вывод в консоль выходных будет иметь имя в теге <i></i>, поэтому для наглядности ипользуем document.write

// 8.8)

// let n = 1000;
// let num = 0;
// while (n>=50){
//     n /=2;
//     num +=1;
// }
// console.log(`Число после деления ${n} на ${num} итерацию`);
