import { useGlobalContext } from "../context";
import cardChipIcon from '../assets/icons/card_chip.svg'
import { useEffect } from "react";

const SideCardSummary=()=>{
    const {currentCardMerchant, cardNumber, dateYear, dateMonth} = useGlobalContext()
    useEffect(()=>{
    },[cardNumber])

    return (
        <div className="card__summary">
          <div className="s_card">
            <div aria-hidden="true" className="s_card--top">
              <img src={cardChipIcon} alt="Card Chip" />
            </div>
            <div className="s_card--bottom">
              <p className="s_card__name">Onasanya Habeeb</p>
              <p className='s_card__dts'>
                <span className="dots">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </span>
                <span className="s_card__last4">{!cardNumber?"0000":cardNumber.substring(cardNumber.length-4)}</span>
                </p>
              <div className="s_card--group">
              <p className='s_card__date'>{!dateMonth?"00":dateMonth}/{!dateYear?"00":dateYear}</p>
                <div aria-hidden="true" className="s_card__merchant">
                  <img src={currentCardMerchant} alt="" />
                </div>
              </div>
            </div>
            
            
          </div>
          <div className="summary__list-wrapper">
            <div className="summary__list">
              <div className="summary__list--titles">
                <p>Company</p>
                <p>Order Number</p>
                <p>Product</p>
                <p>VAT (20%)</p>
              </div>
              <div className="summary__list--values">
                <p>Apple</p>
                <p>4565526</p>
                <p>Macbook Air</p>
                <p>$100.00</p>
              </div>
            </div>
          </div>
          <div className="dashed__line--wrapper">
            <div className="dashed__line"></div>
          </div>
          <div className="summary__pay">
            <div className="summary__pay-text">
              <p>You have to pay</p>
              <p><span>789.88 </span> USD</p>
            </div>
            
            <div className="card__svg">
            <svg aria-hidden="true" width="30" height="24" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 0H2C0.89 0 0.00999999 0.89 0.00999999 2L0 14C0 15.11 0.89 16 2 16H18C19.11 16 20 15.11 20 14V2C20 0.89 19.11 0 18 0ZM18 14H2V8H18V14ZM18 4H2V2H18V4Z" fill="#005166"/>
            </svg>
            </div>
          </div>
        </div>
    )
}

export default SideCardSummary;