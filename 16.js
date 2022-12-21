// 16. Write a C program to check whether the triangle is equilateral, isosceles or scalene triangle.

const prompt = require('prompt-sync')();

var a = Number((prompt("Enter the angle :- ")));

var b = Number((prompt("Enter the angle :- ")));

var c = Number((prompt("Enter the angle :- ")));


if(a==b && b==c && c==a )
console.log("equilteral")

else if ( a==b || b==c || c==a)
console.log("Isoceles");

else 
console.log("scalene");