import './App.css';
import CardNumber from './components/CardNumber';
import SideCardSummary from './components/SideCardSummary';
import { validateCardNumberInput } from "./utils/validation";
import { useGlobalContext } from './context';
import { useState } from 'react';
import CVV from './components/CVV';
import ExpiryDate from './components/ExpiryDate';

function App() {
  const {setCardNumErrorOnBlur, setCvvErrorOnBlur, setDateMonthErrorOnBlur} = useGlobalContext()

  return (
    <div className="App">
      <header className="App-header">
        {/* For logo and theme switcher */}
        <h3>Vivacoin<span>Pay</span></h3>
      </header>
      <main>
        <form action="" className="card__form" onSubmit={
          (e)=>{
            e.preventDefault()
            setCardNumErrorOnBlur()
            setCvvErrorOnBlur()
            setDateMonthErrorOnBlur()
          }}>
          <CardNumber />
          <CVV />
          <ExpiryDate />
          <div className="form-group form-group-grid card__password">
          <div className="label__group">
            <label htmlFor=''>Password</label>
            <p className='description' id='password-description'>Enter your dynamic password</p>
            </div>
            <input type="password" id='password' aria-describedby='password-description'/>
          </div>
          <div className="card__submit">
            <input type="submit" value="Pay Now" className='btn'/>
          </div>
        </form>
        <SideCardSummary />
      </main>
    </div>
  );
}

export default App;
