// 1. Выборка элементов DOM
/********************** Задание 1.1**********/
// Задание 1.1. Даны 3 абзаца:
// Запишите ссылку на каждый из абзацев в отдельную переменную и выведите содержимое каждой из этих переменных в консоль.

// const elem1 = document.querySelector('#elem1'),
//     elem2 = document.querySelector('#elem2'),
//     elem3 = document.querySelector('#elem3');
// console.log(elem1.textContent, elem2.textContent, elem3.textContent);


/********************** Задание 1.2**********/
// Задание 1.2. Дан следующий HTML:

// Получите ссылку на первый абзац из дива с id, равным block.

// Version 1:
// let div = document.querySelector('#block');
// console.log(div.children[0]);

// Version 2:
// let firstPar = document.querySelector('#block p:first-of-type');
// console.log(firstPar);

// Version 3:
// let firstPar = document.querySelector('#block p:first-child');
// console.log(firstPar);

// Version 4:
// let div = document.getElementById('block');
// console.log(div.children[0]);

// Version 5:
// let div = document.querySelector('#block');
// console.log(div.firstElementChild);

/********************** Задание 1.3**********/
// Задание 1.3. Дан следующий HTML:

// Получите ссылку на первый абзац из дива с class, равным block.

// Version 1:
// let div = document.querySelector('.block');
// console.log(div.children[0]);

// Version 2:
// let firstPar = document.querySelector('.block p:first-of-type');
// console.log(firstPar);

// Version 3:
// let firstPar = document.querySelector('.block p:first-child');
// console.log(firstPar);

// Version 4:
// let div = document.querySelector('.block');
// console.log(div.firstElementChild);

/********************** Задание 1.4**********/
// Задание 1.4. Дан следующий HTML:

// <p class="www">text</p>
// <p class="www">text</p>

// Получите ссылку на первый абзац с классом www.
// let firstPar = document.querySelector('.www');
// console.log(firstPar);


/****************#Работа с элементами**********/
/**************Задание 1. ***********/
// Задание 1. Есть объект:

// const account = {
//   owner: 'Silvestr Stallone',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 99,
//   pin: 9999,
// };
// С помощью методов DOM создайте разметку, стили. Разместите в разметке данные из объекта и поместите на страницу. 

// const account = {
//   owner: 'Silvestr Stallone',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 99,
//   pin: 9999,
// };

// let userStr = `
//     <div class = 'inner-container'>
//     <p><span class='bold'>owner:</span> ${account.owner}</p>
//     <p><span class='bold'>movements:</span> ${account.movements.join(', ')}</p>
//     <p><span class='bold'>interestRate:</span> ${account.interestRate}</p>
//     <p><span class='bold'>pin:</span> ${account.pin}</p>
//     </div>
// `;

// let container = document.querySelector('.container');
// container.insertAdjacentHTML('afterbegin', userStr);

// // Container Styles
// container.style.display ='flex';
// container.style.flexDirection = 'column';
// container.style.justifyContent = 'center';
// container.style.alignItems = 'center';
// container.style.width = '400px';
// container.style.margin = '200px auto';
// container.style.border = '1px dashed black';

// // UserStr Styles
// let innerContainer = document.querySelector('.inner-container');
// innerContainer.style.background = 'pink';
// innerContainer.style.padding = '0px 40px';

// let bold = document.querySelectorAll('.bold');
// bold.forEach((e) => {
//     e.style.fontWeight = '700';
//     e.style.fontSize = '20px';
// });

/******************************Задание 2 */
// Задание 2. Есть массив объектов 
// const accounts = [
//   {
//     owner: 'Jonas Schmedtmann',
//     interestRate: 1.2, // %
//     pin: 1111,
//   },
//   {
//     owner: 'Jessica Davis',
//     interestRate: 1.5,
//     pin: 2222,
//   },
//   {
//     owner: 'Steven Thomas Williams',
//     interestRate: 0.7,
//     pin: 3333,
//   },
//   {
//     owner: 'Sarah Smith',
//     interestRate: 1,
//     pin: 4444,
//   }
// ];
// С помощью методов DOM создайте разметку, стили. Разместите в разметке данные из массива объектов и поместите на страницу. 

//here is a changeable array of user accounts
// const accounts = [

