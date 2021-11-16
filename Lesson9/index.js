// const people = {
//   getName: function () {
//     return this.name;
//   },
// };
// const user = {
//   name: "Alex",
//   __proto__: people,
// };
// const admin = {
//   __proto__: user,
// };
// // console.log(people.getName());
// console.log(admin.getName());

// const arr = [];
// console.log(arr.__proto__);
// function CreateUser(name, age) {
//   this.userName = name;
//   this.userAge = age;
//   this.sayHi = function () {
//     return `Hello, my name is ${this.userName}`;
//   };
// }
// console.log(CreateUser.prototype);
//
// const userOne = new CreateUser("Alex", 26);
// const userTWo = new CreateUser("Max", 30);
// console.log(userOne);
// console.log(userTWo);
// console.log(userOne.sayHi());

// function CreateCard(from, to) {
//   this.from = from;
//   this.to = to;
// }
// CreateCard.prototype.show = function () {
//   return `Открытка от ${this.from} для ${this.to}`;
// };
// const oneCard = new CreateCard("Alex", "Kate");
// console.log(oneCard);
// console.log(oneCard.show());
// CreateCard.prototype.setFrom = function (newFrom) {
//   this.from = newFrom;
// };
// oneCard.setFrom("Max");
// console.log(oneCard);
