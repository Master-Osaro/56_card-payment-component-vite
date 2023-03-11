import { useEffect } from "react"
import { useGlobalContext } from "../context"

const CVV =()=>{
    const{cvvNumber, setCVVNumber, cvvErrorState, setCvvErrorOnChange, setCvvErrorOnBlur, isCVVValidState} = useGlobalContext()
    useEffect(()=>{
        setCvvErrorOnChange(cvvNumber)
    },[cvvNumber])
    return(
    <div className="form-group form-group-grid card__cvv">
        <div className="label__group">
            <label htmlFor=''>CVV Number</label>
            <p id='cvv-description' className='description'>Enter the 3 or 4 digit Number on the Card</p>
            <p id='cvv-number-error' className='description'>{cvvErrorState}</p>
        </div>
        <input type="text" aria-describedby='cvv-description cvv-number-error' className={isCVVValidState===true?"valid": isCVVValidState!="_"?"error":""} onChange={(e)=>{
            setCVVNumber(e.target.value.trim().substring(0,3))
        }}
        
        onBlur={(e)=>{
            e.target.value=cvvNumber
            setCvvErrorOnBlur()
        }} maxLength={3}/>
    </div>
    )
}

export default CVV