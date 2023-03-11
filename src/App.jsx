import './App.css';
import CardNumber from './components/CardNumber';
import SideCardSummary from './components/SideCardSummary';
import { useGlobalContext } from './context';
import CVV from './components/CVV';
import ExpiryDate from './components/ExpiryDate';
import Password from './components/Password';

function App() {
  const {setCardNumErrorOnBlur, setCvvErrorOnBlur, setDateMonthErrorOnBlur, setDateYearErrorOnBlur, setPasswordErrorOnBlur} = useGlobalContext()

  const checkAllErrors =()=>{
    setCardNumErrorOnBlur()
    setCvvErrorOnBlur()
    setDateMonthErrorOnBlur()
    setDateYearErrorOnBlur()
    setPasswordErrorOnBlur()
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* For logo and theme switcher */}
        <h3 className='logo'>Vivacoin<span>Pay</span></h3>
      </header>
      <main>
        <form action="" className="card__form" onSubmit={
          (e)=>{
            e.preventDefault();
            checkAllErrors();
            
          }}>
          <CardNumber />
          <CVV />
          <ExpiryDate />
          <Password />
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
