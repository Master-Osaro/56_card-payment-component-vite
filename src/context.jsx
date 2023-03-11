import React from 'react';
import { useContext, useEffect, useState } from "react";
import mastercardLogo from './assets/logos/mastercard.svg'
import visaLogo from './assets/logos/visa.svg'
import verveLogo from './assets/logos/verve.svg'
import unknownCard from './assets/icons/unknown_card.svg'
import { validateCardNumberInput,validateCVV } from './utils/validation';


//1 create app context
const AppContext = React.createContext();

const AppProvider =({children})=>{
    const [cardNumber, setCardNumber]= useState("");
    const [cvvNumber, setCVVNumber]= useState("");
    const [currentCardMerchant, setCurrentCardMerchant]=useState(mastercardLogo)

    /** Card Number Error States */
    const [isCardNumberValidState, setIsCardNumberValidState] = useState("_")
    const [cardNumberErrorState, setcardNumberErrorState] = useState("")

    const {isCardNumValid, cardNumError} = validateCardNumberInput(cardNumber);

    /** CVV Error States */
    const [isCVVValidState, setIsCVVValidState] = useState("_")
    const [cvvErrorState, setCvvErrorState] = useState("")

    
    
    /** =========== Error Checking Functions ==========*/
    /** Card Number Error Check on page load first then on blur */
    const setCardNumErrorOnNumberChange=(cardNumber)=>{
        if (cardNumber.length>0 || (cardNumber.length<=0&&cardNumberErrorState!="")){
            setIsCardNumberValidState(isCardNumValid);
            setcardNumberErrorState(cardNumError);
        }  
    }
    const setCardNumErrorOnBlur=()=>{
        setIsCardNumberValidState(isCardNumValid);
        setcardNumberErrorState(cardNumError);
    }

    /** CVV Error Check */
    const setCvvErrorOnChange=(cardNumber)=>{
        if (cardNumber.length>0 || (cardNumber.length<=0&&cvvErrorState!="")){
            setIsCVVValidState(validateCVV(cardNumber).isCardNumValid);
            setCvvErrorState(validateCVV(cardNumber).cardNumError);
        }  
    }
    const setCvvErrorOnBlur=()=>{
        setIsCVVValidState(validateCVV(cvvNumber).isCardNumValid);
        setCvvErrorState(validateCVV(cvvNumber).cardNumError);
    }

    /** Date Error Check */


    return(
        <AppContext.Provider 
        value={{mastercardLogo, verveLogo, visaLogo, unknownCard, cardNumber, setCardNumber, isCardNumberValidState, cardNumberErrorState, setCardNumErrorOnBlur, setCardNumErrorOnNumberChange, cvvNumber, setCVVNumber, setCvvErrorOnChange, setCvvErrorOnBlur, cvvErrorState, isCVVValidState, currentCardMerchant, setCurrentCardMerchant}}
        >{children}
        </AppContext.Provider>
    )
}

// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider }