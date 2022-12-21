//2. Write a Javascript program to find maximum between three numbers.
const prompt = require('prompt-sync')();

var a = Number(prompt("Enter the number :- "));
var b = Number(prompt("Enter the number :- "));
var c = Number(prompt("Enter the number :- "));

if (a>b && a>c)
console.log("a is greatest");
else if(b>a && b>c)
console.log("b is greatest");
else if (c>a && c>b)
console.log("c is greatest");
else if (c==a && c==b )
console.log("All are equal");
else if (b==a  )
console.log("a and b are greatest");
else if (c==a  )
console.log("a and c are greatest");
else if ( c==b )
console.log("b and c are greatest");





