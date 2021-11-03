// 1)

// var vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];
// let vegetableLength = vegetables.map((l) => l.length);
// console.log(vegetableLength); // 7,4,7,8
// 2)

// var numbers = [2, 3, 5, 7, 11, 13, 17];
// var currentSums = () => {
//   let newArr = [];
//   let sum = numbers.reduce((acum, current) => {
//     newArr.push(acum);
//     return acum + current;
//   });
//   newArr.push(sum);
//   return newArr;
// };
// console.log(currentSums(numbers)); // [2, 2+3, 2+3+5, 2+3+5+7, 2+3+5+7+11, 2+3+5+7+11+13, 2+3+5+7+11+13+17] = [ 2,5,10,17,28,41,58]

// 3)

// var arr = [0, 1, 2, 3, 4, 5, 6, 7];
// function sumSeven(numbers) {
//   let el = {};
//   let newArr = [];
//   for (let i = 0; i < arr.length / 2; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 7) {
//         el["key"] = "(" + arr[i] + ":" + arr[j] + ")";
//         newArr.push(el["key"]);
//       }
//     }
//   }
//   return newArr;
// }
// console.log(sumSeven(arr));
// 4)

// var str = "Каждый охотник желает знать, где сидит фазан.";
// let foo = () =>
//   str
//     .trim()
//     .split(" ")
//     .map((e) => (e = e[0]));
// console.log(foo(str));

// 5)

// var str = "JavaScript";
// let foo = () => {
//   let newArr = [];
//   for (let i = 0; i < str.length; i++) {
//     if (i === 0) {
//       newArr.push(str[i] + str[i + 1]);
//     } else if (i === str.length - 1) {
//       newArr.push(str[i - 1] + str[i]);
//     } else {
//       newArr.push(str[i - 1] + str[i] + str[i + 1]);
//     }
//   }
//   return newArr;
// };
// console.log(foo(str)); // [Ja,Jav,ava,vaS,aSc,Scr,cri,rip,ipt,pt]

// 6)

// var numerics = [5, 7, 2, 9, 3, 1, 8];
// let foo = (numerics) => {
//   return numerics.sort((a, b) => b - a);
// };
// console.log(foo(numerics)); // [9,8,7,5,3,2,1]

// 7)

// var a = [1, 2, 3];
// var b = [4, 5, 6];
// var c = [7, 8, 9];
// function getArr(a, b, c) {
//   var re = /,/gi;
//   let newArr = [];
//   let str = a.concat(b).concat(c).reverse().toString().replace(re, " ");
//   console.log(str);
//   newArr[0] = str;
//   return newArr;
// }
// console.log(getArr(a, b, c));

// 8)

// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = arr.reduce((a, b) => a + b.reduce((b, c) => b + c, 0), 0);
// console.log(sum);

// 9)

// let arr = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];
// // let sum = arr.reduce((acum,curent) => acum + curent.reduce((acum2,curent2) => acum2 +curent2.reduce((acum3,curent3) => acum3+curent3,0),0),0);
// console.log(sum);
// let sum = arr
//   .reduce((a, b) => a.concat(b))
//   .reduce((b, c) => b.concat(c))
//   .reduce((acum, curent) => acum + curent);
// console.log(sum);
//нашел функцию разворачивания массива, получилось чуть короче, такой же функцией можно сделать задачу 8
// 10)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = () => {
//   let resArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     resArr.push(arr[i]);
//   }
//   return resArr;
// };
// console.log(res(arr));
// ------------------------------------------
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = () => {
//   let resArr = arr.sort((a, b) => b - a);
//   return resArr;
// };
// console.log(res(arr));

// 11)

// let arr = [1, 2, 3, 2, 7, 8];
// let num = 1;
// let sumArr = arr.reduce((sum, curent) => {
//   if (sum > 10) {
//     console.log(num);
//     return;
//   } else {
//     num += 1;
//     return sum + curent;
//   }
// });
// 12)

// let arrayFill = (el, count) => {
//   let newArr = [];
//   for (let i = 0; i < count; i++) {
//     newArr.push(el);
//   }
//   return newArr;
// };
// console.log(arrayFill(12, 10));
// --------------------------------------------------
// let arrayFill = (el, count) => {
//   return Array.from({ length: count }, () => el);
// };
// console.log(arrayFill(12, 10)); // нагуглил интересную функцию from, которая создает массив
