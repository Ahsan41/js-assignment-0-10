// Question 1
// Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”
var cityName = prompt("Enter name of city.");

if (cityName == "Karachi") {
    document.write("Welcome to city of Lights." + "<br>" + "<br>");
}
else if (cityName == "Lahore") {
    document.write("Welcome to heart of Pakistan." + "<br>" + "<br>");
}
else if (cityName == "Peshawar") {
    document.write("Welcome to city of Flower." + "<br>" + "<br>");
}
else if (cityName == "Multan") {
    document.write("Welcome to city of Saints." + "<br>" + "<br>");
}
else if (cityName == "Skardu") {
    document.write("Welcome to the land of Piece, Beauty, Love and Mountain." + "<br>" + "<br>");
}
else {
    document.write("Welcome to " + cityName + "<br>" + "<br>");
}

// Question 2
// Write a program to take “gender” as input from user. If the
// user is male, give the message: Good  Sir. If the 
// user is female, give the message: Good MorninMa’am

var gender=prompt("what is your gender");
if(gender == "male"){
    document.write(`welcome sir <br>`)
}
else if(gender == "female"){
    document.write(`welcome sir <br>`)
}
else{
    document.write(`welcome <br>`)
}

// Question 3
// Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:

var trafficSignal=prompt(`enter traffic signal color `)
if(trafficSignal=="red"){
    document.write(`must stop <br>`)
}
else if(trafficSignal == "yellow"){
    document.write(`Ready to move <br>`)
}
else if(trafficSignal=="green"){
    document.write(`move now <br>`)
}

// Question 4
// Write a program to take input remaining fuel in car (in 
// litres) from user. If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car”
var petrol = prompt("Enter remaining fuel.");
if (petrol < "0.25") {
    document.write("Please refill the fuel in your car." + "<br>" + "<br>");
}
else{
    document.write("It's Okey" + "<br>" + "<br>");
}
// Question 5
// . Run this script, & check whether alert message would be
// displayed or not. Record the outputs

// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// User Input & Conditional Statement | JAVASCRIPT
// Page 2 of 4
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// f. if("car" < "cat"){
// alert("car is smaller than cat")

var a = 4;
 if (++a === 5){
 alert("given condition for variable a is true");
 }

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
alert("car is smaller than cat")
}

/*                  Question-07. 
Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”.*/

var num = 5;
var increment = num + 1;
var decrement = num - 1;
var gussNum = prompt("Enter a number");

if (num == gussNum) {
    document.write("Bingo! Correct answer" + "<br>" + "<br>");
}
else if (gussNum == increment) {
    document.write("Close enough to the correct answer" + "<br>" + "<br>");
}
else if (gussNum == decrement) {
    document.write("Close enough to correct answer" + "<br>" + "<br>");
}
else{
    document.write("OOP! incorrect answer" + "<br>" + "<br>");
}
 
// Question 8
// Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number 
// is divisible by 3.
let number = prompt("Enter a number");
if (number % 3 == 0) {
    document.write("The given number is divisiable by 3." + "<br>" + "<br>");
}
else {
    document.write("The given number is not divisiable by 3." + "<br>" + "<br>");
}

// Question 9

// Write a program that checks whether the given input is an
// even number or an odd number
let num=prompt(`enter a number`)
if(num%2==0){
    document.write(`the given number is even`)

}
else{
    document.write(`the given number is odd`)
}






/*                  Question-10. 
Write a program that takes temperature as input and 
shows a message based on following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.”*/

let temp = prompt("Enter temperature");
if (temp > 40) {
    document.write("It is too hot outside." + "<br>" + "<br>")
}
else if (temp > 30) {
    document.write("The weather today is normal." + "<br>" + "<br>");
}
else if (temp > 20) {
    document.write("Today's weather is cool." + "<br>" + "<br>");
}
else {
    document.write("OMG! Today's weather is so cool." + "<br>" + "<br>");
}

 