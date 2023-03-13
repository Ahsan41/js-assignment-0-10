// question 1
// Write a program that take two numbers & add them in a new 
// variable. Show the result in your browser
var num1=109
var num2=233
var add=num1+num2
document.write(`the sum of ${num1} or ${num2} is ${add}`)

// Question 2
// Repeat task1 for subtraction, multiplication, division & 
// modulus. E.g

var num1=109
var num2=233
var sub=num1-num2
var product=num1*num2
var division=num1%num2


document.write(`the sub of ${num1} or ${num2} is ${sub}`)
document.write(`the product of ${num1} or ${num2} is ${product}`)
document.write(`the division of ${num1} or ${num2} is ${division} "<br>"`)


// Question 3
// Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value 
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial 
// value: 3”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value 
// after increment is: 4”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value 
// after addition is: 11”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value 
// after decrement is: 10”.
// k. Show the remainder after dividing the variable’s value by 
// 3. Output : “The remainder is : 1”


var value=
document.write(value + "<br>")

var value=5
document.write(`intial value is ${value}+ "<br>"`)

var increment = ++value;
document.write(`the value after increment is ${increment}+ "<br>"`)

var add = increment + 7
document.write(`the value after addition is ${add}`+ "<br>")

var decrement=--add
document.write(`the value after decrement is ${decrement}`+ "<br>")

var remainder=decrement%4
document.write(`the remainder is ${remainder}`+ "<br>")

/*                  Question-04:
Cost of one movie ticket is 600 PKR. Write a script to 
store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. 
Example output:*/

var costofTicket = 600;
var costof5Tickets = costofTicket * 5;
document.write("Total cost to buy 5 tickets to a movie is: " + costof5Tickets + "PKR" + "<br>" + "<br>");

/*                  Question-05:
Write a script to display multiplication table of any 
number in your browser.*/

var number = 4;
var one = number * 1;
var two = number * 2;
var three = number * 3;
var four = number * 4;
var five = number * 5;
var six = number * 6;
var seven = number * 7;
var eight = number * 8;
var nine = number * 9;
var ten = number * 10;
document.write("4 * 1 = " + one + "<br>");
document.write("4 * 2 = " + two + "<br>");
document.write("4 * 3 = " + three + "<br>");
document.write("4 * 4 = " + four + "<br>");
document.write("4 * 5 = " + five + "<br>");
document.write("4 * 6 = " + six + "<br>");
document.write("4 * 7 = " + seven + "<br>");
document.write("4 * 8 = " + eight + "<br>");
document.write("4 * 9 = " + nine + "<br>");
document.write("4 * 10 = " + ten + "<br>" + "<br>");


/*                  Question-06:
The Temperature Converter: It’s hot out! Let’s make a 
converter based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “NNoC is NNoF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “NNoF is NNoC”.
Conversion Formulae:*/

var tempCelsius = 25;
var tempFahrenheit = (tempCelsius * 9 / 5) + 32;
document.write(`${tempCelsius}celsius is ${tempFahrenheit}farhenheit<br>`);

var tempFahranheit = 77;
var tempCelsius = (tempFahranheit - 32) * 5 / 9;
document.write(`${tempFahranheit}farhranheit is ${tempCelsius}°C<br><br>`)


/*                  Question-07:
Write a program to implement checkout process of a 
shopping cart system for an e-commerce website. Store 
the following in variables
a. Price of item 1
b. Price of item 2
c. Ordered quantity of item 1
d. Ordered Quantity of item 2
e. Shipping charges
Compute the total cost & show the receipt in your browser.*/

const price_item_1 = 650;
document.write("Price of item-1 is: " + price_item_1 + "<br>");

const quantity_item_1 = 3;
document.write("Quantity of item-1 is: " + quantity_item_1 + "<br>");

const item_1 = quantity_item_1 * price_item_1;

const price_item_2 = 100;
document.write("Price of item-2 is: " + price_item_2 + "<br>");

const quantity_item_2 = 7;
document.write("Quantity of item-2 is: " + quantity_item_2 + "<br>");

const item_2 = quantity_item_2 * price_item_2;
const shipping_charges = 100;
const total_cost = item_1 + item_2 + shipping_charges;
document.write("Total cost of your order is: " + total_cost + "<br>" + "<br>");

// Question 8
// Write a script to take total marks & marks obtained by a 
// student. Compute the percentage & show the result in your 
// browser
var totalnumber = 800
document.write(`the total number is ${totalnumber} <br>`)
var marksObtain = 650
document.write(`the marks obtain by a student is ${marksObtain}<br>`)
var percentage=(marksObtain%totalnumber)*100
document.write(`the percentage of student is ${percentage}<br>`)

// Question 9
// Assume we have 10 US dollars & 25 Saudi Riyals. Write a script 
// to convert the total currency to Pakistani Rupees. Perform all 
// calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104 Pakistani Rupee and 
// 1 Saudi Riyal = 28 Pakistani Rupee
document.write("Total currency in PKR: " + (10 * 269.50 + 25 * 71.81) + "<br>" + "<br>");
// Question 9
var calculations=5+10%2
alert(calculations)

/*                  Question-11:
The Age Calculator: Forgot how old someone is? 
Calculate it!
a. Store the current year in a variable.
b. Store their birth year in a variable.
c. Calculate their 2 possible ages based on the stored 
values.
Output them to the screen like so: “They are either NN or NN
years old”.*/

const currentYear = 2023;
const birthYear = 1999;
const age = currentYear - birthYear;
document.write("You are : " + age +"years old." + "<br>" + "<br>");


//                 Question-13:
// The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”. 

var snack = "zinger ";
var currentAge = 18;
var maxAge = 50;
var snackPerDay = 2;
var totalAge = maxAge - currentAge;
var snackPerYear = 365 * snackPerDay;
var snack_In_Whole_Life = snackPerYear * totalAge;
document.write(`you will need a ${snack_In_Whole_Life} ${snack}in your whole life for enjoy`)


