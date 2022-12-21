// 13. Write a C program to count total number of notes in given amount.

const prompt = require('prompt-sync')();

var a = Number((prompt("Enter the amount :- ")));       

var b = Math.floor(a/2000);
a = a - b*2000 ;

if ( b != 0)

console.log("Amount is having " + b + " notes of 2000");

b = Math.floor(a/500);
a = a - b*500 ;

if ( b != 0)

console.log("Amount is having " + b + " notes of 500");

b = Math.floor(a/200);
a = a - b*200 ;

if ( b != 0)

console.log("Amount is having " + b + " notes of 200");

b = Math.floor(a/100);
a = a - b*100 ;

if ( b != 0)

console.log("Amount is having " + b + " notes of 100");

b = Math.floor(a/50);
a = a - b*50 ;

if ( b != 0)

console.log("Amount is having " + b + " notes of 50");

b = Math.floor(a/20);
a = a - b*20 ;

if ( b != 0)

console.log("Amount is having " + b + " notes of 20");

b = Math.floor(a/10);
a = a - b*10 ;

if ( b != 0)

console.log("Amount is having " + b + " notes of 10");

b = Math.floor(a/5);
a = a - b*5 ;

if ( b != 0)

console.log("Amount is having " + b + " notes/coins of 5");


b = Math.floor(a/2);
a = a - b*2 ;

if ( b != 0)

console.log("Amount is having " + b + " coins of 2");

b = Math.floor(a);  
a = a - b ;
console.log(a);

if ( b != 0)

console.log("Amount is having " + b + " coins of 1");


if( a != 0)            // checking for paise
console.log("Amount is having " + a + "rupees");



















