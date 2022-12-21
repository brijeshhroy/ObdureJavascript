const prompt = require('prompt-sync')();

var a = Number((prompt("Enter the COST PRRICE :- ")));

var b = Number((prompt("Enter the SELLING PRICE :- ")));

if(a<b)
console.log("The profit percentage is :- " ,((b-a)/a)*100 );
else if (a>b)
console.log("The loss percentage is :- " , ((a-b)/a)*100 );
else
console.log("There is no profit no loss");
