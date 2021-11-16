// console.log(global);

// var name = "alex";
// console.log(global);

// function example() {
//   console.log(this);
// }
// // example();
// // console.log(globalThis);

// const user = {
//   name: "Alex",
//   age: "25",
//   getName: function () {
//     console.log(this.name);
//   },
// };

// user.getName();
// function getName() {
//   console.log(this.name);
// }
// function setName(newName) {
//   this.name = newName;
//   console.log(this.name);
// }
// const user = {
//   name: "Alex",
//   age: "25",
//   getUserName: getName,
//   setUserName: setName,
// };
// const admin = {
//   name: "Max",
//   age: "45",
//   getAdminName: getName,
//   setAdminName: setName,
// };
// console.log(user);
// user.getUserName();
// admin.getAdminName();
// user.setUserName("Ira");
// console.log(user);

// function example() {
//   console.log(this);
// }
// const testObject = {
//   testMethod: example,
// };
// testObject.testMethod();

// const startFight = () => {
//   return this.strange * this.agility;
// };
// //из за стрелочной функции будет вычислительная ошибка
// const hero = {
//   name: "Jon",
//   strange: 20,
//   agility: 10,
//   health: 100,
//   fight: startFight,
//   sayName: function () {
//     return this.name;
//   },
// };
// const dracula = {
//   name: "Vlad",
//   strange: 50,
//   agility: 7,
//   health: 1000,
//   fight: startFight,
// };
// console.log(hero.fight(), dracula.fight());
// if (hero.fight() > dracula.fight()) {
//   console.log("Герой победил!!! УРА!");
// } else {
//   console.log("Провал, вы погибли");
// }

// const city = {
//   nameCity: "Nizhnyi Novgorod",
//   population: 1200000,
//   getNameCity: function () {
//     return this.nameCity;
//   },
//   getPopulation: function () {
//     return this.population;
//   },
//   setSomeValue: function (key, Value) {
//     this[key] = Value;
//   },
// };
// console.log(city);
// city.setSomeValue("nameCity", "Moscow");
// city.setSomeValue("population", 15000000);
// console.log(city);

// var arr = [0, 1, 2, 3, 4, 5, 6, 7];
// function sumSeven(numbers) {
//   return numbers
//     .map((el) => `(${el}:${7 - el})`)
//     .filter((el, i, arr) => i < arr.length / 2);
// }
// console.log(sumSeven(arr));

// const sayFullName = function (firstName, lastName) {
//   return `${this.phrase} ${firstName} ${lastName}`;
// };
// // console.log(sayFullName("Alex", "Belov"));
// // console.log(sayFullName.call({ phrase: "Hello!!!" }, "Ivan", "Smirnov"));
// let boundFullName = sayFullName.bind({ phrase: "Bye!" }, "Max", "Petrov");
// let bound2 = sayFullName.bind({ phrase: "Hello" }, "Kate");

// console.log(boundFullName());
// console.log(bound2("Petrova"));

// const city = {
//   nameCity: "Nizhnyi Novgorod",
//   population: 1200000,
//   getNameCity: function () {
//     return this.nameCity;
//   },
//   getPopulation: function () {
//     return this.population;
//   },
//   setSomeValue: function (key, Value) {
//     this[key] = Value;
//   },
// };
// const cityTwo = {
//   nameCity: "Moscow",
//   population: 15000000,
// };
// // console.log(city.getNameCity());
// // console.log(city.getNameCity.call(cityTwo));
// console.log(cityTwo);
// // const bound = city.setSomeValue.bind(cityTwo, "nameCity", "Orel");
// // bound();
// // console.log(cityTwo);
// const bound = city.setSomeValue.bind(cityTwo);
// bound("nameCity", "orel");
// console.log(cityTwo);
// function test(b) {
//   const a = 0;
//   console.log(b);
// }
// // test();
// const bound = test.bind({ a: 10 }, 8);
// bound();

// let a = 0;
// console.log(a);
// const test = () => {
//   a = 10;
// };
// test();
// console.log(a);
// function getFullName() {
//   const firstNAme = "Alex";
//   function getSecondName(secondName) {
//     return `${firstNAme} ${secondName}`;
//   }
//   return getSecondName;
// }

// // console.log(getFullName());
// const clouser = getFullName();
// console.log(clouser("Smirnov"));

// const getArea = (a) => {
//   return (b) => a * b;
// };

// const areaWithTen = getArea(10);
// console.log(areaWithTen(5));
// console.log(areaWithTen(10));
// const areWithFour = getArea(4);
// console.log(areWithFour(3));
// console.log(areWithFour(21));

// const getCapasity = (a) => {
//   return (b) => a * b * 10;
// };
// const capacityWithTen = getCapasity(10);
// console.log(capacityWithTen(5));

// const getVol = (height) => (width, length) => height * width * length;
// const getAll = getVol(10);
// console.log(getAll(3, 5));

// function getCapasity(a) {
//   return function (b) {
//     return function (c) {
//       return a * b * c;
//     };
//   };
// }
// console.log(getCapasity(10)(13)(3));
