// const str = "String random";
// const subStr = "random";
// String.prototype.endsWith = (str, substr) => {
//   const findStr = str.match(/(\S+)$/g);
//   if (substr === findStr) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(String.prototype.endsWith(str, subStr));

// var str = "Астрономия — Наука о небесных телах";
// function getSubstr(str, char, pos = 0) {
//   if (pos === "до") {
//     return str.slice(0, char);
//   } else if (pos === "после") {
//     return str.slice(char);
//   } else {
//     return "ERROR";
//   }
// }
// console.log(getSubstr(str, 10, "до"));

// const arr1 = new Array(4, 5, 66, 8);
// console.log(arr1.length);

// const arr2 = new Array(4);
// console.log(arr2);

// const arr3 = [1, 2, 3, 4, 5];
// console.log(arr3);
// arr3[0] = 10;
// console.log(arr3);

// const data = [
//   {
//     name: "Alex",
//     age: "18",
//   },
//   {
//     name: "Ivan",
//     age: "20",
//   },
// ];

// console.log(data[0].age);

// const arr = [];
// console.log(arr);
// arr[0] = "0";
// console.log(arr);
// arr[10] = "10";
// console.log(arr[4]);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr);
// arr.length = 2;
// console.log(arr);

// const arr = [];
// arr.push(1);
// arr.push(10);
// console.log(arr);

// const count = (arr, arrSymbol) => {
//   let result;
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === arrSymbol) {
//       result = arr[i];
//     }
//   }
//   return result;
// };
// console.log(count([1, 2, 3, 4], 3));
// console.log([1, 2, 3, 4].find((el) => el === 3));

// const data = [
//   { title: "first", writer: "Alex" },
//   { title: "Second", writer: "Ivan" },
//   { title: "Third", writer: "Alex" },
//   { title: "Four", writer: "Max" },
//   { title: "five", writer: "Alex" },
//   { title: "Six", writer: "Ivan" },
// ];
// console.log(data);
// const filterData = data.filter((el) => el.writer === "Alex");
// console.log(filterData);

// const newData = data.map((el) => el.title);
// console.log(newData);
// const testForEach = data.forEach((el) => {
//   el.title = "test";
// });
// console.log(data);

// const data = [
//   1, 45, 44,
//   //   { value: 2, month: "январь" },
//   //   { value: 3, month: "февраль" },
//   //   { value: 5, month: "март" },
// ];
// const valueSum = data.reduce((accum, curValue) => accum - curValue, 0);
// console.log(valueSum);

// const arr = [1, 2, -5, -9, 10, 16, -20];
// const newArray = arr.reduce((accum, curValue) => {
//   if (curValue >= 0 && curValue % 2 === 0) return accum + curValue;
// });
// console.log(newArray);

// const newArr = arr
//   .filter((e) => e > 0 && e % 2 === 0)
//   .reduce((accum, curValue) => accum + curValue);
// console.log(newArr);

// const posSum = (arr) =>
//   arr
//     .filter((el) => el > 0 && el % 2 === 0)
//     .reduce((acum, value) => acum + value);
// console.log(posSum([1, 2, 3, -7, -10, 8]));

// const arr = [1, 2, 3, 4, 6, 1, 4, 2, 9, 7, 8, 2, 10];
// // const uniqArr = (arr) => arr.filter((e) => e !== arr[e]);
// // console.log(uniqArr(arr));
// const uniqArr = (arr) => {
//   const result = [];
//   //   for (let i = 0; i < arr.length; i += 1) {
//   //     if (!result.includes(arr[i])) {
//   //       result.push(arr[i]);
//   //     }
//   //   }
//   arr.forEach((el) => {
//     if (!result.includes(el)) {
//       result.push(el);
//     }
//     return result;
//   });
// };
// console.log(uniqArr(arr));

// let arr_2 = arr.filter((item, index) => {
//     return arr.indexOf(item) === index;
//   });
//   console.log(arr_2);

//   const arr = [1, 1, 1, 1, 1, 6, 5, 4, 6, 4, 8, 7, 1, 2, 4, 9, 11];
// let uniqNumber = (arr) =>
//   arr.filter((item, index) => {
//     return arr.indexOf(item) === index;
//   });
// console.log(uniqNumber(arr));

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4, 5];
// // const isArr = (array1, array2) => array1.toString() === array2.toString();

// const isEqualArr = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   return !arr1.map((el, i) => el === arr2[i]).includes(false);
// };

// // console.log(isArr(arr1, arr2));
// console.log(isEqualArr(arr1, arr2));
