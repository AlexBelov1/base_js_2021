//1)
// function foo(start, end) {
//   if (end > start) {
//     setTimeout(() => {
//       console.log(end);
//       foo(start, end - 1);
//     }, 1000);
//   } else {
//     console.log(`Таймер кончился, осталось ${start} секунд`);
//   }
// }
// foo(10, 15);
// 2)
// function f() {
//   alert(this); // ?
// }
// let user = {
//   g: f.bind(null),
// };
// user.g();
//выведет object Window, как я понял, это из за того, что в bind, мы передаем null, т.е. вывод alert найдет окружение null и выведет глобальный объект Window

// 3)
// function f() {
//   alert(this.name);
// }

// f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

// f();
// // alert выведет Васю, потому что нельзя поменять связь, можно только добавить новую
// 4)
// function sayHi() {
//     alert( this.name );
//   }
//   sayHi.test = 5;
//   let bound = sayHi.bind({
//     name: "Вася"
//   });
//   console.log( bound.test );
// //выведет undefined, потому что у bound нет свойства test
// 5)
// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: "Вася",
//   loginOk() {
//     alert(`${this.name} logged in`);
//   },
//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };

// 6)
// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();

//     else fail();
//   }

//   let user = {
//     name: 'John',

//     login(result) {
//       alert( this.name + (result ? ' logged in' : ' failed to log in') );
//     }
//   };

//   askPassword(user.login.bind(user,true), user.login.bind(user,false)); // в вызов функции мы передаем 2 параметра с указанием контекста выполнения и параметр функции login

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
// // к ошибке приводит неопределенность контекста, и при передаче контекста (bind) все начинает работать
// 8)
// var elem = {value: 'Привет'}
// function func(surname, name) {
//  alert(this.value + ', ' + surname + ' ' + name);
// }
//  func = func.bind(elem);// передаем функции окружение elem
// func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
// func('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'
// 9)
// const sum = (a, b, c) => a + b + c
// console.log(sum(1,2,3));
// function sum2(a){
//     return function(b){
//         return function (c){
//             return a+b+c;
//         }
//     }
// }
// console.log(sum2(1)(2)(3));
