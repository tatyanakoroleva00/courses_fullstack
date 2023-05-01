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

// let movies = [
//     "The Fantastic Mr. Fox",
//     "Mr. and Mrs. Smith",
//     "Mrs. Doubtfire",
//     "Mr. Deeds"
//   ];
  
// EXAMPLE 1 Find first movie that includes 'Mrs' in its title:
//   const movie = movies.find(movie => {
//     return movie.includes('Mrs');
//   });

/* 1.1. My own example of finding a movie using an arrow function*/
// const findMovie = movies.find(movie => movie.includes('Fan'));
// console.log(findMovie);

/*1.2. My example n.2, using a predefined function*/
// const newMovie = movies.find(function(movie) {
//   return movie.includes('Doubt');
// });
// console.log(newMovie);

/*EXAMPLE 2.*/
//Find first movie that begins with 'Mrs':
// const movie2 = movies.find(m => m.indexOf("Mrs") === 0);

/*2.1. My own example of finding a film*/
// const newMovie = movies.find(movie => movie.indexOf('Fan') === 4);
// console.log(newMovie);

// const books = [{
//   title: 'Good Omens',
//   authors: ['Terry Pratchett', 'Neil Gaiman'],
//   rating: 4.25
// },
// {
//   title: 'Bone: The Complete Edition',
//   authors: ['Jeff Smith'],
//   rating: 4.42
// },
// {
//   title: 'American Gods',
//   authors: ['Neil Gaiman'],
//   rating: 4.11
// },
// {
//   title: 'A Gentleman in Moscow',
//   authors: ['Amor Towles'],
//   rating: 4.36
// }
// ];

/*EXAMPLE 3.*/
//Find first book w/ rating over 4.3
// const goodBook = books.find(b => b.rating >= 4.3);
// console.log(goodBook);

/*Here's my example. I've decided to find a book with several authors*/
// const findAuthors = books.find(book => 
//   book.authors.length > 1);
// console.log(findAuthors);

/*EXAMPLE 4.*/
//Find first book with Neil Gaiman as an author:
// const neilBook = books.find(b => (
//   b.authors.includes('Neil Gaiman')
// ));

/*My own example. Here, I've decided to find a book which title includes smth*/
// const newBook = books.find(book => 
//   book.title.includes('Gentleman'));
// console.log(newBook);


/*********************09_07 Array Filter*****/


// const nums = [34, 35, 67, 54, 109, 102, 32, 9];

/*EXAMPLE 1.*/
// const odds = nums.filter(n => n % 2 === 1);
// const evens = nums.filter(n => n % 2 === 0);
// const bigNums = nums.filter(n => n > 50);

/*1.1.My own example, divisible by 3*/
// const divisibleBy3 = nums.filter(n => n % 3 === 0);
// console.log(divisibleBy3);

/*1.2.My own example. I've decided to find the numbers which are bigger than 20 after the division. Then, to find their sum.*/

// let sum = 0;
// const numbers = nums.filter(n => n / 2 > 20);
// for (let elem of numbers) {
//   sum += elem;
// }
// console.log(sum);


// const books = [{
//   title: 'Good Omens',
//   authors: ['Terry Pratchett', 'Neil Gaiman'],
//   rating: 4.25,
//   genres: ['fiction', 'fantasy']
// },
// {
//   title: 'Changing My Mind',
//   authors: ['Zadie Smith'],
//   rating: 3.83,
//   genres: ['nonfiction', 'essays']
// },
// {
//   title: 'Bone: The Complete Edition',
//   authors: ['Jeff Smith'],
//   rating: 4.42,
//   genres: ['fiction', 'graphic novel', 'fantasy']
// },
// {
//   title: 'American Gods',
//   authors: ['Neil Gaiman'],
//   rating: 4.11,
//   genres: ['fiction', 'fantasy']
// },
// {
//   title: 'A Gentleman in Moscow',
//   authors: ['Amor Towles'],
//   rating: 4.36,
//   genres: ['fiction', 'historical fiction']
// },
// {
//   title: 'The Name of the Wind',
//   authors: ['Patrick Rothfuss'],
//   rating: 4.54,
//   genres: ['fiction', 'fantasy']
// },
// {
//   title: 'The Overstory',
//   authors: ['Richard Powers'],
//   rating: 4.19,
//   genres: ['fiction', 'short stories']
// },
// {
//   title: 'The Way of Kings',
//   authors: ['Brandon Sanderson'],
//   rating: 4.65,
//   genres: ['fantasy', 'epic']
// },
// {
//   title: 'Lord of the flies',
//   authors: ['William Golding'],
//   rating: 3.67,
//   genres: ['fiction']
// }
// ];

/*EXAMPLE 2*/
//All books rated over 4.3:
// const goodBooks = books.filter(b => b.rating > 4.3);

/*2.1.My own example. Let's find books with low rating*/
// const lowRatingBooks = books.filter(b =>
//   b.rating < 4);
// console.log(lowRatingBooks);

/*EXAMPLE 3*/
// All books with fantasy as a genre:
// const fantasyBooks = books.filter(book => (
//   book.genres.includes('fantasy')
// ));

/*3.1. My own example. Find books which include a specific genre*/
// const fictionBooks = books.filter(book => 
// book.genres.includes('fiction'));
// console.log(fictionBooks);

/*EXAMPLE 4*/
// all books that are either short stories or essays:
// const shortForm = books.filter(book => (
//   book.genres.includes('short stories') || book.genres.includes('essays')
// ));

