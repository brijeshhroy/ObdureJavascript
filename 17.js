//17. Write a C program to find all roots of a quadratic equation.

const prompt = require('prompt-sync')();

var a = Number((prompt("Enter the co-eficient of x**2 :- ")));

var b = Number((prompt("Enter the co-eficient of x :- ")));

var c = Number((prompt("Enter the constant :- ")));

var d = (b**2) - (4*a*c) ;
console.log(b**2)
console.log(4*a*c);
console.log(d);

var z = Math.sqrt(d);

if(d<0)
console.log("No real roots");
if(d == 0)
console.log("Square root is ", (-b/(2*a)));
if(d>0)
console.log("Square root are ", ((-b - z)/(a*2)) , " & ", ((-b + z)/(a*2)) );

