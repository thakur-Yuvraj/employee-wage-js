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

// UC3: Refactor code using function
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

console.log("UC3 - Emp Wage using function: " + calcDailyWage(empHrs));

// UC4: Calculate Monthly Wage assuming 20 Working Days
const NUM_OF_WORKING_DAYS = 20;
let totalEmpWage = 0;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpWage += calcDailyWage(getWorkingHours(empCheck));
}
console.log("UC4 - Total Employee Wage for a Month: " + totalEmpWage);
