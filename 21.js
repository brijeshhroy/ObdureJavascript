/*
21. Write a C program to input electricity unit charges and
calculate total electricity bill according to the given condition:
For first 50 units Rs. 0.50/unit
For next 100 units Rs. 0.75/unit
For next 100 units Rs. 1.20/unit
For unit above 250 Rs. 1.50/unit
An additional surcharge of 20% is added to the bill
*/
const prompt = require('prompt-sync')();

var a = Number((prompt("Enter the total units :- ")));

if(a>250)
{
    x = 1.5*(a-250) + 100*1.95 + 50*0.5;
    
}
else if (a<=250 && a>150)
{
    x = 50*0.5 + 0.75*100 + (a-150)*1.2 ;

}


else if (a<=150 && a>50)
{
   x = 50*0.5  + 0.75*(a-50);
}
else if (a<=50)
{
    x = a*0.5 ;

}

console.log("Total bill is " , 1.2*x);