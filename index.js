// // conditions
// // ***  if
// // var result = '';

// // var a = 3;

// // if(a > 2) {
// //   result = a + ' is greater than 2';
// // }
// // console.log(result);

// // *** else
// var result = '';

// a = 3;

// if (a > 2) {
//   result = a + ' is greater then 2';
// } else {
//   result = a + ' is not gretaer then 2';
// }
// console.log(result);

// var result = '';

// var b = 1;

// if (b > 2) {
//   result = b + ' is greater then 2';
// } else {
//   result = b + ' is not greater then 2';
// }
// console.log(result);

// var result = '';
// c = 0;
// d = 1;

// // *** else if
// if (c > 2 || c < -2) {
//   result = ' c is not between -2 and 2 ';
// } else if (c === 0 && d === 0) {
//   result = ' both are zero';
// }else if(c === d) {
//   result=' c and d is equal';
// }else {
//   result= 'I give up'
// }
// console.log(result);

// var result ='';
// f = 1;
// e=3;

// if( f === 1) {
//   if(e === 2) {
//     result=' f is 1 e is 2';
//   }else {
//     result=' f is 1 but e is not 2 ';
//   }
// }else {
//   result='No result'
// }
// console.log(result);

// //*** Checking if a Variable Exists

// result='';

// if (typeof house !== "undefined") {
//   result='yes';
// }
// console.log(result);

//**********                          EXERCISES 1                                        ********// 
// 1. Write a program that compares two numbers and display the larger. Result should be
// displayed in the console.

// result='';
// var one = 49;
// var two = 55;

// if(one > two) {
//   result = 'one is larget then two';
// }else {
//   result =' two is larger then one';
// }
// console.log(result);

// 2.Write a program to check if the number is divisible by 2. If it
// is, print even, if not, print odd. Sample numbers: 3, 4, 9 (check one at the time)
// Output: odd, even, odd

// result='';
// var a=3;
// var b=4;
// var c=9;

// if ( a % 2 === 0) {
//   result= a +  ' is divisible with 2 *even*';
// }else if (b % 2 === 0) {
//   result= b +  ' is divisible with 2 *even*';
// }else if (c % 2 === 0) {
//   result= a +  ' is divisible with 2 *even*';
// }else {
//    result= ' is not divisible with 2 *odd*';
// }
//  console.log(result);

// 3.Write a program to check if the number is divisible by 3 and 5.
// If it is, print that number. Sample numbers: 15, 12 (check one at the time)
// Output: 15

// result ='';
// var a =15;
// var b = 12;

// if (a % 3 === 0) {
//   console.log(a);
// }else if (a % 5 === 0 {
//   console.log(a);
// }

// if (b % 3 === 0) {
//   console.log(b);
// }else if (b % 5 === 0 {
//   console.log(b);
// }

// 4.Write a conditional statement to find the sign of product of three numbers. Display the
// result in the console with the specified sign. Sample numbers: 3, -7, 2
// Output: The sign is -

// var a = 3;
// var b = -7;
// var c = 2;

// if(a > 0 && b > 0 && c > 0) {
//   console.log('this sign is +')
// }else if (a < 0 && b < 0 && c < 0) {
//   console.log('this sign is -');
// }else if ( a > 0 && b < 0 && c < 0) {
//   console.log('this sign is +')
// } else if (a < 0 && b > 0 && c < 0) {
//   console.log('this sign is +')
// }else {
//   console.log('this sign is -');
// }

// // 5. Write a program to check if the variable is a number. If it’s a number, check if it is divisible by 2.
// //  If it is, print the result, if not, show “X” Sample numbers: 10 | 7 (check one at the time)
// // Output: 10 / 2 = 5 | X

// var number = 10;
// var result = number / 2;

// if(10 % 2 === 0) {
//   console.log(result);
// }else{
//   console.log('X');
// }

// 6.Write a conditional statement to find the largest of five numbers. Display the result in console.
// Sample numbers: -5, -2, -6, 0, -1
// Output: 0

// a=-5;
// b=-2;
// c=-6;
// d= 0;
// f=-1;

// if (a>b && a>c && a>d && a>f) {
//   console.log(a);
// }else if (b>a && b>c && b>d && b>f) {
//   console.log(b);
// }else if (c>a && c>b && c>d && c>f) {
//   console.log(c);
// }else if (d>a && d>b && d>c && d>f) {
//   console.log(d);
// }else {
//   console.log(f);
// }

// 7.Write a conditional statement to sort three numbers. Sample numbers : 0, -1, 4
// Output : 4, 0, -1

// var x = 0;
// var y = -1;
// var z = 4;
// if (x > y && x > z) {
//   if (y > z) {
//     console.log(x + ', ' + y + ', ' + z);
//   } else {
//     console.log(x + ', ' + z + ', ' + y);
//   }
// } else if (y > x && y > z) {
//   if (x > z) {
//     console.log(y + ', ' + x + ', ' + z);
//   } else {
//     console.log(y + ', ' + z + ', ' + x);
//   }
// } else if (z > x && z > y) {
//   if (x > y) {
//     console.log(z + ', ' + x + ', ' + y);
//   } else {
//     console.log(z + ', ' + y + ', ' + x);
//   }
// }

//**********                          EXERCISES 2                                        ********// 

// Task 1. Write a conditional statement to find the sign of product of three numbers. Display the
// result in the console with the specified sign.
// Sample numbers: 3, -7, 2
// Output: The sign is -

// var x=3;
// var y=-7;
// var z=2;
// if (x>0 && y>0 && z>0)
// {
//        alert("The sign is +");
// }
// else if (x<0 && y<0 && z<0)
//         {
//           console.log("The sign is -");
//         }
//         else if (x>0 && y<0 && z<0)
//         {
//           console.log("The sign is +");
//         }
//         else if (x<0 && y>0 && z<0)
//         {
//           console.log("The sign is +");
//         }
//         else
//         {
//           console.log("The sign is -");
//         }

// Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the console.
// Sample numbers: -5, -2, -6, 0, -1
// Output: 0