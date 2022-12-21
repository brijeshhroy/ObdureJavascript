// 11. Write a C program to input week number and print week day.

const prompt = require('prompt-sync')();

var a = Number((prompt("Enter the day :- ")));       // if not adding Number then we need to put all digits inside upper quote in switch case

switch(a)
{
   case 1 :
    console.log("Monday");
    break ;

   case 2 :
    console.log("Tuesday");
    break ;


   case 3 :
    console.log("Wednesday");
    break ;

   
   case 4 :
    console.log("Thursday");
    break ;

   case 5 :
    console.log("Friday");
    break ;

   case 6 :
    console.log("Saturday");
    break ;

  case 7 : 
  console.log("Sunday")
  break ;

  default :
   console.log("Either the input is greater than 7 or it is a string");

}