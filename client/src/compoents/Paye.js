import React ,{useState} from 'react';
import axios from 'axios';
// import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import '../css/Paye.css';
import googleLogo from '../img/google.png';
import appleLogo from '../img/apple-logo.png';
import facebookLogo from '../img/facebook1.png';
import cryptoLogo from '../img/money.png';
import applePayLogo from '../img/apple-pay.png';
import paypalLogo from '../img/paypal.png';
import googlepayLogo from '../img/google-pay.png';
import creditCardLogo from '../img/credit-card.png';



function Paye() {

  // const [Nameoncard, setNameoncard] = useState("");
  // const [email, setEmail] = useState("");
  // const [Cardnumber,setCardnumber]=useState("")
  // const [Expirationdate,setExpirationdate] = useState("MM/YY")
  // const [CVV,SetCVV]=useState('')

  const [form,setForme]=useState({})





  const  handleSubmit= (event) => {
    event.preventDefault();
    axios.post('http:localhost:3000/api/Pay',{form:form}).then((res)=>{
      
      
      console.log(res)
    }).catch((err)=> console.log(err))
    // alert(`You submitted the form with name "${Nameoncard}`)



  return (


    <div className="payment-container">
      <div className="payment-header">Payment method</div>
      <div className="payment-description">
        Select a payment method below. Tripma processes your payment securely
        with end-to-end encryption.
      </div>
      <div className="payment-options">
  <button className="payment-option">
    <img src={creditCardLogo} alt="Credit Card Logo" className="logooo" />
    Credit card
  </button>
  <button className="payment-option">
    <img src={googlepayLogo} alt="Google Pay Logo" className="logooo" />
    Google Pay
  </button>
  <button className="payment-option">
    <img src={applePayLogo} alt="Apple Pay Logo" className="logooo" />
    Apple Pay
  </button>
  <button className="payment-option">
    <img src={paypalLogo} alt="PayPal Logo" className="logooo" />
    Paypal
  </button>
  <button className="payment-option">
    <img src={cryptoLogo} alt="Crypto Logo" className="logooo" />
    Crypto
  </button>
</div>

      <div className="credit-card-details">
        <div className="credit-card-header">Credit card details</div>
        <TextField
          label="amount"
          variant="outlined"
          className="credit-card-input"
          style={{width:500,marginBottom:24}}
          onChange={(e)=>{setForme(e.target.value)}}
        />
        <TextField
          label="Name on card"
          variant="outlined"
          className="credit-card-input"
          style={{width:500,marginBottom:24}}
          // onChange={(e)=>{setNameoncard(e.target.value)}}
        />
        <br />
        <TextField
          label="Card number"
          variant="outlined"
          className="credit-card-input"
          style={{width:500,marginBottom:24}}
          // onChange={(e)=>{setCardnumber(e.target.value)}}
        />
        <div className="credit-card-inputs">
          <TextField
            label="Expiration date"
            variant="outlined"
            className="credit-card-input"
            style={{width:230, }}
            // onChange={(e)=>{setExpirationdate(e.target.value)}}
          />
          <TextField
            label="CCV"
            variant="outlined"
            className="credit-card-input"
            style={{width:230,marginLeft:30}}
            // onChange={(e)=>{SetCVV(e.target.value)}}
          />
        </div>
      </div>
      <div className="create-account">
        <div className="create-account-header">Create an account</div>
        <div className="create-account-description">
          Tripma is free to use as a guest, but if you create an account today,
          you can save and view flights, manage your trips, earn rewards, and
          more.
        </div>
       
        <div className="save-card-option">
        <input type="checkbox" className="save-card-checkbox" />
          <div className="save-card-text">Save card and create account for later</div>
        </div>
        <TextField
          label="Email address or phone number"
          variant="outlined"
          className="create-account-input"
          style={{width:500, marginBottom:20}}
        />
        <br />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          className="create-account-input"
          style={{width:500}}
        />
      </div>
      <div className="sign-in-options">
  <button className="sign-in-button">
    <img src={googleLogo} alt="Google Logo" className="logooo" />
    Sign in with Google
  </button>
  <button className="sign-in-button">
    <img src={appleLogo} alt="Apple Logo" className="logooo" />
    Sign in with Apple
  </button>
  <button className="sign-in-button">
    <img src={facebookLogo} alt="Facebook Logo" className="logooo" />
    Sign in with Facebook
  </button>
</div>

      <div className="cancellation-policy">
        <div className="cancellation-policy-header">Cancellation policy</div>
        <div className="cancellation-policy-description">
          This flight has a flexible cancellation policy. If you cancel or change your
          flight up to 30 days before the departure date, you are eligible for a free
          refund. All flights booked on Tripma are backed by our satisfaction
          guarantee, however cancellation policies vary by airline. See the full
          cancellation policy for this flight.
        </div>
        <div className="buttons">
          <button className="back-button">Back to seat select</button>
          <button className="confirm-button"
          onClick={handleSubmit}
          >Confirm and pay</button>
        </div>
      </div>
    </div>
  );
}
}

export default Paye;
