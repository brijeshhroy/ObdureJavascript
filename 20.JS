/*
20. Write a C program to input basic salary of an employee and
calculate its Gross salary according to following:
Basic Salary <= 10000 : HRA = 20%, DA = 80%
Basic Salary <= 20000 : HRA = 25%, DA = 90%
Basic Salary > 20000 : HRA = 30%, DA = 95%

*/
const prompt = require('prompt-sync')();

var a = Number((prompt("Enter the BASIC SALARY :- ")));

if (a<=10000)
{
    
   console.log("HRA is = " , 0.2*a);
   console.log("DA is = " , 0.8*a);
   console.log("Gross salary is = " , 2*a);


}
else if (a<=20000)
{
    console.log("HRA is = " , 0.25*a);
   console.log("DA is = " , 0.9*a);
   console.log("Gross salary is = " , 2.15*a);

}
else
{
    console.log("HRA is = " , 0.25*a);
    console.log("DA is = " , 0.9*a);
    console.log("Gross salary is = " , 2.25*a);
}