//10. Write a C program to check whether a character is uppercase or lowercase alphabet.

const prompt = require('prompt-sync')();

var a = (prompt("Enter the Input :- "));

b = a.toUpperCase();

if ( a==b)
console.log("Capital");
else
console.log("Lower");