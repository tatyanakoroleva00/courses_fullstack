// 1. # Массивы в JavaScript
// 1. Создайте массив с элементами 'a', 'b' и 'c'. Выведите его на экран с помощью функции alert, а также выведите его в консоль с помощью console.log.
// let arr = ['a', 'b', 'c'];
// // alert(arr);
// console.log(arr);

// 2. Создайте массив с элементами 'a', 'b', 'c'. Выведите на экран каждый из этих элементов.
// let arr = ['a', 'b', 'c'];
// for (let elem of arr) {
//     alert(elem);
// }

// 3. Создайте массив с элементами 'a', 'b', 'c', 'd'. Выведите с его помощью на экран строку 'a+b+c+d'.
// let arr = ['a', 'b', 'c', 'd'];
// let str = '';
// for (let i = 0; i < arr.length; i++) {
//     if (i === 0) {
//         str += arr[i];
//     } else {
//         str += '+' + arr[i];
//     }
// }
// alert(str);


/*ЛИБО*/
// let arr = ['a', 'b', 'c', 'd'];
// alert(arr.join('+'));


// 4. Создайте массив с элементами 1, 2 и 3. Выведите на экран сумму этих элементов.
// let sum = 0;
// let arr = [1, 2, 3];
// for (let elem of arr) {
//     sum += elem;
// }
// alert(sum);

// 5. Создайте массив с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.

// let arr = [2, 5, 3, 9];
// let result = arr[0] * arr[1] + arr[2] * arr[3];
// alert(result);

// 6. Создайте массив с произвольными элементами. Выведите на экран количество элементов в этом массиве.

// let arr = [1, null, 'hello', [5, 6, 7]]; 
// alert(arr.length);

// 7. Создайте массив с произвольными элементами. Выведите на экран последний элемент этого массива.

// let arr = [1, null, 'hello', [5, 6, 7]]; 
// alert(arr[arr.length - 1]);

// 8. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.
// let arr = ['a', 'b', 'c'];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// console.log(arr);

// 9. Создайте массив с числами. Прибавьте к каждому элементу массива число 3. Выведите на экран измененный массив.
// let arr2 = [];
// let arr = [1, 2, 3, 4, 5, 6];
// for (let elem of arr) {
//     arr2.push(elem + 3);
// }
// console.log(arr2);

// 10. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу.
// let arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//     arr[i]++;
// }
// console.log(arr);

// 11. Пусть дан такой массив: Добавьте ему в конец элементы 4 и 5.

// let arr = [1, 2, 3];
// arr.push(4, 5);
// console.log(arr);


// 12. Пусть дан такой массив: Узнайте длину этого массива с помощью свойства length.

// let arr = [];

// arr[3] = 'a';
// arr[8] = 'b';
// console.log(arr.length);

// # Объекты в JavaScript

// 1. Создайте объект с ключами 1, 2 и 3 и значениями 'a', 'b' и 'c'. Выведите на экран все его элементы.
// let obj = {
//     1 : 'a',
//     2 : 'b',
//     3 : 'c',
// };
// for (let key in obj) {
//     document.write(key + ' : ' + obj[key] + ', ');
// }

// ЛИБО БЕЗ КЛЮЧЕЙ, ПРОСТО ЗНАЧЕНИЯ: 

// let obj = {
//     1 : 'a',
//     2 : 'b',
//     3 : 'c',
// };
// let res = '';
// for (let key in obj) {
//     document.write(obj[key] + ' ');
// }

// // 2. Создайте объект с ключами a, b и c и значениями 1, 2 и 3. Найдите сумму его элементов.

// let obj = {'a' : 1, 'b' : 2, 'c' : 3};
// let sum = 0;
// for (let key in obj) {
//     sum += obj[key];
// }
// console.log(sum);

// 3. Создайте объект с ключами 1a, 2b и с-с и значениями 1, 2 и 3. Найдите сумму его элементов.
// let sum = 0;
// let obj = {'1a' : 1, '2b' : 2, 'c-c' : 3};
// for (let key in obj) {
//     sum += obj[key];
// }
// console.log(sum);

// 4. Создайте объект user с ключами name, surname, patronymic и какими-то произвольными значениями. Выведите на экран фамилию, имя и отчество через пробел

// let obj = {
//     'name' : 'Anna', 
//     'surname' : 'Korolevskaya' ,
//     'patronymic' : 'Vladimirovna',
// };
// let res = [];
// for (let key in obj) {
//     res.push(obj[key]);
// }
// let res2 = res.join(' ');
// document.write(res2);

// 5. Создайте объект date с ключами year, month и day и значениями, соответствующими текущему дню. Выведите созданную дату на экран в формате год-месяц-день.

// let date = {'year' : 2023, 'month' : 4, 'day' : 19};
// let arr = [];
// for (let key in date) {
//     arr.push(date[key]);
// }
// let arr2 = arr.join('-');
// document.write(arr2);

// 6. Дан объект: Найдите сумму значений его элементов.

// let obj = {'key1': 1, 'key2': 2, 'key3': 3};
// let sum = 0;
// for (let key in obj) {
//     sum += obj[key];
// }
// console.log(sum);

// 7*. Дан объект: К каким элементам этого объекта допустимо обращение через точку, а к каким - нет?

// let obj = {'1a': 1, 'b2': 2, 'eee-': 3, 'd4': 4};

// К 'b2', d4 - можно! 


let domVDerevne = {
    materialWall:'woods',
    floor:3,
    windows:5,
    materialRoof: 'metal',
    adress:{
        city:'Okunevo',
        street:'Cenralnaya',
        dom:36,
}
};

// users[0].hobby[2];

// domVDerevne.windows = 6;
// console.log(domVDerevne);

// domVDerevne.adress.corp = 1;
domVDerevne.adress.dom[0] = 17;
console.log(domVDerevne);



// let metal = domVDerevne.materialRoof;
// let three = domVDerevne.floor;
// let woods = domVDerevne.materialWall;
// let five = domVDerevne.windows;
// let Cenralnaya = domVDerevne.adress.street;
// let str = metal + ', ' + three + ', ' + woods + ', ' + five + ', ' + Cenralnaya;
// console.log(str);