//   {
//     owner: 'Jonas Schmedtmann',
//     interestRate: 1.2, // %
//     pin: 1111,
//   },
//   {
//     owner: 'Jessica Davis',
//     interestRate: 1.5,
//     pin: 2222,
//   },
//   {
//     owner: 'Steven Thomas Williams',
//     interestRate: 0.7,
//     pin: 3333,
//   },
//   {
//     owner: 'Sarah Smith',
//     interestRate: 1,
//     pin: 4444,
//   },
// ];

// //Create a container for all users
// let container = document.querySelector('.container');

// //Create a user account and iterate through array
// let userStr = '';
// accounts.map((user) => {
//     userStr += `
//     <div class='users'>
//         <p><span class='bold'>owner: </span> ${user.owner}</p>
//         <p><span class='bold'>interestRate: </span>${user.interestRate}</p>
//         <p><span class='bold'>pin: </span> ${user.pin} </p>
//     </div>
//     `;
// });

// //insert into the container all existing user accounts
// container.insertAdjacentHTML('afterbegin', userStr);

// //apply styles for the container
// container.style.display = 'flex';
// container.style.flexDirection = 'row';
// container.style.backgroundColor = 'grey';
// container.style.maxWidth = '1000px';
// container.style.margin = '0 auto';


// //add styles to each user
// const users = document.querySelectorAll('.users');
// users.forEach(el => {
//     el.style.width = '250px';
//     el.style.borderRight = '1px dashed white';
//     el.style.fontSize = '20px';
//     el.style.paddingLeft = '20px';
// });

// //add styles to bold class
// let bold = document.querySelectorAll('.bold');
// bold.forEach(b => {
//     b.style.fontWeight = '700';
// });

/************************** Задание 3 */
// Задание 3.  Теперь массив с объектами содержит новые данные, это движения по счету:
// const accounts = [
//   {
//     owner: 'Jonas Schmedtmann',
//     movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//     interestRate: 1.2, // %
//     pin: 1111,
//   },
//   {
//     owner: 'Jessica Davis',
//     movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//     interestRate: 1.5,
//     pin: 2222,
//   },
//   {
//     owner: 'Steven Thomas Williams',
//     movements: [200, -200, 340, -300, -20, 50, 400, -460],
//     interestRate: 0.7,
//     pin: 3333,
//   },
//   {
//     owner: 'Sarah Smith',
//     movements: [430, 1000, 700, 50, 90],
//     interestRate: 1,
//     pin: 4444,
//   }
// ];
// Модифицируйте решение из предыдущего задания чтобы были учтены новые данные.

// //Modified solution. Modified array
// const accounts = [
//   {
//     owner: 'Jonas Schmedtmann',
//     movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//     interestRate: 1.2, // %
//     pin: 1111,
//   },
//   {
//     owner: 'Jessica Davis',
//     movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//     interestRate: 1.5,
//     pin: 2222,
//   },
//   {
//     owner: 'Steven Thomas Williams',
//     movements: [200, -200, 340, -300, -20, 50, 400, -460],
//     interestRate: 0.7,
//     pin: 3333,
//   },
//   {
//     owner: 'Sarah Smith',
//     movements: [430, 1000, 700, 50, 90],
//     interestRate: 1,
//     pin: 4444,
//   }
// ];

// //Create a container for all users
// let container = document.querySelector('.container');

// //Create a user account and iterate through array
// let userStr = '';
// accounts.map((user) => {
//     userStr += `
//     <div class='users'>
//         <p><span class='bold'>owner: </span> ${user.owner}</p>
//         <p><span class='bold'>movements: </span> ${user.movements.join(', ')}</p>
//         <p><span class='bold'>interestRate: </span>${user.interestRate}</p>
//         <p><span class='bold'>pin: </span> ${user.pin} </p>
//     </div>
//     `;
// });

// //insert into the container all existing user accounts
// container.insertAdjacentHTML('afterbegin', userStr);

// //apply styles for the container
// container.style.display = 'flex';
// container.style.flexDirection = 'row';
// container.style.backgroundColor = 'grey';
// container.style.maxWidth = '1000px';
// container.style.margin = '0 auto';


// //add styles to each user
// const users = document.querySelectorAll('.users');
// users.forEach(el => {
//     el.style.width = '250px';
//     el.style.borderRight = '1px dashed white';
//     el.style.fontSize = '20px';
//     el.style.paddingLeft = '20px';
// });

// //add styles to bold class
// let bold = document.querySelectorAll('.bold');
// bold.forEach(b => {
//     b.style.fontWeight = '700';
// });

/***********************2. Основы работы с событиями */

// Задание 2.1. Даны 3 кнопки:

