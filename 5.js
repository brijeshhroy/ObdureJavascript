// 5. Write a C program to check whether a number is even or odd.

const prompt = require('prompt-sync')();

var a = Number(prompt("Enter the number :- "));

var x = a%2 ;

if(x==0)
console.log("Even")
else
console.log("Odd");
