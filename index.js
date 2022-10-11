// // console.log(!!"false"); true
// // console.log(!!undefined);false
// // console.log(typeof -Infinity);number
// // console.log(10 % "0");NaN
// // console.log(undefined == null);true
// // console.log(false === "");false
// // console.log(typeof "2E+2");string
// // a = 3e+3; a++;
// // console.log(a);3001 number
// // var s = '1s'; s++;
// // console.log(s);NaN
// // var a;
// // console.log(typeof a);undefined

// // How many grams weight 1.2kg of bananas?
// var kg= 1.2;
// var grams = kg * 1000;
// console.log(grams);

// // How many extra seconds we wait for our friend Anna who is being late for 5 minutes? What
// // about Tom who is being late half an hour? It is hard to be on time these days…

// var annaLate=5;
// var tomLate=30;
// var second=60;

// var waitAnna=  annaLate *second;
// var waitTom = tomLate * 60;

// console.log('We waith Anna ' + waitAnna + ' extra seconds', 'We wait Tom ' + waitTom + ' extra secons');

// // How many MB of additional memory we have if we buy a 4GB USB stick? How many news articles each in size 98KB can fit in it?

// var usbgb = 4;
// var mb = 4*1000;
// var kb = 98;
// var newsArticles = mb / kb;
// console.log('We have '+ mb + ' mb  additional memory');
// console.log(newsArticles.toFixed(2) + ' news articles can fit');

// // Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?

// a *= a;
// b += 3;
// c /= 5;
// d -= 7;

//  Create the following variables:
// - a variable containing your name,
// - a variable containing your age,
// - a variable describing if you have a cat or not.
// * Each variable has to start with a different type of character.
// Print them all out in the console and check their types.

// var myname = 'Sandra';
// var age = 35;
// var cat = false;

// console.log(typeof myname);
// console.log(typeof age);
// console.log(typeof cat);

// Check which type are these values:
// - “number” -string
// - true - boolean
// - null -null
// - “false” -string
// - 56 - number

// Write down what the following statements will return. Try to figure this out before putting the commands in the chrome console.

// 2 == "2"; -true
// 2 === 2; -true
// 10 % 3; number 
// 10 % 3 === 1; true (deljiv je sa jedan)
// true && false; -false
// false || true; -true
// true || false; -true


// Check how good you are at guessing the Boolean equivalent of different values using the
// // console. Do you remember how to check for a Boolean equivalent of a value?
// console.log(typeof true); //  "boolean"
// console.log(typeof false); //  "boolean"
// console.log(typeof null); //  "object"
// console.log(typeof []); //  "object"
// console.log(typeof {}); //  "object"
// console.log(typeof ''); //  "string"
// console.log(typeof 0); //  "number"
// console.log(true) // true
// console.log(typeof true) // boolean
// console.log(typeof true === "boolean") // true

// console.log(false) // false
// console.log(typeof false) // boolean
// console.log(typeof false === "boolean") // true

// // Truth values evaluate to true
// console.log(typeof []) // object
// console.log(Boolean([])) // true
// console.log(typeof Boolean([])) // boolean

// // Falsy values evaluate to false
// console.log(typeof "") // string
// console.log(Boolean("")) // false
// console.log(typeof Boolean([])) // boolean

// // falsy values: false, 0, -0, 0n, null, undefined, NaN, and the empty string ""
// console.log(Boolean(false)) // false
// console.log(Boolean(0)) // false
// console.log(Boolean(-0)) // false
// console.log(Boolean(0n)) // false
// console.log(Boolean(null)) // false
// console.log(Boolean(undefined)) // false
// console.log(Boolean(NaN)) // false
// console.log(Boolean("")) // false
// console.log(typeof Boolean("")) // boolean

// // truthy values: true, 1, -1, 1n, -1n, Infinity, -Infinity, " ", {}, []
// console.log(Boolean(true)) // true
// console.log(Boolean(1)) // true
// console.log(Boolean(-1)) // true
// console.log(Boolean(1n)) // true
// console.log(Boolean(-1n)) // true
// console.log(Boolean(Infinity)) // true
// console.log(Boolean(-Infinity)) // true
// console.log(Boolean(" ")) // true
// console.log(Boolean({})) // true
// console.log(Boolean([])) // true
// console.log(typeof Boolean([])) // boolean

// Use the console to check the results you think should go in the following table:

// console.log(true && true) *****true*****
// console.log(true && false) false
// console.log(false && true) false
// console.log(false && false) false

// console.log(true || true);true
// console.log(true || false); true
// console.log(false || true); true
// console.log(false || false); *****false****
