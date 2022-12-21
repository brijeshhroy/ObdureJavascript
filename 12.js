// 12. Write a C program to input month number and print number of days in that month.

const prompt = require('prompt-sync')();

var a = Number((prompt("Enter the day :- ")));       

switch(a)
{
   case 1 : case 3 : case 5 : case 7 : case 8 : case 10 : case 12 :
    console.log("31 days") ;
    break ;

   case 2 : case 4 : case 6 : case 9 : case 11 :
    console.log("31 days") ;
     break ;


     default :
   console.log("Either the input is greater than 12 or it is a string");

}