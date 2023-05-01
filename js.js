                           //09_02 METHOD FOREACH
/****************1. GIVEN EXAMPLE***************************/
// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// numbers.forEach(function (num) {
//     console.log(num * 2);
//   });

/*1.1. I want to display all numbers of the array to the console.log*/
// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// numbers.forEach(num => {
//     console.log(num);
// });

/*1.2. I've decided to display all numbers in bold weight, each on its line, on the screen*/
// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// numbers.forEach(num => {
//     document.write(`<strong>${num}</strong><br>`);
// });

/*1.3. I've decided to display all numbers of the array on the screen, to add some text and to change indexes (for those who don't understand indexes and who are not in the IT domain*/
// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// numbers.forEach((num, index) => {
//     document.write(`${index + 1} элемент массива - ${num}<br>`);
// });

/*1.4.Here, I've decided to see what happends with the array, if I try to modify it from inside. This method simply iterates through the elements of the array*/
// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// numbers.forEach(num => {
//     document.write(num + 5, '<br>');
// });
// document.write(numbers);

/*1.5. Here I've decided to find a sum of the elements inside of the array. And to display them on the screen*/
// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// let sum = 0;
// numbers.forEach(num => {
//     sum += num;
//     document.write(sum, '</br>');
// });
// document.write(sum);

/*1.6. Here, I've understood, that I can iterate through the elements and push them into the other array. And display both arrays on the screen*/
// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// const copy = [];

// numbers.forEach(num => {copy.push(num);});
// document.write('initial array: ', numbers, '</br>');
// document.write('copy array: ', copy);

/****************2. GIVEN EXAMPLE***************************/
// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// function printTriple(n) {
//     console.log(n * 3);
// }
// Using a pre-defined function:
// numbers.forEach(printTriple);

/* 2.1. So, I've just seen, that the function may exist out of the forEach method, as well as inside of it*/
// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// numbers.forEach(function printTriple(n) {
//     console.log(n * 3);
// });

/* 2.2. OR it can be re-written*/ 
// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// numbers.forEach(n => {
//     console.log(n * 3);
// });


/****************3. GIVEN EXAMPLE***************************/
// Using the index:
// numbers.forEach(function (num, idx) {
//     console.log(idx, num);
//   });

/*3.1. I've decided to create a new pre-defined function outside of the array with the forEach method. And to do some calculation. */ 
// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// function modifyArray(num, index) {
//     document.write(`${index} - <strong>${num + (100 - num)}</strong><br>`);
// }
// numbers.forEach(modifyArray);

/****************4. GIVEN EXAMPLE***************************/
/*AN ARRAY WITH OBJECTS*/
// const books = [{
//     title: 'Good Omens',
//     authors: ['Terry Pratchett', 'Neil Gaiman'],
//     rating: 4.25
//   },
//   {
//     title: 'Bone: The Complete Edition',
//     authors: ['Jeff Smith'],
//     rating: 4.42
//   },
//   {
//     title: 'American Gods',
//     authors: ['Neil Gaiman'],
//     rating: 4.11
//   },
//   {
//     title: 'A Gentleman in Moscow',
//     authors: ['Amor Towles'],
//     rating: 4.36
//   },
// ];
/*EXAMPLE ITERATIONS, USING DIFFERENT METHODS*/
/*Printing all book titles using forEach:*/

/* EXAMPLE: forEach method*/
// books.forEach(function (book) {
//     console.log(book.title.toUpperCase());
//   });

/*4.1. I've decided to iterate through the array elements with the method forEach. To create a new array. To push their the authors. To display on the screen with a text added.*/
// let authors = [];
// books.forEach(book => {
//     authors.push(book.authors);
// });
// authors.forEach(author => {
//     document.write(`I need to read these authors: <strong>${author}</strong><br>`);
// });


/* EXAMPLE: Printing all book titles using for...of:*/
// for (let book of books) {
//     console.log(book.title.toUpperCase());
//   }

/*4.2. I've decided to iterate through the array elements with the method for ... of. And I displayed them on the screen with a text added.*/
// for (let book of books) {
//     document.write(`I need to read: ${book.authors}<br>`);
// }

/* EXAMPLE: Printing all book titles using for loop:*/
//   for (let i = 0; i < books.length; i++) {
//     console.log(books[i].title.toUpperCase());
//   }

