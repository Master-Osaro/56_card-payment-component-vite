import { useEffect } from "react";
import { useGlobalContext } from "../context";

const Password =()=>{
    const {password, isPasswordValid, setPassword, passwordError, setPasswordErrorOnChange, setPasswordErrorOnBlur} = useGlobalContext();
    useEffect(()=>{
        setPasswordErrorOnChange(password)
    },[password])
    return (
    <div className="form-group form-group-grid card__password">
        <div className="label__group">
        <label htmlFor=''>Card Pin</label>
        <p className='description' id='password-description'>Enter your dynamic pin</p>
        <p id='cvv-number-error' className='description' aria-live="polite">{passwordError}</p>
        </div>
        <input type="password"  className={isPasswordValid===true?"valid": isPasswordValid!="_"?"error":""} id='password' aria-describedby='password-description'
        onChange={(e)=>{setPassword(e.target.value.trim())}}
        onBlur={(e)=>{e.target.value=password
            setPasswordErrorOnBlur()}}
        />
    </div>
    )
}

export default Password