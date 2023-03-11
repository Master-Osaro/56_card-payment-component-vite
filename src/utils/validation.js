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