// <input id="button1" type="submit">
// <input id="button2" type="submit">
// <input id="button3" type="submit">

// Сделайте так, чтобы по клику на первую кнопку на экран выводилось число 1, по клику на вторую - число 2, а по клику на третью - число 3.


// const btn1 = document.querySelector('#button1');
// const btn2 = document.querySelector('#button2');
// const btn3 = document.querySelector('#button3');

// let par = document.querySelector('p');
// btn1.addEventListener('click', () => {
//   par.textContent = '1';
// });
// btn2.addEventListener('click', () => {
//     par.textContent = '2';
//   });
// btn3.addEventListener('click', () => {
//     par.textContent = '3';
// });

/*****************Задание 2.2. */
// Задание 2.2. Дана кнопка. По двойному клику по ней выведите на экран какое-нибудь сообщение.

// let btn = document.querySelector('#btn');
// let par = document.querySelector('p');
//     btn.addEventListener('dblclick', ()=> {
//     par.insertAdjacentText('afterbegin', 'Bonjour! Le jour est beau!');
// });

/*****************************Задание 2.3. */
// Задание 2.3. Дана кнопка. По наведению на нее выведите на экран какое-нибудь сообщение.

// let btn = document.querySelector('#btn');
// let par = document.querySelector('p');
//     btn.addEventListener('mouseover', ()=> {
//     par.insertAdjacentText('afterbegin', 'Bonjour! Le jour est beau!');
// });

/***********************Задание 2.4. */
// Задание 2.4. Дана кнопка. По уходу курсора с нее выведите на экран какое-нибудь сообщение.

// let btn = document.querySelector('#btn');
// let par = document.querySelector('p');
//     btn.addEventListener('mouseout', ()=> {
//     par.insertAdjacentText('afterbegin', 'Where are you going?');
// });
/********************** Задание 2.5.*/

// 
/***************** Задание 2.5. */
// Задание 2.5. Дан следующий HTML код:

// <input id="button1" type="submit" value="button1">
// <input id="button2" type="submit" value="button2">

// Даны следующие функции:

// function func1() {
// alert(1);
// }

// function func2() {
// alert(2);
// }

// Сделайте так, чтобы по клику на первую кнопку выполнилась функция func1, а по клику на вторую - функция func2.

// let btn1 = document.querySelector('#button1');
// let btn2 = document.querySelector('#button2');

// btn1.addEventListener('click', function func1() {
//     alert(1);
// });

// btn2.addEventListener('click', function func1() {
//     alert(2);
// });

/*****************Задание 2.6.  */
// Задание 2.6. Даны 5 абзацев:

// <p id="elem1">text</p>
// <p id="elem2">text</p>
// <p id="elem3">text</p>
// <p id="elem4">text</p>
// <p id="elem5">text</p>

// Дана следующая функция:

// function func() {
// alert('message');
// }

// Привяжите эту функцию ко всем 5-ти абзацам.

// let par1 = document.querySelector('#elem1');
// let par2 = document.querySelector('#elem2');
// let par3 = document.querySelector('#elem3');
// let par4 = document.querySelector('#elem4');
// let par5 = document.querySelector('#elem5');

// let parArr = [par1, par2, par3, par4, par5];
// parArr.forEach(el => {
//     el.addEventListener('click', function func() {
//         alert('message');
//     });
// });

/***********************Задание 2.7. */
// Задание 2.7. Дан абзац:

// <p id="elem">text</p>

// Даны следующие функции:

// function func1() {
// alert('1');
// }

// function func2() {
// alert('2');
// }

// function func3() {
// alert('3');
// }

// Привяжите все эти функции к нашему абзацу.

// function func1() {
// alert('1');
// }

// function func2() {
// alert('2');
// }

// function func3() {
// alert('3');
// }

// let par = document.querySelector('#elem').onclick = () => {
//     func1();
//     func2();
//     func3();
// };

/*************************Задание 2.8. */
// Задание 2.8. Дана кнопка. Привяжите к ней три анонимных обработчика двойного клика по ней. Пусть первый обработчик выводит число 1, второй обработчик - число 2, а третий - число 3.

// let func1 = function(){
//     alert(1);
// };
// let func2 = function(){
//     alert(2);
// };
// let func3 = function() {
//     alert(3);
// };

// const btn = document.querySelector('#btn');
// btn.addEventListener('dblclick', () => {
//     func1();
//     func2();
//     func3();
// });


// /***************3. Работа с текстом элементов******/
// Задание 3.1. Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка. По нажатию на кнопку выведите на экран сумму хранящихся чисел.