/*4.1. My own example. I've found books which may include 'epic' or 'fantasy' genres*/
// const booksFound = books.filter(b => (
//   b.genres.includes('epic') || b.genres.includes('fantasy'))
// );
// console.log(booksFound);

/*EXAMPLE 5*/
// Simple search functionality:
// const query = 'The';
// const results = books.filter(book => {
//   const title = book.title.toLowerCase();
//   return title.includes(query.toLowerCase());
// });

/*5.1. My own example. I've found books whose titles include 'ow'*/
// const booksFound = books.filter(b => {
//   const title = b.title.toLowerCase();
//   return title.includes('ow');
// });
// console.log(booksFound);

/******************************09_08 SOME AND EVERY *********/
// const words = ["dog", 'dig', 'log', 'bag', 'wag'];
/*EXAMPLE 1*/
//Is every word 3 characters long?
// const all3Letters = words.every(word => word.length === 3);
// console.log(all3Letters);

/*1.1. My example. Here, I've decided to check whether each words starts with the letter 'd'.*/
// const answer = words.every(word => word[0] === 'd');
// console.log(answer);

/*EXAMPLE 2*/
// Do all words end in 'g'?
// const allEndInG = words.every(word => {
//   const last = word.length - 1;
//   return word[last] === 'g'
// });

/*2.1. My own example. Here, I've decided to check whether all last letters are 'a(-s)'. And to write down an answer to the console.log.*/
// const answer = words.every(word => {
//   const lastIndex = word.length - 1;
// return word[lastIndex] === 'a';
// });
// answer ? console.log('Great') : console.log('I am sorry!');

/*EXAMPLE 3*/
//Does at least 1 book start with 'd'?
// const someStartWithD = words.some(word => word[0] === 'd');

/*3.1. My own example. I want to get to know whether some elements of the array start with 'w'.*/
// const someStartWithW = words.some(w => 
//   w[0] === 'w');
// console.log(someStartWithW);

/*EXAMPLE 4*/
// Do all words start with 'd'?
// const allStartWithD = words.every(word => word[0] === 'd');

/*4.1. My own example. Do all words start with the letter 'A'.*/
// const allStartWithA = words.every(w => w[0] === 'A');
// console.log(allStartWithA);

// const books = [{
//   title: 'Good Omens',
//   authors: ['Terry Pratchett', 'Neil Gaiman'],
//   rating: 4.25,
//   genres: ['fiction', 'fantasy']
// },
// {
//   title: 'Changing My Mind',
//   authors: ['Zadie Smith'],
//   rating: 3.83,
//   genres: ['nonfiction', 'essays']
// },
// {
//   title: 'Bone: The Complete Edition',
//   authors: ['Jeff Smith'],
//   rating: 4.42,
//   genres: ['fiction', 'graphic novel', 'fantasy']
// },
// {
//   title: 'American Gods',
//   authors: ['Neil Gaiman'],
//   rating: 4.11,
//   genres: ['fiction', 'fantasy']
// },
// {
//   title: 'A Gentleman in Moscow',
//   authors: ['Amor Towles'],
//   rating: 4.36,
//   genres: ['fiction', 'historical fiction']
// },
// {
//   title: 'The Name of the Wind',
//   authors: ['Patrick Rothfuss'],
//   rating: 4.54,
//   genres: ['fiction', 'fantasy']
// },
// {
//   title: 'The Overstory',
//   authors: ['Richard Powers'],
//   rating: 4.19,
//   genres: ['fiction', 'short stories']
// },
// {
//   title: 'The Way of Kings',
//   authors: ['Brandon Sanderson'],
//   rating: 4.65,
//   genres: ['fantasy', 'epic']
// },
// {
//   title: 'Lord of the flies',
//   authors: ['William Golding'],
//   rating: 3.67,
//   genres: ['fiction']
// }
// ];

/*EXAMPLE 5*/
//Are all books rated 3.5 or higher?
// const allGoodBooks = books.every(book => book.rating > 3.5);

/*5.1. My own example. Here, I am interested, whether all books have several writers.*/
// const allHaveSeveralAuthors = books.every(book => {
//   const authors = book.authors.length;
//   return authors > 1;
// });
// console.log(allHaveSeveralAuthors);

/*EXAMPLE 6*/
// //Do any books have 2 authors?
// const any2Authors = books.some(book => book.authors.length === 2)

/*6.1. Here, I've checked whether any books have several genres*/
// const someHaveSeveralGenres = books.some(book => 
//   book.genres.length > 1);
// console.log(someHaveSeveralGenres);

/*********************************09_10 REDUCE INTRO ************/

/*EXAMPLE*/
// const nums = [3, 4, 5, 6, 7];
// // To multiply all values in nums:
// const product = nums.reduce((total, currentVal) => {
//   return total * currentVal;
// });

// // total    currentVal    returnVal
// // 3             4           12
// // 12            5           60
// // 60            6           360
// // 360           7           2520

// //Final Return Value: 2520

/*My own example. I've decided to sum up all elements of the array. Summation*/
// const nums = [3, 4, 5, 6, 7];
// const result = nums.reduce((acc, currentVal) => {
//   return acc + currentVal;
// });
// console.log(result);

/*My own example n.2. Subtraction*/
// const nums = [3, 4, 5, 6, 7];
// const result = nums.reduce((acc, number) => {
//   return acc - number;
// });
// console.log(result);