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

// class Parent {
//   constructor(name) {
//     this.name = name;
//   }
//   sayName() {
//     return `Привет, мое имя ${this.name}`;
//   }
// }

// const firstParent = new Parent("Max");
// // console.log(firstParent);
// // console.log(firstParent.sayName());
// class Child extends Parent {
//   constructor(name, lastName) {
//     super(name);
//     this.lastName = lastName;
//   }
//   sayName() {
//     console.log("Это внутренний метод");
//   }
//   sayFullName() {
//     const nameString = `${super.sayName()} ${this.lastName}`;
//     return nameString;
//   }
//   get lastName() {
//     return this._lastName;
//   }
//   set lastName(newValue) {
//     this._lastName = newValue;
//   }
//   getLastName() {
//     return this.lastName;
//   }
//   setLastName(newValue) {
//     this.lastName = newValue;
//   }
// }

// const firstChild = new Child("Ivan", "Petrov");
// console.log(firstChild);
// firstChild.setLastName("Smirnov");
// firstChild.lastName("Smirnov");
// console.log(firstChild.getLastName());
// console.log(firstChild.lastName);

class People {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return `Полное имя ${this.name} ${this.surname}`;
  }
}
const firstPeople = new People("Ivan", "Ivanovich");
console.log(firstPeople.getFullName());

class Worker extends People {
  constructor(name, surname, rate, day) {
    super(name, surname);
    this.rate = rate;
    this.day = day;
  }
  getSalary() {
    return `${this.getFullName()}, Зарплата за ${this.day} дней составляет ${
      this.day * this.rate
    }`;
  }
}
const one = new Worker("Alex", "Belov", 1000, 100);
console.log(one.getSalary());

const secondWorker = new Worker("Petr", "Petrovich", 2900, 20);
console.log(secondWorker.getSalary());
