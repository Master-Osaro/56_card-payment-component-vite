const ExpiryDate =()=>{
    return(
    <div className="form-group form-group-grid card__expiry">
        <div className="label__group">
            <label htmlFor=''>Expiry Date</label>
            <p aria-describedby='' className='description'>Enter the expiration date of the Card</p>
        </div>

        <div className="card__expiry-inputs">
        <input type="text" /><div className="card__expiry-inputs--divider">/</div><input type="text" />
        </div>
    </div>
    )
}
export default ExpiryDate