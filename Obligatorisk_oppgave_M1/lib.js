let isDateValid = false;              //valid means if something is in the right position
function strVar(date) {
    const dotPos1 = date.indexOf('.'); //finds the first dot position
    const dotPos2 = date.lastIndexOf('.'); //finds the second dot position
    let validYear = parseInt(date.substring(6)); //finds year position
    let validMonth = parseInt(date.substring(3, 5)); //finds month position
    let validDay = parseInt(date.substring(0, 2)); //finds day position
    
    isDateValid = txtLenght(date); //check if the text lenght is 10
    
    isDateValid = isDotPosValid(dotPos1, dotPos2); // check if dot is valid

    isDateValid = isYearValid(validYear); //check if year is valid
    
    isDateValid = isMonthValid(validMonth); //check if month is valid

    isDateValid = isThisDayValid(validYear, validMonth, validDay); //checks if date is legal

    return isDateValid;
}
function txtLenght(date) {                                                //function to add a check for text lenght 
    return date.length == 10 ? true : false;
}
function isDotPosValid(dotPos1, dotPos2) {                                //function to add valid dot positions
    return isDateValid == true && dotPos1 == 2 && dotPos2 == 5 ? true : false;
}
function isDay30Max(validMonth) {                                         //function to check if its not february
    return isDateValid == true && validMonth != 2 ? true : false
}
function isDay31Max(validMonth) {                                         //function to check if its not 2, 4, 6, 9, or 11 month
    return isDateValid == true && validMonth != 2 && validMonth != 4 && validMonth != 6 && validMonth != 9 && validMonth != 11 ? true : false
}
function isLeapYear(validYear, validMonth, validDay) {                    //function to add a check for leapYear
let isItLeapYear = ((validYear % 4 == 0) && (validYear % 100 != 0)) || (validYear % 400 == 0);
    return isDateValid == true && validDay == 29 && validMonth == 2 && isItLeapYear == true ? true : false;
}
function isYearValid(validYear) {                                         //function to add validYear
    return isDateValid == true && validYear >= 0 && validYear <= 9999 ? true : false;
}
function isMonthValid(validMonth) {                                       //function to add validMonth
    return isDateValid == true && validMonth >= 1 && validMonth <= 12 ? true : false;
}
function isThisDayValid(validYear, validMonth, validDay) {               //function to add a check for days depending on month
    return isDateValid == true && validDay >= 1 && validDay <= 31 && isDay31Max(validMonth) ||
    validDay >= 1 && validDay <= 30 && isDay30Max(validMonth) ||
    validDay >= 1 && validDay <= 28 && validMonth == 2 ||
    isLeapYear(validYear, validMonth, validDay) ? true : false;
}



