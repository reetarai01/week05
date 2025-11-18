// definition of the function EmployeeInfo
function EmployeeInfo(name, Salary) {
    console.log("Welcome " + name + " Your monthly salary is " + Salary);
}

console.log("This is my first programme");

var EmpName = "John";
var EmpSalary = 50000;

// calling EmployeeInfo function
EmployeeInfo(EmpName, EmpSalary);

// Arrow function from Exercise 2
const EmpSkills = (skills) => {
    console.log("Expert in " + skills);
}

EmpSkills("java");

// Importing local modules
const student = require('./StudentInfo');
const person = require('./Person');

// using functions from StudentInfo.js
console.log("Student Name: " + student.getName());
console.log(student.Location());
console.log(student.dob);
console.log("grade is " + student.Studentgrade(55));

// Creating new Person object
const person1 = new person("Jim", 35, "myemail@gmail.com");
console.log("Using Person Module:", person1.getPersonInfo());

console.log("Program ended");
