//9. Write a C program to input any character and check whether it  is alphabet, digit or special character.

const prompt = require('prompt-sync')();

var a = (prompt("Enter the Input :- "));

var b = a.toUpperCase();


if (a%a == 0 )
console.log("Number") ;
else  if ((b == 'A') || (b == 'B') || (b == 'C') || (b == 'D') || (b == 'E') || (b == 'F') || (b == 'G') || (b == 'H') ||
           (b == 'I') || (b == 'J') || (b == 'K') || (b == 'L') || (b=='M') || (b == 'N') || (b == 'O') || (b == 'P') ||
           (b == 'Q') || (b == 'R') || (b == 'S') || (b == 'T') || (b == 'U') || (b == 'V') || (b == 'W') || (b == 'X') ||
           (b == 'Y') || (b == 'Z') )
console.log("Alphabet");
else
console.log("Special Character");

