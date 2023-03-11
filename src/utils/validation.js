const generalNumberValidation = (number) => {
    let error ="";
    if (!(number.length)) {
        // isValid = false;
        error="Can't be blank";
        return {"isCardNumValid":false, "cardNumError":error};
    }
    //regExp to ensure params is an Int 
    else if (!(/^\d+$/.test(number))) {
        // isValid = false;
        error="Wrong format, numbers only";
        return {"isCardNumValid":false, "cardNumError":error};
    } 
}

export const validateCardNumberInput = (number) => {
    let error ="";
    
    //We return the value of the preliminary validation if its not undefined
    if(generalNumberValidation(number)){
        return generalNumberValidation(number);
    }
    else if (number.length<16) {
        // isValid = false;
        error="Card number incomplete: "+(16-parseInt(number.length))+" digit(s) remaining";
        return {"isCardNumValid":false, "cardNumError":error};
    }
    else {
        error="";
        return {"isCardNumValid":true, "cardNumError":error};
    }
}
export const validateCVV = (number) => {
    let error ="";
    if(generalNumberValidation(number)){
        return generalNumberValidation(number);
    }
    else if (number.length<3) {
        // isValid = false;
        error="CVV incomplete: "+(3-parseInt(number.length))+" digit(s) remaining";
        return {"isCardNumValid":false, "cardNumError":error};
    }
    else {
        error="";
        return {"isCardNumValid":true, "cardNumError":error};
    }
}

export const validateDateMonth = (number) => {
    let error ="";
    // const d = new Date();
    // let month = d.getMonth();
    //getMonth() returns the month (from 0 to 11) of a date:
    if(generalNumberValidation(number)){
        return generalNumberValidation(number);
    }
    else if (number.length<2) {
        // isValid = false;
        error="Month Format should be double digit MM: "+(2-parseInt(number.length))+" digit(s) remaining";
        return {"isCardNumValid":false, "cardNumError":error};
    }
    else if (parseInt(number)>12) {
        // isValid = false;
        error="Invalid month, choose between 1 and 12";
        return {"isCardNumValid":false, "cardNumError":error};
    }
    else {
        error="";
        return {"isCardNumValid":true, "cardNumError":error};
    }
}
export const validateDateYear = (number) => {
    let error ="";
    const d = new Date();
    let year = d.getFullYear();
    let yearTwoDigits = parseInt(year.substring(2,4))
    if(generalNumberValidation(number)){
        return generalNumberValidation(number);
    }
    else if (number.length<2) {
        // isValid = false;
        error="Year Format should be double digit YY: "+(2-parseInt(number.length))+" digit(s) remaining";
        return {"isCardNumValid":false, "cardNumError":error};
    }
    //make sure year has not passed
    else if (yearTwoDigits>number) {
        // isValid = false;
        error="This card has expired";
        return {"isCardNumValid":false, "cardNumError":error};
    }
    else {
        error="";
        return {"isCardNumValid":true, "cardNumError":error};
    }
}