// let btn = document.querySelector('#btn');
// let par1 = document.querySelector('#par-1');
// let par2 = document.querySelector('#par-2');
// let result = document.querySelector('#result');

// let sum = Number(par1.innerHTML) + Number(par2.innerHTML);
// btn.addEventListener('click', () => {
//     result.insertAdjacentText('afterbegin', sum);
// });

/********************Задание 3.2. */
// Задание 3.2. Даны два абзаца и две кнопки. Пусть нажатие на первую кнопку выводит текст первого абзаца, а нажатие на вторую кнопку - текст второго абзаца.

// const par1 = document.querySelector('#par-1');
// const par2 = document.querySelector('#par-2');
// const btn1 = document.querySelector('#btn-1');
// const btn2 = document.querySelector('#btn-2');

// btn1.onclick = () => {
//     alert(par1.innerHTML);
// };
// btn2.onclick = () => {
//     alert(par2.innerHTML);
// };

/****************Задание 3.3.  */
// Задание 3.3. Дан абзац и две кнопки. По нажатию на первую кнопку запишите в абзац слово 'привет', а по нажатию на вторую кнопку - слово 'пока'.

// const par2 = document.querySelector('#par-2');
// const btn1 = document.querySelector('#btn-1').onclick = () => {par2.innerText = 'привет'};
// const btn2 = document.querySelector('#btn-2').onclick = () => {par2.innerText = 'пока'};

/***************************Задание 3.4. */
// Задание 3.4. Даны 3 абзаца с текстом. По нажатию на первый абзац запишите в его текст число 1, по нажатию на второй абзац запишите в его текст число 2, а по нажатию на третий - запишите в его текст число 3.

// const par1 = document.querySelector('#par-1');
// const par2 = document.querySelector('#par-2');
// const par3 = document.querySelector('#par-3');

// par1.addEventListener('click', () => {
//     par1.textContent = 1;
// });
// par2.addEventListener('click', () => {
//     par2.textContent = 2;
// });
// par3.addEventListener('click', () => {
//     par3.textContent = 3;
// });

/************************Задание 3.5. */
// Задание 3.5. Дан абзац и кнопка. В абзаце записано какое-то число. По нажатию на кнопку возведите значение абзаца в квадрат и запишите его обратно.

// let par = document.querySelector('#par');
// let btn = document.querySelector('#btn');

// btn.onclick = () => {
//     let num = Number(par.textContent);
//     par.textContent = Math.pow(num, 2);
// };

/********************Задание 3.6.**********/
// Задание 3.6. Дан абзац с числом и кнопка. По нажатию на кнопку прибавьте к значению абзаца единицу и запишите полученное число обратно.

// let par = document.querySelector('#par');
// let btn = document.querySelector('#btn');

// btn.onclick = () => {
//     let num = Number(par.innerHTML);
//     par.textContent = num + 1;
// };

/************************Задание 3.7. */
// Задание 3.7. Дан абзац с текстом и кнопка. По нажатию на кнопку запишите в конец текста абзаца восклицательный знак.

// let par = document.querySelector('#par');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', () => {
//     par.innerText += '!';
// });

/**********************Задание 3.8.  */
// Задание 3.8. Модифицируйте предыдущую задачу так, чтобы восклицательный знак записывался не в конец текста, а в начало.

// let par = document.querySelector('#par');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', () => {
//     par.innerText = '!' + par.innerText;
// });

/*******************************Задание 3.9. */
// Задание 3.9. Дан абзац и кнопка. По нажатию на кнопку запишите в абзац текст '<i>hello</i>'.

// let par = document.querySelector('#par');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', () => {
//     par.innerHTML = '<i>hello</i>';
// });

/*******************************Задание 3.10. */
// Задание 3.10. Дан абзац с текстом и кнопка. По нажатию на кнопку прочитайте текст абзаца, оберните этот текст в теги <b> и запишите новый текст обратно в абзац.

// let par = document.querySelector('#par');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', () => {
//     let text = par.textContent;
//     par.innerHTML = '<b>' + text + '</b>';
// });

/**********************4. Работа с атрибутами элементов*/
/**************Задание 4.1.*******************/
// Задание 4.1. Дан следующий инпут:

// <input id="elem" type="email">
// <input id="button" type="submit">

// По нажатию на кнопку выведите на экран содержимое атрибута type указанного выше инпута.

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

// button.addEventListener('click', () => {
//     button.insertAdjacentHTML('afterend', elem.type);
// });

