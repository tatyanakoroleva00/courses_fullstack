# Основы работы с пользовательскими функциями в JavaScript

1. Сделайте функцию, выводящую на экран ваше имя.
2. Сделайте функцию, выводящую на экран сумму чисел от 1 до 100.
3. Сделайте функцию, которая параметром принимает число и выводит на экран куб этого числа.
4. Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит на экран текст '+++', а во втором '---'.
5. Сделайте функцию, которая параметрами принимает 3 числа и выводит на экран сумму этих чисел.
6. Сделайте функцию func, которая параметром будет принимать 3 переменных и выводить на экран сумму их значений. Пусть даны 3 переменные с числами:

let param1 = 1;
let param2 = 2;
let param3 = 3;

С помощью созданной вами функции выведите на экран сумму значений эти переменных.

7. Дана функция:

function func(num = 5) {
alert(num * num);
}

Эта функция вызывается следующим образом:

func(2);
func(3);
func();

Расскажите, каким будет результат каждого из вызовов функции.

8. Дана функция:

function func(num1 = 0, num2 = 0) {
alert(num1 + num2);
}

Эта функция вызывается следующим образом:

func(2, 3);
func(3);
func();

Расскажите, каким будет результат каждого из вызовов функции.

9. Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную result.
10. Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их на экран.
11. Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части:

function sqrt(num) {
return Math.sqrt(num);
}

function round(num) {
return num.toFixed(3);
}

С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.

12. Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел:

function sqrt(num) {
return Math.sqrt(num);
}

function sum(num1, num2, num3) {
return num1 + num2 + num3;
}

С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную result.

13. Пусть у вас есть функция, округляющая дробь до трех знаков в дробной части:

function round(num) {
return num.toFixed(3);
}

С помощью этой функции модифицируйте предыдущую задачу так, чтобы в переменную result записывалась дробь, округленная до 3-х знаков в дробной части.

14. Что выведется на экран в результате выполнения следующего кода:

function func(num) {
return num;

let result = num * num;
return result;
}

alert( func(3) );

Объясните почему.

15. Что выведет каждый из алертов в результате выполнения следующего кода:

function func(num) {
if (num <= 0) {
return Math.abs(num);
} else {
return num * num;
}
}

alert( func(10) );
alert( func(-5) );

Объясните почему.

16. Что выведет каждый из алертов в результате выполнения следующего кода:

function func(num) {
if (num <= 0) {
return Math.abs(num);
}

return num * num;
}

alert( func(10) );
alert( func(-5) );

Объясните почему.

17. Что выведется на экран в результате выполнения следующего кода:

function func(num) {
let sum = 0;

for (let i = 1; i <= num; i++) {
sum += i;
return sum;
}
}

alert( func(5) );

Объясните почему. Что хотел сделать автор данного кода? Исправьте ошибку автора.

18*. Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.
19*. Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.
20*. Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.
21*. Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.