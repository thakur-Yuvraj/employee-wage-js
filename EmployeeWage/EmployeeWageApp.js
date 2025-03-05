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

// UC5: Calculate Wages till total Working Hours (160) or max days (20) is reached
const MAX_HRS_IN_MONTH = 160;
let totalEmpHrs = 0, totalWorkingDays = 0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
}
let finalEmpWage = calcDailyWage(totalEmpHrs);
console.log("UC5 - Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wage: " + finalEmpWage);

// UC6: Store Daily Wage along with Total Wage in an Array
let empDailyWageArr = [];
totalEmpHrs = 0;
totalWorkingDays = 0;

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

console.log("UC6 - Daily Wages: " + empDailyWageArr);

// UC7: Using Array Helper Functions for various operations
// (a) Calculate total Wage using forEach and reduce
let totEmpWage = 0;
empDailyWageArr.forEach(dailyWage => totEmpWage += dailyWage);
console.log("UC7A - Total Wage using forEach: " + totEmpWage);

console.log("UC7A - Total Wage using reduce: " +
    empDailyWageArr.reduce((total, wage) => total + wage, 0));

// (b) Show the Day along with Daily Wage using Map
let dailyCounter = 0;
let mapDayWithWage = empDailyWageArr.map(wage => `Day ${++dailyCounter} = ${wage}`);
console.log("UC7B - Daily Wage Map: " + mapDayWithWage);

// (c) Show Days when Full Time Wage (160) was earned using filter
let fullTimeDays = mapDayWithWage.filter(day => day.includes("160"));
console.log("UC7C - Full Time Wage Days: " + fullTimeDays);

// (d) Find first occurrence of Full Time Wage using find
let firstFullTime = mapDayWithWage.find(day => day.includes("160"));
console.log("UC7D - First Full Time Wage Day: " + firstFullTime);

// (e) Check if Every Element of Full Time Wage truly holds Full Time Wage
console.log("UC7E - Is every Full Time Wage really 160? " +
    fullTimeDays.every(day => day.includes("160")));

// (f) Check if there is any Part Time Wage
console.log("UC7F - Is there any Part Time Wage? " +
    mapDayWithWage.some(day => day.includes("80")));

// (g) Find number of days the Employee Worked
console.log("UC7G - Total Days Worked: " + empDailyWageArr.reduce((count, wage) => wage > 0 ? count + 1 : count, 0));

// UC7 (Refactored with Objects, Helper Functions, and Arrow Functions)
let empWageData = {
    dailyWageArr: [],
    dailyHoursArr: [],
    totalEmpHrs: 0,
    totalWorkingDays: 0
};

while (empWageData.totalEmpHrs <= MAX_HRS_IN_MONTH && empWageData.totalWorkingDays < NUM_OF_WORKING_DAYS) {
    empWageData.totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    empWageData.totalEmpHrs += empHrs;
    empWageData.dailyWageArr.push(calcDailyWage(empHrs));
    empWageData.dailyHoursArr.push(empHrs);
}

// (a) Calculate total Wage using reduce
let calcTotalWage = empWageData.dailyWageArr.reduce((total, wage) => total + wage, 0);
console.log("UC7A (Object) - Total Wage: " + calcTotalWage);

// (b) Show Day along with Daily Wage using Map
let dailyWageWithDay = empWageData.dailyWageArr.map((wage, index) => `Day ${index + 1} = ${wage}`);
console.log("UC7B (Object) - Daily Wage Map: " + dailyWageWithDay);

// (c) Show Days when Full Time Wage of 160 was earned using filter
let fullTimeWageDays = dailyWageWithDay.filter(day => day.includes("160"));
console.log("UC7C (Object) - Full Time Wage Days: " + fullTimeWageDays);

// (d) Find first occurrence when Full Time Wage was earned
let firstFullTimeDay = dailyWageWithDay.find(day => day.includes("160"));
console.log("UC7D (Object) - First Full Time Wage Day: " + firstFullTimeDay);

// (e) Check if Every Element of Full Time Wage is truly 160
console.log("UC7E (Object) - Is every Full Time Wage 160? " +
    fullTimeWageDays.every(day => day.includes("160")));

// (f) Check if there is any Part Time Wage
console.log("UC7F (Object) - Is there any Part Time Wage? " +
    dailyWageWithDay.some(day => day.includes("80")));

// (g) Find number of days the Employee Worked
let numOfDaysWorked = empWageData.dailyHoursArr.reduce((count, hours) => hours > 0 ? count + 1 : count, 0);
console.log("UC7G (Object) - Total Days Worked: " + numOfDaysWorked);
