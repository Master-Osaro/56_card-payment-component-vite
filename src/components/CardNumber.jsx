import { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

const CardNumber=()=>{
    const {mastercardLogo, verveLogo, visaLogo, unknownCard, cardNumber, setCardNumber, isCardNumberValidState, cardNumberErrorState, setCardNumErrorOnBlur, setCardNumErrorOnNumberChange, currentCardMerchant, setCurrentCardMerchant} = useGlobalContext()

    const [splitCardNumber, setSplitCardNumber]= useState("");
    const [firstFourCardDigits, setFirstFourCardDigits]= useState("");

    const chunkStr = (str, n, acc) => {     
        if (str.length === 0) {
            return acc;
        } else if(str.length > 19){
            acc.push(str.substring(0, n));
            return chunkStr(str.substring(4, 19), n, acc);
        }
        else{
            acc.push(str.substring(0, n));
            return chunkStr(str.substring(n), n, acc);
        }
    }

    const getFirstFourVal = (number) => {     
        if (number.length < 2) {
            return false;
        } 
        else if (number.length >= 2) {
            setFirstFourCardDigits(cardNumber.substring(0, 4));
            return true;
        } 
    }
    const setCurrentMerchant = (number) => {     
        if (getFirstFourVal(number)) {
            if (firstFourCardDigits=="5061") {
                setCurrentCardMerchant(verveLogo)
            } else if (firstFourCardDigits.substring(0,1)=="4"){
                setCurrentCardMerchant(visaLogo)
            }
            else if (firstFourCardDigits.substring(0,2)=="50"||firstFourCardDigits.substring(0,2)=="51"||firstFourCardDigits.substring(0,2)=="52"||firstFourCardDigits.substring(0,2)=="53"||firstFourCardDigits.substring(0,2)=="54"||firstFourCardDigits.substring(0,2)=="55"){
                setCurrentCardMerchant(mastercardLogo)
            }
            else{
                setCurrentCardMerchant(unknownCard)
            }
        }
    }


    useEffect(()=>{
        setCurrentMerchant(cardNumber)
        setCardNumErrorOnNumberChange(cardNumber)
    },[cardNumber])
    return (
        <div className="form-group">
        <label htmlFor=''>Card Number</label>
        <p id='card-number-description' className='description'>Enter the 16-digit card number on the card</p>
        <p id='card-number-error' className='description'>{cardNumberErrorState}</p>
        <div className="form-group card__number">
            <div className="card__number--merchant-logo"><img src={currentCardMerchant} alt="" /></div>
            <input type="text" className={isCardNumberValidState===true?"valid": isCardNumberValidState!="_"?"error":""} onChange={(e)=>{
                const splittedString = chunkStr(e.target.value.trim(), 4, []);
                setCardNumber(e.target.value.trim().substring(0,20))
                setSplitCardNumber(splittedString.join(" - "))
            }
                }
                onFocus={(e)=>{
                    e.target.value=cardNumber
                }}
                onBlur={(e)=>{
                    e.target.value=splitCardNumber
                    setCardNumErrorOnBlur()
                }}
                aria-describedby='card-number-description card-number-error'
                maxLength={24}/>
            <div className="card__number--badge"></div>
        </div>
        </div>
    )
}

export default CardNumber;