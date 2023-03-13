import React from 'react';
import { useContext, useEffect, useState } from "react";
import mastercardLogo from './assets/logos/mastercard.svg'
import visaLogo from './assets/logos/visa.svg'
import verveLogo from './assets/logos/verve.svg'
import unknownCard from './assets/icons/unknown_card.svg'
import { validateCardNumberInput,validateCVV, validateDateMonth, validateDateYear, validatePassword } from './utils/validation';


//1 create app context
const AppContext = React.createContext();

const AppProvider =({children})=>{
    const [cardNumber, setCardNumber]= useState("");
    const [cvvNumber, setCVVNumber]= useState("");
    const [dateMonth, setDateMonth]= useState("");
    const [dateYear, setDateYear]= useState("");
    const [password, setPassword]= useState("");
    const [currentCardMerchant, setCurrentCardMerchant]=useState(mastercardLogo)

    /** Card Number Error */
    const [isCardNumberValidState, setIsCardNumberValidState] = useState("_")
    const [cardNumberErrorState, setcardNumberErrorState] = useState("")

    const {isCardNumValid, cardNumError} = validateCardNumberInput(cardNumber);

    /** CVV Error */
    const [isCVVValidState, setIsCVVValidState] = useState("_")
    const [cvvErrorState, setCvvErrorState] = useState("")

    /** Date Error */
    const [isdateMonthValid, setIsDateMonthValid] = useState("_")
    const [dateMonthError, setDateMonthError] = useState("")
    const [isdateYearValid, setIsDateYearValid] = useState("_")
    const [dateYearError, setDateYearError] = useState("")

    /** Password Error */
    const [isPasswordValid, setIsPasswordValid] = useState("_")
    const [passwordError, setPasswordError] = useState("")

    
    
    /** =========== Error Checking Functions ==========*/
    /** Card Number Error Check on page load first then on blur */
    const setCardNumErrorOnNumberChange=(number)=>{
        if (number.length>0 || (number.length<=0&&cardNumberErrorState!="")){
            setIsCardNumberValidState(isCardNumValid);
            setcardNumberErrorState(cardNumError);
        }  
    }
    const setCardNumErrorOnBlur=()=>{
        setIsCardNumberValidState(isCardNumValid);
        setcardNumberErrorState(cardNumError);
    }

    /** CVV Error Check */
    const setCvvErrorOnChange=(number)=>{
        if (number.length>0 || (number.length<=0&&cvvErrorState!="")){
            setIsCVVValidState(validateCVV(number).isCardNumValid);
            setCvvErrorState(validateCVV(number).cardNumError);
        }  
    }
    const setCvvErrorOnBlur=()=>{
        setIsCVVValidState(validateCVV(cvvNumber).isCardNumValid);
        setCvvErrorState(validateCVV(cvvNumber).cardNumError);
    }

    /** Date Error Check */
    const setDateMonthErrorOnChange=(number)=>{
        if (number.length>0 || (number.length<=0&&cvvErrorState!="")){
            setIsDateMonthValid(validateDateMonth(number).isCardNumValid);
            setDateMonthError(validateDateMonth(number).cardNumError);
        }  
    }
    const setDateMonthErrorOnBlur=()=>{
        setIsDateMonthValid(validateDateMonth(dateMonth).isCardNumValid);
        setDateMonthError(validateDateMonth(dateMonth).cardNumError);
    }
    const setDateYearErrorOnChange=(number)=>{
        if (number.length>0 || (number.length<=0&&cvvErrorState!="")){
            setIsDateYearValid(validateDateYear(number).isCardNumValid);
            setDateYearError(validateDateYear(number).cardNumError);
        }  
    }
    const setDateYearErrorOnBlur=()=>{
        setIsDateYearValid(validateDateYear(dateYear).isCardNumValid);
        setDateYearError(validateDateYear(dateYear).cardNumError);
    }

    /** Password Error Check */
    const setPasswordErrorOnChange=(pass)=>{
        if (pass.length>0 || (pass.length<=0&&cvvErrorState!="")){
            setIsPasswordValid(validatePassword(pass).isCardNumValid);
            setPasswordError(validatePassword(pass).cardNumError);
        }  
    }
    const setPasswordErrorOnBlur=()=>{
        setIsPasswordValid(validatePassword(password).isCardNumValid);
        setPasswordError(validatePassword(password).cardNumError);
    }

    const checkAllFormsValid=()=>{
        if (!isCardNumValid || !validateCVV(cvvNumber).isCardNumValid || !validateDateMonth(dateMonth).isCardNumValid || !validateDateYear(dateYear).isCardNumValid || !validatePassword(password).isCardNumValid   ) {
            return false
        } else{
            return true
        }
    }
        


    return(
        <AppContext.Provider 
        value={{mastercardLogo, verveLogo, visaLogo, unknownCard, cardNumber, setCardNumber, isCardNumberValidState, cardNumberErrorState, setCardNumErrorOnBlur, setCardNumErrorOnNumberChange, cvvNumber, setCVVNumber, setCvvErrorOnChange, setCvvErrorOnBlur, cvvErrorState, isCVVValidState, currentCardMerchant, setCurrentCardMerchant, dateMonth, setDateMonth, isdateMonthValid,dateMonthError, setDateMonthErrorOnChange, setDateMonthErrorOnBlur, dateYear, isdateYearValid, setDateYear, dateYearError, setDateYearErrorOnChange, setDateYearErrorOnBlur, password, isPasswordValid, setPassword, passwordError, setPasswordErrorOnChange, setPasswordErrorOnBlur, checkAllFormsValid}}
        >{children}
        </AppContext.Provider>
    )
}

// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider }