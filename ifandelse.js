// // Question 2
// // Write a JavaScript program that accept two integers and
// // display the larger. Also show if the two integers are equal.

// // let num1=prompt(`enter a number`)
// // let num2=prompt(`enter a number`)

// // if(num1==num2){
// //     document.write(`both integers are equal<br>`)
// // }
// // else if(num1>num2){
// //     document.write(`integers are not equal<br>`)
// // }
// // else if(num1<num2){
// //     document.write(`integers are not equal <br>`)
// // }
// // Question 3
// // Write an if/else statement with the following condition:
// // If the variable age is greater than 18, output "Old enough", 
// // otherwise output "Too young"
// // var age=prompt(`enter your age `)
// // if(age>=18){
// //     document.write(`old enough <br>`)
// // }
// // else if(age<18){
// //     document.write(`too young <br>`)
// // }

// // Question 4
// // Write a program that prompts the user for their name, and then 
// // displays a special greeting to that person if their name is the 
// // same as yours. If the name entered by the user is anything 
// // other than your name, your code should not produce any 
// // output

// var myname=prompt(`enter your name`)
// if(myname=="ahsan"){
//     document.write(`hey bro! you have an same name as mine <br>`)
// }
// else{
//     document.write(`welcome plzz <br>`)
// }

// // Question 5
// // Write a program to check whether the given input number is 
// // divisible by 3 or not by using Switch Case statements. Show a 
// // message “Number is not divisible by 3” or “Number is divisible 
// // by 3”
// let number = prompt("Enter a number");
// if (number % 3 == 0) {
//     document.write("The given number is divisiable by 3." + "<br>" + "<br>");
// }
// else {
//     document.write("The given number is not divisiable by 3." + "<br>" + "<br>");
// }

// // Question 4 (do assignment h mix hore h )
// // Write a program that takes a character (i.e. string of 
// //     length 1) and returns true if it is a vowel, false otherwise*/
    
//     let alpha = prompt("Enter any alphabet.");
//     if (alpha == "a" || alpha == "e" || alpha == "i" || alpha == "o" || alpha == "u") {
//         document.write("true" + "<br>" + "<br>");
//     }
//     else if(alpha == "A" || alpha == "E" || alpha == "I" || alpha == "O" || alpha == "U") {
//         document.write("true" + "<br>" + "<br>");
//     }
//     else {
//         document.write("false" + "<br>" + "<br>");
//     }

    /*                  Question-06. 
This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";
}*/

var greeting;
var hour = Number(prompt("Enter time in 24 hours clock format."));
if (hour < 18) {
    document.write("Good day" + "<br>" + "<br>");
}
else {
    document.write("Good evening" + "<br>" + "<br>");
}

// Question 7
/*                  Question-07. 
Write a program that takes time as input from user in 24 
hours clock format like: 1900 = 7pm. Implement the 
following case using if, else & else if statements*/
 

let time = prompt("Enter time in 24 hours clock format");
if (time == 100) {
    document.write("Its 1am O'clock" + "<br>");
}
else if (time == 200) {
    document.write("Its 2am O'clock." + "<br>");
}
else if (time == 300) {
    document.write("Its 3am O'clock." + "<br>");
}
else if (time == 400) {
    document.write("Its 4am O'clock." + "<br>");
}
else if (time == 500) {
    document.write("Its 5am O'clock." + "<br>");
}
else if (time == 600) {
    document.write("Its 6am O'clock." + "<br>");
}
else if (time == 700) {
    document.write("Its 7am O'clock." + "<br>");
}
else if (time == 800) {
    document.write("Its 8am O'clock." + "<br>");
}
else if (time == 900) {
    document.write("Its 9am O'clock." + "<br>");
}
else if (time == 1000) {
    document.write("Its 10am O'clock." + "<br>");
}
else if (time == 1100) {
    document.write("Its 11am O'clock." + "<br>");
}
else if (time == 1200) {
    document.write("Its 12pm O'clock." + "<br>");
}
else if (time == 1400) {
    document.write("Its 2pm O'clock." + "<br>");
}
else if (time == 1500) {
    document.write("Its 3pm O'clock." + "<br>");
}
else if (time == 1600) {
    document.write("Its 4pm O'clock." + "<br>");
}
else if (time == 1700) {
    document.write("Its 5pm O'clock." + "<br>");
}
else if (time == 1800) {
    document.write("Its 6pm O'clock." + "<br>");
}
else if (time == 1900) {
    document.write("Its 7pm O'clock." + "<br>");
}
else if (time == 2000) {
    document.write("Its 8pm O'clock." + "<br>");
}
else if (time == 2100) {
    document.write("Its 9pm O'clock." + "<br>");
}
else if (time == 2200) {
    document.write("Its 10pm O'clock." + "<br>");
}
else if (time == 2300) {
    document.write("Its 11pm O'clock." + "<br>");
}
else if (time == 2400) {
    document.write("Its 12pm O'clock." + "<br>");
}
else {
    document.write("OOP!");
}