/**************Задание 4.2.*******************/
// Задание 4.2. Дан следующий инпут:

// <input id="elem" type="email">
// <input id="button" type="submit">

// По нажатию на кнопку запишите в атрибут type элемента id="elem" значение submit.

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

// button.onclick = () => {
//     elem.type = 'submit';
// };

/**************Задание 4.3.*******************/
// Задание 4.3. Пусть у вас есть ссылка в виде тега a, кнопка и абзац. По нажатию на кнопку выведите в абзац содержимое атрибута href ссылки.

// let link = document.querySelector('a');
// let btn = document.querySelector('#btn');
// let par = document.querySelector('#par');

// btn.onclick = () => {
//     par.innerHTML = link.href;
// };

/**************Задание 4.4.*******************/
// Задание 4.4. Пусть у вас есть ссылка и кнопка. По нажатию на кнопку добавьте в конец текста ссылки содержимое ее атрибута href в круглых скобках.

// let link = document.querySelector('a');
// let btn = document.querySelector('#btn');

// btn.onclick = () => {
//     let linkHref = link.href;
//     link.innerHTML += ` (${linkHref})`;
// };

/**************Задание 4.5.*******************/
// Задание 4.5. Пусть у вас есть картинка. Разместите ее на странице в помощью тега img. Пусть даны также кнопка и абзац. Сделайте так, чтобы по клику на кнопку в абзац записался путь к картинке из ее атрибута src.

// let img = document.querySelector('img');
// let btn = document.querySelector('#btn');
// let par = document.querySelector('#par');

// btn.onclick = () => {
//     par.innerHTML = img.src;
// };


/**************Задание 4.6*******************/
// Задание 4.6. Дана картинка в теге img и кнопка. По нажатию на кнопку в атрибут width запишите значение 300.

// let img = document.querySelector('img');
// let btn = document.querySelector('#btn');

// btn.onclick = () => {
//     img.width = '300';
// };

/**************Задание 4.7*******************/
// Задание 4.7. Дана картинка в теге img и кнопка. Пусть в атрибуте width задана некоторая ширина. Сделайте кнопку, по нажатию на которую ширина картинки будет увеличиваться в 2 раза.

// let img = document.querySelector('img');
// let btn = document.querySelector('#btn');

// btn.onclick = () => {
//     img.width *= 2;
// };

/**************Задание 4.8*******************/
// Задание 4.8. 
// Пусть у вас есть две картинки. Сделайте на странице тег img и две кнопки. По нажатию на первую кнопку запишите в атрибут src путь к первой картинке, а по нажатию на вторую - путь ко второй картинке.

/* <img src='https://images.unsplash.com/photo-1682771843314-111d312c4ecf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8TThqVmJMYlRSd3N8fGVufDB8fHx8&w=1000&q=80' width="300" alt="architecture">

<img src='https://images.unsplash.com/photo-1682444990270-045a8615fe47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&w=1000&q=80width="300"'width='300' alt="architecture2"> */

// const btn1 = document.querySelector('#btn-1');
// const btn2 = document.querySelector('#btn-2');
// const img = document.querySelector('img');
// btn1.addEventListener('click', () => {
//     img.src = 'https://images.unsplash.com/photo-1682771843314-111d312c4ecf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8TThqVmJMYlRSd3N8fGVufDB8fHx8&w=1000&q=80';
//     img.width = '300';
// });
// btn2.addEventListener('click', () => {
//     img.src = 'https://images.unsplash.com/photo-1682444990270-045a8615fe47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&w=1000&q=80width="300"';
//     img.width = '300';
// });

/**************5. Работа с текстовыми полями*********/
/************Задание 5.1. */
// Задание 5.1. Дан инпут:

// <input id="elem" type="text" value="Is it sunny now?">
// <input id="button" type="submit">

// При нажатии на кнопку должен выводиться текущий текст инпута id="elem". Нажмите на кнопку,
// чтобы увидеть текущий текст инпута, затем поредактируйте текст в инпуте и еще раз нажмите на кнопку.
// Убедитесь в том, что выведется новый текст инпута.

// const elem = document.querySelector('#elem');
// const btn = document.querySelector('#button');

// const initialValue = elem.value;
// elem.value = '';
// btn.onclick = () => {
//     elem.value = initialValue;
//     newText();
// }

// function newText() {
//     btn.onclick = () => {
//         elem.value = 'This is the modified text';
//     }
// }

