// 14. Write a C program to input angles of a triangle and check whether triangle is valid or not.

const prompt = require('prompt-sync')();

var a = Number((prompt("Enter the angle :- ")));

var b = Number((prompt("Enter the angle :- ")));

var c = Number((prompt("Enter the angle :- ")));

(a+b+c >= 180)  ? console.log("It is a trainge")  :  console.log(" No ,It is not a traingle") ;