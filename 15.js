// 15. Write a C program to input all sides of a triangle and check whether triangle is valid or not.

const prompt = require('prompt-sync')();

var a = Number((prompt("Enter the side :- ")));

var b = Number((prompt("Enter the side :- ")));

var c = Number((prompt("Enter the side :- ")));

if ( (a+b > c) &&  (b+c > a) && (c+a > b))
console.log("it is a traingle");
else
console.log(" No ,It is not a traingle")