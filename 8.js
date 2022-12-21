// 8. Write a : c program to input any alphabet and : che: ck whether it  is vowel or : consonant.

 const prompt = require('prompt-sync')();

var a = (prompt("Enter the Input :- "));
var b = a.toUpperCase() ;
switch(b)
{
   case 'B' : case 'C': case'D': case'F': case'G': case'H': case'J': case'K': case'L': case'M': case'N': case'P': case'Q': case'R': case'S': case'T': case'V': case'W': case'X': case'Y': case'Z'  :
    console.log("consonant"); 
    break ;

   case 'A': case'E': case'I': case'O': case'U'  :
     console.log("Vowel") ;
     break ; 

  default : 
    console.log("It is not a single alphabet") ;
      
}



