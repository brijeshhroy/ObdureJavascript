// 4. Write a C program to check whether a number is divisible by 5 and 11 or not.

const prompt = require('prompt-sync')();

var a = Number(prompt("Enter the number :- "));

var x = a%55 ;

if(x==0)
console.log("Divisble")
else
console.log("Not divisble");