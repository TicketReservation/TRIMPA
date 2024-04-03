import React, { useState } from 'react';
import axios from 'axios';
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
  const [formData, setFormData] = useState({
    amount: '',
    accept_card: true,
    session_timeout_secs: 1200,
    success_link: 'http://localhost:3000/success',
    fail_link: 'http://localhost:3000/fail',
    developer_tracking_id: '5aa70c0d-fc2a-4571-8bb0-358a8bfcebe8',
    name_on_card: '',
    card_number: '',
    expiration_date: '',
    ccv: '',
    email_or_phone: '',
    password: '',
<<<<<<< HEAD
   
=======
    amount:''
>>>>>>> b949f90d42aff9e80b9b4d3eeb86efa0dc582ec9
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePayment =  (e) => {
    e.preventDefault()
  axios.post('http://localhost:3000/api/payment/pay', formData).then((response)=>{
    console.log(response.data)
    const {result}=response.data
    window.location.href=result.link
    

  })
     .catch((error)=> {
      console.error('Error:', error);
   
    })
  };

  return (
    <div className="payment-container">
      <div className="payment-header">Payment method</div>
      <div className="payment-description">
        Select a payment method below. Tripma processes your payment securely
        with end-to-end encryption.
      </div>
      <div className="payment-options">
        <button className="payment-option">
          <img src={creditCardLogo} alt="Credit Card Logo" className="logo" />
          Credit card
        </button>
        <button className="payment-option">
          <img src={googlepayLogo} alt="Google Pay Logo" className="logo" />
          Google Pay
        </button>
        <button className="payment-option">
          <img src={applePayLogo} alt="Apple Pay Logo" className="logo" />
          Apple Pay
        </button>
        <button className="payment-option">
          <img src={paypalLogo} alt="PayPal Logo" className="logo" />
          Paypal
        </button>
        <button className="payment-option">
          <img src={cryptoLogo} alt="Crypto Logo" className="logo" />
          Crypto
        </button>
      </div>
      <div className="credit-card-details">
        <div className="credit-card-header">Credit card details</div>
        <TextField
          label="amount"
          variant="outlined"
          className="credit-card-input"
          style={{ width: 500, marginBottom: 24 }}
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        />
        <br />
        <TextField
          label="Name on card"
          variant="outlined"
          className="credit-card-input"
          style={{ width: 500, marginBottom: 24 }}
          name="name_on_card"
          value={formData.name_on_card}
          onChange={handleChange}
        />
        <br />
        <TextField
          label="Card number"
          variant="outlined"
          className="credit-card-input"
          style={{ width: 500, marginBottom: 24 }}
          name="card_number"
          value={formData.card_number}
          onChange={handleChange}
        />
        <div className="credit-card-inputs">
          <TextField
            label="Expiration date"
            variant="outlined"
            className="credit-card-input"
            style={{ width: 230 }}
            name="expiration_date"
            value={formData.expiration_date}
            onChange={handleChange}
          />
          <TextField
            label="CCV"
            variant="outlined"
            className="credit-card-input"
            style={{ width: 230, marginLeft: 30 }}
            name="ccv"
            value={formData.ccv}
            onChange={handleChange}
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
          style={{ width: 500, marginBottom: 20 }}
          name="email_or_phone"
          value={formData.email_or_phone}
          onChange={handleChange}
        />
        <br />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          className="create-account-input"
          style={{ width: 500 }}
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="sign-in-options">
        <button className="sign-in-button">
          <img src={googleLogo} alt="Google Logo" className="logo" />
          Sign in with Google
        </button>
        <button className="sign-in-button">
          <img src={appleLogo} alt="Apple Logo" className="logo" />
          Sign in with Apple
        </button>
        <button className="sign-in-button">
          <img src={facebookLogo} alt="Facebook Logo" className="logo" />
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
          <button className="confirm-button" onClick={handlePayment}>Confirm and pay</button>
        </div>
      </div>
    </div>
  );
}

export default Paye