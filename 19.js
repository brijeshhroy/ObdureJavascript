/*

19. Write a C program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer.
 Calculate percentage and grade according to following:
Percentage >= 90% : Grade A
Percentage >= 80% : Grade B
Percentage >= 70% : Grade C
Percentage >= 60% : Grade D
Percentage >= 40% : Grade E
Percentage < 40% : Grade F

*/
const prompt = require('prompt-sync')();

var a = Number((prompt("Enter the marks in Phy :- ")));

var b = Number((prompt("Enter the marks in Chem :- ")));

var c = Number((prompt("Enter the marks in bio :- ")));

var d = Number((prompt("Enter the marks in Mat :- ")));

var e = Number((prompt("Enter the marks in Comp :- ")));

var f = (a+b+c+d+e)/5 ;

if(f<40)
console.log("Grade is F");
else if (f >=90)
console.log("Grade is A");
else if (f>=80)
console.log("Grade is B");
else if (f>=70)
console.log("Grade is C");
else if (f>=60)
console.log("Grade is D");
else if (f>=40)
console.log("Grade is E");








