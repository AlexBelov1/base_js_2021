// let num1 = 1;
// let num2 = num1;

// console.log(num1, num2);

// num1 = 2;

// console.log(num1, num2);

// const obj1 = {
//   name: "Alex",
// };
// const obj2 = obj1;
// console.log(obj1, obj2);

// obj1.name = "Ivan";
// console.log(obj1, obj2);

// obj2.name = "Alex";
// console.log(obj1, obj2);

// const obj = {};
// obj.true = 1;
// console.log(obj);

// const obj = {};
// console.log(obj);
// obj.age = "12";
// obj["name"] = "Ivan";
// console.log(obj);
// console.log(obj.age, obj["name"]);

// obj.age = "18";
// obj["name"] = "Max";

// console.log(obj);
// console.log(obj.age);

// delete obj.age;
// console.log(obj);
// console.log(obj.age);

// const obj = {
//   sayHi: function (name) {
//     console.log("Hi USER", name);
//   },
// };

// obj.sayHi("Alex");

// const myFavoriteFilm = {
//   nameFilm: "Black Panter",
//   dateRelease: "2018",
//   nameDirector: "Райан Куглер",
//   countryOfIssue: "USA",
// };
// myFavoriteFilm["income"] = "$ 200 million";

// myFavoriteFilm.getName = function () {
//   console.log(myFavoriteFilm.nameFilm);
// };
// delete myFavoriteFilm.dateRelease;
// console.log(myFavoriteFilm);
// myFavoriteFilm.getName();
// console.log(myFavoriteFilm.getName);

// const str = "string";
// console.log(str);
// str[0] = "S";
// console.log(str);

//ДОДЕЛАТЬ!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const randomNum = (start, end) => {
//   arr = [];
//   for (start; start <= end; start++) {
//     arr.push(start);
//   }
//   return +Math.random().toFixed(1) * arr.length;
// };
// console.log(randomNum(1, 15));

// const getNumberRandom = (min, max) => {
//   const rand = Math.random() * (max - min);
//   const result = min + rand;
//   return Math.round(result);
// };
// console.log(getNumberRandom(1, 1110));

// const getRegistr = (str, n) => {
//   if (n > str.length) {
//     console.log("Неверные параметры");
//     return;
//   }
//   if (str[n] === str[n].toUpperCase()) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// };
// getRegistr("Ivan LEXA", 3);

// const customReplaceAll = (str, find, replaceStr) => {
//   //   while (str.includes(find)) {
//   //     str = str.replace(find, replaceStr);
//   //   }
//   //   return str;
//   for (let i = 0; i < str.length; i += 1) {
//     str = str.replace(find, replaceStr);
//   }
//   if (str.includes(find)) {
//     customReplaceAll(str, find, replaceStr);
//   } else {
//     return str;
//   }
};
// console.log(customReplaceAll("hi is  you, hi its me", "hi", "Hello"));
