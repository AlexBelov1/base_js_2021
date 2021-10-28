// 1)

// var str = 'Каждый охотник желает знать';
// function stringToarray(str) {
//     let arr = [];
//     let k =0;
//     let newStr = '';
//     for (let i = 0; i<=str.length;i++){
//         if (str[i] ===" " || i===str.length){
//             arr[k] = newStr;
//             k +=1;
//             newStr = '';
//         }else{
//             newStr +=str[i];
//         }
//     }return arr;
// };
// console.log(stringToarray(str));
// 2)

// var str = 'Каждый охотник желает знать';
// function delete_characters(str, length) {
// var newStr = '';
//     for (let i = 0;i<length;i++){
//         newStr += str[i];
//     }return newStr;
// };
// console.log(delete_characters(str,5));
// 3)

// var str = "HTML JavaScript PHP";
// function insert_dash(str) {
// var newStr = '';
// for (let i = 0; i<str.length; i++){
//     if (str[i] === " "){
//         newStr += "-";
//     }else{
//         newStr +=str[i];
//     }
// }return newStr.toUpperCase();
// }
// console.log(insert_dash(str));
// 4)

// var str = "string not starting with capital";
// function cursive_letter(str) {
// var newStr = '';
//     for (let i = 0; i<str.length; i++){
//         if (i === 0){
//             newStr += str.charAt(i).toUpperCase();
//         }else{
//             newStr +=str[i];
//         }
//     }return newStr;
// }
// console.log(cursive_letter(str));
// 5)

// var str = "каждый охотник желает знать";
// function capitalize(str) {
// var newStr = "";
//     newStr +=str[0].toUpperCase();
//     for (let i = 1; i<str.length; i++){
//             if (str[i] === " "){
//                 newStr += str[i];
//                 newStr += str[i+1].toUpperCase();
//                 i++;
//             }else{
//                 newStr +=str[i];
//             }
//         }return newStr;
// }
// console.log(capitalize(str));
// 6)
// var str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";
// function change_register(str) {
//   var newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//       newStr += str[i].toLowerCase();
//     } else {
//       newStr += str[i].toUpperCase();
//     }
//   }
//   return newStr;
// }
// console.log(change_register(str));
// console.log(change_register(str));
// 7)

// var str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";
// function remove_char(str) {
//     let newStr = "";
//     for (let i = 0;i<str.length;i++){
//         if (str[i].match(/[\w\s]/)){
//             newStr +=str[i];
//         }
//     }
//     return newStr;
// };
// console.log(remove_char(str));
// //Решил, что пробел тоже можно отнести к буквенно-цифровым поэтому добавил диапазон "\s"
// 8)
// let num = 12345;
// function zeros(num, len, sign) {
//   let numStr = num.toString();
//   let newStr = "";
//   for (let i = 0; i < len; i++) {
//     if (i < numStr.length) {
//       newStr += numStr[i];
//     } else if (i === numStr.length) {
//       newStr += sign;
//     } else {
//       newStr += "0";
//     }
//   }
//   return newStr;
// }
// console.log(zeros(num, 10, "+"));
// 9)

// function comparison(str1, str2) {
// let s1 = str1.toUpperCase();
// let s2 = str2.toUpperCase();
//   if (s1 > s2) {
//     console.log(`Строка ${str1} больше,чем строка ${str2}`);
//   } else if (s1 < s2) {
//     console.log(`Строка ${str2} больше,чем строка ${str1}`);
//   } else {
//     console.log("Строки равны");
//   }
// }
// comparison("Привет", "привет");

// 10)

// var str1 = "Привет мир";
// var str2 = 'ри';
// function insensitive_search(str1, str2) {
//    let newStr1 = str1.toUpperCase();
//    let newStr2 = str2.toUpperCase();
// if (newStr1.indexOf(newStr2) !=-1) {
//     console.log(`Подстрока "${str2}" найдена в строке "${str1}" на ${newStr1.indexOf(newStr2)} позиции`);
// }else{
//     console.log("Подстрока не найдена");
// }
// };
// insensitive_search(str1,str2);
// // Задачу решил только на наличие подстроки в строке, без учета количества таких подстрок в строке
// 11)