/*4.3. I've decided to iterate through the array elements with the loop for...  And I displayed them on the screen with a text added.*/
// for (let i = 0; i < books.length; i++) {
//     document.write('Do you know - ', books[i].authors, ' ? <br>');
// }


/*************************09_03 METHOD MAP *************************/
/****************************GIVEN EXAMPLE 1 */

// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// const words = ['asap', 'byob', 'rsvp', 'diy'];

//EXAMPLE: Map creates a new array by calling your callback function with each element in the original array.
// const doubles = numbers.map(function (num) {
//     return num * 2; //Need to return the value!
//   });
//   //[40, 42, 44, 46, 48, 50, 52, 54]

/*1.1. I've created a newArr and done some calculations.*/
// const newArray = numbers.map(n => {return n += 4;});
// console.log(newArray);


/*1.2. I've created a newArr and made capital letters. */
// const newArr= words.map(word => {return word.toUpperCase();
// });
// document.write(newString);

/*EXAMPLE: Получится массив объектов. */ 
// const numDetail = numbers.map(function (n) {
//     return {
//       value: n,
//       isEven: n % 2 === 0
//     };
//   });
// console.log(numDetail);

/*1.3. I've added an index. */
// const users = words.map((user, index) => {
//     return `${index} : ${user}`;
// });
// document.write(users);

/*1.4. Here, I've iterated through elements and wrote index with number, created an array of objects. */
// const data = numbers.map((number, index) => {
//     return {
//         num : number,
//         ind : index, 
//     };
// });
// console.log(data);

/*EXAMPLE*/
// const abbrevs = words.map(function (word) {
//     return word.toUpperCase().split('').join('.');
//   })
//   //["A.S.A.P", "B.Y.O.B", "R.S.V.P", "D.I.Y"]

/*1.5. Here, I've created a newArr and I turned this arr into a string. And then I turned the string to a new array*/
// const newArr = numbers.map(num => {
//     return num.toString().split('').join(':'); 
// });
// console.log(newArr, '</br>');
// let str = newArr.toString();
// console.log(str);
// let array2 = str.split(':').toString().split(',');
// console.log(array2);

/*Now, I want to combine two adjacent elements of the array*/

// for (let i = 0; i < array2.length - 1; i++) {
//     array2[i] += array2[i + 1];
//     array2.splice(i + 1, 1);
// }
// console.log(array2);


/****************************GIVEN EXAMPLE 2 **********/
// const books = [{
//     title: 'Good Omens',
//     authors: ['Terry Pratchett', 'Neil Gaiman'],
//     rating: 4.25
//   },
//   {
//     title: 'Bone: The Complete Edition',
//     authors: ['Jeff Smith'],
//     rating: 4.42
//   },
//   {
//     title: 'American Gods',
//     authors: ['Neil Gaiman'],
//     rating: 4.11
//   },
//   {
//     title: 'A Gentleman in Moscow',
//     authors: ['Amor Towles'],
//     rating: 4.36
//   }
// ];

/*EXAMPLE*/
// const titles = books.map(function (b) {
//   return b.title;
// })
// //["Good Omens", "Bone: The Complete Edition", "American Gods", "A Gentleman in Moscow"]

/*2.1. Here, I've decided to change the order : rating, authors, title*/
// const newBookCollection = books.map(b => {
//     return {
//         rating : b.rating,
//         authors : b.authors,
//         title : b.title, 
//     };
// });

// console.log(newBookCollection);


/*************************************09_04 Intro ARROW FUNCTIONS *****************/


/*EXAMPLE 1*/
//Non-arrow function expression:
// const square = function (x) {
//   return x * x;
// };

/*1.1. My own example of the function, whose result is put into the const. */
// const sum = function(a, b) {
//     return a + b;
// };
// console.log(sum(4, 5));

/*EXAMPLE 1.2*/
// // Equivalent arrow function:
// const square = (x) => {
//     return x * x;
//   };

/*1.2. My own example of an arrow function*/
// const sum = (a, b) => a + b;
// console.log(sum(5, 6));


/*EXAMPLE 2*/
//parenthesis are optional when you have 1 parameter
// const isEven = num => {
//     return num % 2 === 0;
//   };

/*2.1. My own example of an arrow function with one parameter; Goal is to find the degree of the number*/
// const result = x => {
//     return x ** 2;
// };
// console.log(result(5));

