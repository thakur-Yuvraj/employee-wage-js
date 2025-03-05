// UC1: Check if Employee is Present or Absent
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("Employee is Absent");
} else {
    console.log("Employee is Present");
}

// UC2: Calculate Daily Employee Wage based on Part-time or Full-time
const PART_TIME = 1;
const FULL_TIME = 2;
const WAGE_PER_HOUR = 20;

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case PART_TIME: return 4;
        case FULL_TIME: return 8;
        default: return 0;
    }
}

let empHrs = getWorkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("UC2 - Emp Wage: " + empWage);