// str = "hEllo woRld";
// function initCap(str) {
//     newStr = '';
//     for (let i = 0; i<str.length;i++){
//         if (str[i] === " "){
//             newStr +=str[i+1].toUpperCase();
//             i++;
//         }else{
//             newStr += str[i].toLowerCase();
//         }
//     }
//    return newStr;
// };
// console.log(initCap(str));
// 12)

// var str = "КакУТебяДела"
// function initSnake(str) {
//    let newStr = '';
//    for (let i =0;i<str.length;i++){
//        if(str.charAt(i)===str.charAt(i).toUpperCase()){
//           if(i !=0){
//               newStr += "_";
//             }
//            newStr +=str[i].toLowerCase();
//        }else{
//            newStr += str[i];
//        }
//    }
//    return newStr;
// };
// console.log(initSnake(str));
// 13)

// function repeatStr(str, n) {
//   for (let i = 0; i < n; i++) {
//     console.log(str);
//   }
// }
// repeatStr("Привет", 6);
// 14)

// var pathname = "/home/user/dir/file.txt";
// function path(pathname) {
//     let newStr = '';
//     let k = 0;
//     for (let i = pathname.length;i>0;i--){
//         if (pathname[i] === "/"){
//             k = i;
//             break;
//         }
//     }
//     for (let i = k+1;i<pathname.length;i++){
//         newStr +=pathname[i];
//     }
//     return newStr;
// };
// console.log(path(pathname));
// 15)

// var str = "Каждый охотник желает знать";
// var str1 = "скрипт";
// var str2 = "знать";
// String.prototype.endsWith = function (substring) {
//   let lenSubstring = substring.length;
//   let newStr = "";
//   for (let i = str.length - lenSubstring; i < str.length; i++) {
//     newStr += str[i];
//   }
//   if (newStr === substring) {
//     console.log(`Строка "${str}" заканчивается подстрокой "${substring}`);
//   } else {
//     console.log(`Строка "${str}" не заканчивается подстрокой "${substring}"`);
//   }
// };
// str.endsWith(str2);
// 16)

// var str = "Астрономия — Наука о небесных телах";
// function getSubstr(str, char, pos=0) {
//   var newStr = "";
//   if (pos === 0) {
//     for (let i = 0; i < char; i++) {
//       newStr += str[i];
//     }
//   } else {
//     for (let i = char; i < str.length; i++) {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }
// console.log(getSubstr(str, 10, 0));
// 17)

// var str = "Привет, меня зовут Саша";
// function insert(str, substr, pos) {
//     let newStr = '';
//     for (let i = 0; i<str.length;i++){
//         if (i===pos){
//             newStr += substr+' ';
//             newStr+=str[i];
//         }else{
//             newStr+=str[i];
//         }
//     }return newStr;
// };
// console.log(insert(str,"ты кто", 8));
// 18)

// function limitStr(str, n, symb = "...") {
//   let str2 = "";
//   if (str.length > n) {
//     str2 = str.slice(0, n) + symb;
//   }
//   return str2;
// }
// console.log(limitStr("Привет", 4));

// 19)

// var symb = "о";
// var str = "Астрономия это наука о небесных объектах";
// function count(str, symb) {
//   let stringsearch = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === symb) {
//       stringsearch += 1;
//     }
//   }
//   return stringsearch;
// }
// console.log(count(str, symb));

// 21)

// var str = "    Max is a good      boy     ";
// function strip(str) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1] && str[i] === " ") {
//       continue;
//     } else {
//       newStr += str[i];
//     }
//   }
//   return newStr.trim();
// }
// console.log(strip(str));
// 23)

// var str = "Сила тяжести приложена к центру масс тела";
// function cutString(str, n) {
//   str.trim();
//   let newStr = "";
//   let k = 0;
//   let len = str.length;
//   for (let i = 0; i <= len; i++) {
//     newStr += str[i];
//     if (str[i] === " ") {
//       k += 1;
//     }
//     if (k === n) break;
//   }
//   return newStr;
// }
// console.log(cutString(str, 5));
// 24)

// var str = "abc def ghi jkl mno pqr stu";
// function findWord(word, str) {
//   if (str.indexOf(word) != -1) {
//     console.log(`${word} присутствует в строке`);
//   } else {
//     console.log(`${word} отсутствует в в строке`);
//   }
// }
// findWord("ac", str);