/*EXAMPLE 3*/
//Must include parenthesis for multiple parameters
//   const multiply = (x, y) => {
//     return x * y;
//   };

/*3.1. My own example of an arrow function with several parameters. Here, I've decided to link two parts together into a phrase. */

// const phrase = (word1, word2) => {
//     return word1 + ' ' + word2;
// };
// document.write(phrase('Hello,', 'Kate'));
  
/*EXAMPLE 4*/
// Must include parenthesis for zero parameters
//   const greet = () => {
//     console.log("HI!");
//   };

/*4.1. There is this necessity to write after the function answer(), to call the function! Not to forget!*/
// const answer = () => {
// document.write(5 + 5);  
// };
// answer();

/************************09_05 ARROW FUNCTIONS: implicit returns *********/


/*EXAMPLE 1.*/
// "Regular" arrow function:
// const square = n => {
//     return n * n;
//   };

/*1.1. My own example of a regular arrow function*/
// const result = a => {
//     return Math.pow(a, 4);
// };
// document.write(result(2));

/*EXAMPLE 2.*/
// Implicit Return, on multiple lines using parens
// const square1 = n => (
//     n * n
//   );

/*2.1. My own example of an implicit return, using parethesis*/
// const result = a => (
//     a + 5
// );
// console.log(result(6));

/*EXAMPLE 3.*/
  // Implicit return one-liner:
// const square2 = n => n * n;

/*3.1. My example of one-line arrow function*/
// const result = test => 'I want to have ' + test + ' dogs';
// console.log(result(5));

/********************************EXAMPLE 4**************/
// const nums = [1, 2, 3, 4, 5, 6, 7, 8];

/*EXAMPLE 4.1*/
// const doubles1 = nums.map(function (n) {
//     return n * 2;
//   });

/*4.1. My own example. Turning the array into a string*/
// const newArr = nums.map(function(number) {
//     return number * 10;
// });
// document.write(newArr.join('+'));

/*EXAMPLE 4.2*/
// const doubles2 = nums.map(n => {
//     return n * 2;
//   });

/*4.2. My own example of a new array with modifications made*/
// const newArr = nums.map(number => {
//     return number * 10;
// });
// console.log(newArr);

/*EXAMPLE 4.3*/
// const doubles3 = nums.map(n => n * 2);

/*4.3. My own example of a new array being created, a short version of an arrow function*/
// const newArr = nums.map(number => number + 100);
// console.log('This is a new array: ' + newArr);

/*EXAMPLE 4.4.*/
// const parityList = nums.map(function (n) {
//     if (n % 2 === 0) return 'even';
//     return 'odd';
//   });

/*4.4 Here's my example, I've decided to create a new arr, using conditions if / else and then I put it into a string.*/
// const newArr = nums.map(function(number) {
//     if (number > 4) return (number + ' - is big <br>');
//     return (number + ' - is small <br>');
// });
// document.write(newArr.join(''));

/*EXAMPLE 4.5.*/
// const parityList1 = nums.map((n) => {
//     if (n % 2 === 0) return 'even';
//     return 'odd';
//   });

/*4.5. Here, I've got an idea to return only the numbers which are more than 4. To get rid of all 'undefined' using filter. To join all array elements into a string using line breaks.*/

// const newArr = nums.map((n) => {
//     if (n > 4) return n + ' is more than 4';
// });
// let filteredArr = newArr.filter(i => (typeof i === 'string'));
// document.write(filteredArr.join('<br>'));

/*EXAMPLE 4.6.*/
// const parityList2 = nums.map((n) => (
//     n % 2 === 0 ? 'even' : 'odd'
//   ));

/*4.6. My own example: finding true or false*/
// const newArr = nums.map(n => n >= 4);
// console.log(newArr);

/*EXAMPLE 4.7.*/
// const parityList3 = nums.map((n) => n % 2 === 0 ? 'even' : 'odd');

/*4.7. My own example. */
// const newArr = nums.map(n => (n + 1) > 5 ? n + ' - equal or more than 5' : n + ' - less than 5');
// document.write(newArr.join('<br>'));


/***********************09_06 ARRAY FIND **********/

let movies = [
    "The Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
  ];
  
// EXAMPLE 1 Find first movie that includes 'Mrs' in its title:
//   const movie = movies.find(movie => {
//     return movie.includes('Mrs');
//   });

