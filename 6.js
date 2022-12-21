// 6. Write a C program to check whether a year is leap year or not.
const prompt = require('prompt-sync')();

var a = Number(prompt("Enter the number :- "));

if(a%4 == 0)
console.log("Leap Year");
else
console.log("Not leap");
