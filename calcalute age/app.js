var day = parseInt(prompt("Enter your birth day (1-31):"), 10);
var monthInput = prompt("Enter your birth month (e.g., January, Jan, or 01):").toLowerCase();
var year = parseInt(prompt("Enter your birth year:"), 10);

var monthMap = {
    'january': 1, 'jan': 1, '1': 1,
    'february': 2, 'feb': 2, '2': 2,
    'march': 3, 'mar': 3, '3': 3,
    'april': 4, 'apr': 4, '4': 4,
    'may': 5, '5': 5,
    'june': 6, 'jun': 6, '6': 6,
    'july': 7, 'jul': 7, '7': 7,
    'august': 8, 'aug': 8, '8': 8,
    'september': 9, 'sep': 9, '9': 9,
    'october': 10, 'oct': 10, '10': 10,
    'november': 11, 'nov': 11, '11': 11,
    'december': 12, 'dec': 12, '12': 12
};

var month = monthMap[monthInput];

if (isNaN(day) || isNaN(month) || isNaN(year) || month === undefined || day < 1 || day > 31) {
    alert("Invalid input. Please ensure your day, month, and year are correct.");
} else {
    var birthDate = new Date(year, month - 1, day); 
    var today = new Date();

    var ageYears = today.getFullYear() - birthDate.getFullYear();
    var ageMonths = today.getMonth() - birthDate.getMonth();
    var ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); 
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12; 
    }

    document.write("Your Age is " + ageYears + " years, " + ageMonths + " months, and " + ageDays + " days!");
}
