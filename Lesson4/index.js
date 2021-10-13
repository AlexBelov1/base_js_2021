// if (true) {
//   console.log("TRUE");
// }
// if (false) {
//   console.log("FALSE");
// }
// console.log("START");

// const value = -5;
// if (value > 0) {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

// console.log("FINISH");

// console.log("Start");
// let value;
// if (value === 0) {
//   console.log(0, " = value");
// } else if (value > 1) {
//   console.log(value, " > 1");
// } else if (value < -1) {
//   console.log(value, " < -1");
// } else {
//   console.log(value);
// }

// console.log("FINISH");

// const age = 20;
// const result = age >= 18 ? "Доступ разрешен" : "Доступ запрещен";

// console.log(result);

// switch ("Ivan") {
//   case "Ivan":
//     console.log("Ivan");
//     break;
//   case "Alex":
//     console.log("Alex");
//     break;
//   case "Max":
//     console.log("Max");
//     break;
//   default:
//     console.log("Имя нет в списке");
// }
// console.log("FINISH");
// 1 задание
// console.log("Start");
// const oneLenght = 10;
// const twoLenght = 5;
// const threeLenght = 15;

// if (oneLenght > twoLenght) {
//   oneLenght > threeLenght
//     ? console.log("Самый большой отрезок =", oneLenght)
//     : console.log("Самый большой отрезок = ", threeLenght);
// } else {
//   twoLenght > threeLenght
//     ? console.log("Самый большой отрезок = ", twoLenght)
//     : console.log("Самый большой отрезок = ", threeLenght);
// }
// console.log("FINISH");

// const a = 1;
// const b = 2;
// const c = 3;

// if (a > b) {
//   a > c ? console.log(a) : console.log(c);
// } else {
//   b > c ? console.log(b) : console.log(c);
// }

// 2 задание
// console.log("Start");

// const tempAir = -40;

// console.log("FINISH") НЕ ГОТОВО!!!

// 3 задание

// console.log("Старт");
// const role = "manager";
// switch (role) {
//   case "admin":
//     console.log("Это admin");
//     break;
//   case "manager":
//     console.log("Это manager");
//     break;
//   case "user":
//     console.log("Это user");
//     break;
//   default:
//     console.log("no infox`");
// }
// console.log("FINISH");

// const a = 100;
// const b = 1;
// const result1 = a || b;
// console.log(result1);

// const a = 10;
// const b = 1;

// const result = a && b;
// console.log(result);

// const a = 1;
// const b = 2;
// const c = 3;
// if (a > b && a > c) {
//   console.log(a);
// } else if (b > a && b > c) {
//   console.log(b);
// } else {
//   console.log(c);
// }

// const name = "";
// if (name) {
//   console.log("Имя есть");
// } else {
//   console.log("Имя нет");
// }

// console.log("start");
// while (true) {
//   console.log("loop");
// }
// console.log("end");

// let i = 0;
// while (i <10) {
//   console.log(i);
//   i += 1;
//   // i=i+1;
//   // i++;
// }
// console.log("end");

// do {
//   console.log("WORK");
// } while (i);
// console.log("end");

// console.log("Start");
// let i = 0;
// while (true) {
//   console.log("loop");
//   i += 1;
//   if (i > 10) break;
// }

// ЗАДАЧИ ВАЙЛ И ФОР

// let n = 10;
// for (let i =1; i <= n; i++) {
//   console.log("Строка номер ", i);
// }

// let n = 10;
// while (true) {
//   console.log("Строка номер", n);
//   n = n - 1;
//   if (n < 1) break;
// }

//Задача 2

let day = 0;
let n = 10000;
let countCar = 2 * n;
let m = 1000;
while (countCar > m) {
  countCar = countCar / 2;
  day += 1;
}
console.log(day);

// Года 
let year366 = 0;
for (let i=1800; i<=2020;i++) {
    if ((i % 4)=0){
        year366 +=1;
    }

}


// let M = 100;
// let N = 23;
// let days = 0;
// while (M>=N){
//     M/=2;
//     days +=1;
// }
// console.log(days);