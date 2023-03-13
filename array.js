// Question 1
// Declare an empty array using JS literal notation to store 
// student names in future
var array=[]

// Question 2
// Declare an empty array using JS object notation to store 
// student names in future

var empty=[]

// Question 3
// Declare and initialize a strings array.

var names=["ahsan","asad","meesum","shoaib"]

document.write(names)

// Question 4
// Declare and initialize a numbers array.

var num=[1,2,3,4,5,6]
document.write(num)

// question 5
// Declare and initialize a boolean array.

// var boolean=







// Qustion 6
// Declare and initialize a mixed array.

var mixedArray=["ahsan","hanan", 5,6]
document.write(`${mixedArray}`)

// Question 7
// Declare and Initialize an array and store available mobile 
// networks in Pakistan

var mobNetwork=["jazz","zong","ufone","telenor"]

document.write(mobNetwork)

// Question 8
// Declare and Initialize an array and store available education 
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, 
// M. Phil., PhD). Show the listed qualifications in your browser 
// like

var educationQualification=["SSC","HSC","BCS","BS","MS"]
document.write(educationQualification)


/*              Question-08. 
Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students like:*/

var students_3 = ["Adnan ", "Ahmad ", "Omair"];
var obtained_marks = [475, 423, 395];
var total_marks = 500;
var percentage_1 = (obtained_marks[0] / total_marks) * 100;
var percentage_2 = (obtained_marks[1] / total_marks) * 100;
var percentage_3 = (obtained_marks[2] / total_marks) * 100;

document.write(`Score of ${students_3[0]} is: ${obtained_marks[0]}. Percentage: ${percentage_1}%` + "<br>");
document.write(`Score of ${students_3[1]} is: ${obtained_marks[1]}. Percentage: ${percentage_2}%` + "<br>");
document.write(`Score of ${students_3[2]} is: ${obtained_marks[2]}. Percentage: ${percentage_3}%` + "<br>" + "<br>");
