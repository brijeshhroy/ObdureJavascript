// 3. Write a C program to check whether a number is negative, positive or zero 
const prompt = require('prompt-sync')();

var a = Number(prompt("Enter the number :- "));

a>0 ? console.log("Positive") : a<0 ? console.log("Negative") :console.log("Zero") ;