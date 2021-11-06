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

var arr = [0, 1, 2, 3, 4, 5, 6, 7];
function sumSeven(numbers) {
  return numbers
    .map((el) => `(${el}:${7 - el})`)
    .filter((el, i, arr) => i < arr.length / 2);
}
console.log(sumSeven(arr));
