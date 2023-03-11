const Password =()=>{
    return (
    <div className="form-group form-group-grid card__password">
        <div className="label__group">
        <label htmlFor=''>Password</label>
        <p className='description' id='password-description'>Enter your dynamic password</p>
        </div>
        <input type="password" id='password' aria-describedby='password-description'/>
    </div>
    )
}

export default Password