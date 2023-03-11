import { useEffect } from "react";
import { useGlobalContext } from "../context"

const ExpiryDate =()=>{
    const{dateMonth, setDateMonth, isdateMonthValid,dateMonthError, setDateMonthErrorOnChange, setDateMonthErrorOnBlur, dateYear, isdateYearValid, setDateYear, dateYearError,  setDateYearErrorOnChange, setDateYearErrorOnBlur}=useGlobalContext();

    useEffect(()=>{
        setDateMonthErrorOnChange(dateMonth)
    },[dateMonth])
    useEffect(()=>{
        setDateYearErrorOnChange(dateYear)
    },[dateYear])
    return(
    <div className="form-group form-group-grid card__expiry">
        <div className="label__group">
            <label htmlFor=''>Expiry Date</label>
            <p aria-describedby='' className='description'>Enter the expiration date of the Card</p>
            <p id='cvv-number-error' className='description'>{dateMonthError}</p>
            <p id='cvv-number-error' className='description'>{dateYearError}</p>
        </div>

        <div className="card__expiry-inputs">
        <input type="text" className={isdateMonthValid===true?"valid": isdateMonthValid!="_"?"error":""} onChange={(e)=>{setDateMonth(e.target.value.trim().substring(0,2))}}  
        onBlur={(e)=>{setDateMonthErrorOnBlur()}} maxLength={2} />
        
        <div className="card__expiry-inputs--divider">/</div>
        
        <input type="text" className={isdateYearValid===true?"valid": isdateYearValid!="_"?"error":""} onChange={(e)=>{setDateYear(e.target.value.trim().substring(0,2))}}  
        onBlur={(e)=>{setDateYearErrorOnBlur()}} maxLength={2} />
        </div>
    </div>
    )
}
export default ExpiryDate