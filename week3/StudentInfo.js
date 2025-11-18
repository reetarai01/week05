// Local module StudentInfo.js

// variable
const dateofBirth = "12/12/1980";

// function to get student name
const getStudentName = () => {
    return "write your name here";
}

// function to get campus name
const getCampusName = () => {
    return "UEL Campus";
}

// export functions & variable
exports.getName = getStudentName;
exports.Location = getCampusName;
exports.dob = dateofBirth;

// export function with parameter
exports.Studentgrade = (marks) => {
    if (marks > 50 && marks < 70) {
        return "B grade";
    } else {
        return "A grade";
    }
}
