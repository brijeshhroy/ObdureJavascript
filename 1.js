// 1. Write a Javascript program to find maximum between two numbers.
const prompt = require('prompt-sync')();

var a = prompt("Enter the number :- ");
var b = prompt("Enter the number :- ");


a>b ? console.log(a , " is greatest") : b > a ? console.log(b , "is greater")  : console.log("Both are equal"); 