/************Задание 5.2. */
// Задание 5.2. Дан инпут и кнопка. По нажатию на кнопку запишите в инпут какой-нибудь текст.


// const elem = document.querySelector('#elem');
// const btn = document.querySelector('#button');

// btn.onclick = () => {
//     elem.value = 'This is my world!';
// };

/************Задание 5.3. */
// Задание 5.3. Дан инпут, абзац и кнопка. По нажатию на кнопку запишите в абзац текст из инпута.

// const btn = document.querySelector('#button');
// const elem = document.querySelector('#elem');
// const par = document.querySelector('#par');

// btn.onclick = () => {
//     par.innerHTML = elem.value;
// };

/************Задание 5.4. */
// Задание 5.4. Даны два инпута и кнопка. В первый инпут пользователем вводится число. По нажатию на кнопку запишите во второй инпут квадрат введенного числа.

// const btn = document.querySelector('#button');
// const elem = document.querySelector('#elem');
// const elem2 = document.querySelector('#elem2');

// btn.onclick = () => {
//     elem2.value = Math.pow(elem.value, 2);
// };

/************Задание 5.5. */

// Задание 5.5. Даны два инпута и кнопка. По нажатию на кнопку запишите в первый инпут значение второго инпута, а во второй инпут - значение первого.

// const btn = document.querySelector('#button');
// const elem = document.querySelector('#elem');
// const elem2 = document.querySelector('#elem2');

// const valueElem = elem.value;
// const valueElem2 = elem2.value;

// btn.onclick = () => {
//     direct();
// };

// function direct() {
//     elem.value = valueElem2;
//     elem2.value = valueElem;
//     btn.onclick = () => {
//         reverse();
//     };
// };

// function reverse() {
//     elem.value = valueElem;
//     elem2.value = valueElem2;
//     btn.onclick = () => {
//         direct();
//     };
// };

/************Задание 5.6. */

// Задание 5.6. Даны 5 инпутов, абзац и кнопка. В инпут вводятся числа. По нажатию на кнопку запишите среднее арифметическое введенных чисел в абзац.

// const num1 = document.querySelector('#num1');
// const num2 = document.querySelector('#num2');
// const num3 = document.querySelector('#num3');
// const num4 = document.querySelector('#num4');
// const num5 = document.querySelector('#num5');


// const btn = document.querySelector('#btn');
// const par = document.querySelector('#par');

// let numArr = [num1, num2, num3, num4, num5];

// btn.onclick = () => {
//     let result = numArr.reduce((sum, el)=> {
//         el = el.value;
//         return sum += +el;
//     }, 0);
//     let average = result / numArr.length;
//     par.innerHTML = average;
// }

/*******6. Работа с коллекцией элементов*****/
// Задание 6.1. Даны абзацы и кнопка. По нажатию на кнопку найдите все абзацы, переберите их циклом и установите текст каждого абзаца в значение 'text'.

// const par = document.querySelectorAll('p');
// const btn = document.querySelector('#btn');

// btn.onclick = () => {
//     par.forEach((e) => {
//         e.setAttribute('value', 'text');
//         e.innerHTML = 'text';
//     });
// };

/**************** Задание 6.2. ******/
// Задание 6.2. Даны абзацы с текстом и кнопка. По нажатию на кнопку запишите в конец текста каждого абзаца его порядковый номер.

// let par = document.querySelectorAll('p');
// let btn = document.querySelector('#btn');
// btn.onclick = () => {
//     for (let i = 0; i <= par.length; i++) {
//         let text = par[i].textContent;
//         par[i].innerHTML = text + (i + 1);
//     }
// };

/**************** Задание 6.3. ******/
// Задание 6.3. Даны инпуты с числами, абзац и кнопка. По нажатию на кнопку найдите сумму чисел из инпутов и запишите эту сумму в текст абзаца.

// let input = document.querySelectorAll('input');
// let btn = document.querySelector('#btn');
// let par = document.querySelector('#par');



// btn.onclick = () => {
//     let sum = 0;
// for (let i = 0; i < input.length; i++) {
//     sum += Number(input[i].value);
// }
// par.innerHTML = sum;
// };

/**************** 7. Работа с классам элементов ******/

// Задание 7.1. Дан элемент:

// <p id="elem" class="www ggg zzz"></p>

// Узнайте количество его классов.
// Переберите в цикле его классы.
// Добавьте ему класс xxx.
// Удалите у него класс www и класс zzz.
// Проверьте наличие у него класса ggg.
// Добавьте ему класс www, если его нет и удалите - если есть.
