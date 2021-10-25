// 1)
// const exp = (x) => {
//   return x * x;
// };
// console.log(exp(12));

// 2)

// const sum = (a, b) => {
//   return a + b;
// };
// console.log(sum(10, 10));

// 3)

// const res = (a, b, c = 1) => {
//   return (a - b) / c;
// };
// console.log(res(10, 12, 2));

// 4)

// const dayWeek = (n) =>{
//     switch(n){
//         case 1:
//         console.log(`${n} день недели это понедельник`);
//         break;
//         case 2:
//         console.log(`${n} день недели это вторник`);
//         break;
//         case 3:
//         console.log(`${n} день недели это среда`);
//         break;
//         case 4:
//         console.log(`${n} день недели это четверг`);
//         break;
//         case 5:
//         console.log(`${n} день недели это пятница`);
//         break;
//         case 6:
//         console.log(`${n} день недели это суббота`);
//         break;
//         case 7:
//         console.log(`${n} день недели это воскресенье`);
//         break;
//         default:
//             console.log(`Нет ${n} дня недели`);
//     }
// }
// dayWeek(8);

// 5)
// const equality = (a, b) => {
//   if (a === b) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(equality(1, 3));

// 6)

// const sum = (a, b) => {
//   if (a + b > 10) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(sum(0, 10));

// 7)

// const positive = (a) => {
//   if (a < 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(positive(-1));

// 8)

// const isNumberInRange = (a) => {
//   if (a > 0 && a < 10) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isNumberInRange(8));

// 9)
// const isNumberInRange = (a) => {
//   if (a > 0 && a < 10) {
//     return true;
//   } else return false;
// };

// let arr = [1, 5, 10, 23, 15, 6];
// let b = [];
// for (let i = 0; i < arr.length; i++) {
//   if (isNumberInRange(arr[i])) {
//     b.push(arr[i]);
//   }
// }
// console.log(b);

// 10)

// const getDigitsSum = (a) => {
//   a = a.toString();
//   let sum = 0;
//   for (let i = 0; i < a.length; i++) {
//     sum += +a[i];
//   }
//   return sum;
// };
// console.log(getDigitsSum(12345));

// 11)
// const getDigitsSum = (a) => {
//   a = a.toString();
//   let sum = 0;
//   for (let i = 0; i < a.length; i++) {
//     sum += +a[i];
//   }
//   return sum;
// };

// for (let n = 1; n <= 2020; n++) {
//   if (getDigitsSum(n) === 13) {
//     console.log(n);
//   }
// }

// 12)

// const isEven = (a) => {
//   if (a % 2 == 0) {
//     return true;
//   } else return false;
// };
// console.log(isEven(5));

// 13)

// const isEven = (a) => {
//   if (a % 2 == 0) {
//     return true;
//   } else return false;
// };

// let arr = [1, 5, 10, 23, 15, 6];
// let b = [];
// for (let i = 0; i < arr.length; i++) {
//   if (isEven(arr[i])) {
//     b.push(arr[i]);
//   }
// }
// console.log(b);

// 14)
// let array = [];
// const getDevisors = (a) => {
//   for (let i = 0; i <= a; i++) {
//     if (a % i == 0) {
//       array.push(i);
//     }
//   }
//   console.log(array);
// };
// getDevisors(15);
// 15)
// const PosNum = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       k = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = k;
//     }
//   }
//   console.log(arr);
// };
// PosNum([2, 1, 5, 3, 10, 8]);

// 16)

// const getDigitsSum = (a) => {
//   a = a.toString();
//   let sum = 0;
//   for (let i = 0; i < a.length; i++) {
//     sum += +a[i];
//   }
//   return sum;
// };
// let x = 123456799923;
// for (let i = 0; x > 9; i++) {
//   if (getDigitsSum(x) > 9) {
//     x = getDigitsSum(x);
//   } else {
//     break;
//   }
// }
// console.log(getDigitsSum(x));
