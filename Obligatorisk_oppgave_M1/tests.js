let isValidDate = false;
function isThisDateValid(date) {
    isValidDate = dateLength(date); //Checks if the lengte of string is 10
    return isValidDate;
}
     function dateLength(date) {
    return date.length == 10 ? true : false;
}
     function isDotPosValid(txt) { //Check's if the dot's are in the correct place aka(first dot is Pos 2 and second dot is Pos 5)
     let firstDot = txt.indexOf('.');
     let secondDot = txt.lastIndexOf('.');
     if (firstDot == 2 && secondDot == 5){
          return true }
      else 
         { return false }
     }
     function isYearValid(validYear) {       //Check if year is valid
     let year = validYear.substring(6);
     let intYear = parseInt(year);
        if ( intYear >= 0 && intYear <= 9999) {
           return true
        } else
         { return false }
    }    
     function isMonthValid(validMonth) {     //Check if month is valid
        let dotPos = validMonth.lastIndexOf('.'); 
        let month = validMonth.substring(3, 5);
        let intMonth = parseInt(month);                      
        if (intMonth >= 0 && intMonth <= 13 && dotPos == 5) { 
           return true
        } else 
         { return false }
}
     function isDayValid(validDay) {         //Check if day is valid
        let dotPos = validDay.indexOf('.');
        let day = validDay.substring(0, 2); 
        let intDay = parseInt(day);
        if (intDay >= 0 && intDay <= 28 && dotPos == 2) {
           return true
        } else 
         { return false }
}
     function isLeapYear(chkLeapYear) {     //check if leap year is true
     let year = parseInt(chkLeapYear.substring(6));
     let month = chkLeapYear.substring(3, 5); 
     let day = chkLeapYear.substring(0, 2);
     let isItLeapYear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
       if (day == '29' && month == '02' && isItLeapYear == true) {
           return true
        } else
         { return false }
    }