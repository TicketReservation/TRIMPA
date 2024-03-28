import React from 'react';
import { styled } from '@mui/system';
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
          label="Name on card"
          variant="outlined"
          className="credit-card-input"
          style={{width:500,marginBottom:24}}
        />
        <br />
        <TextField
          label="Card number"
          variant="outlined"
          className="credit-card-input"
          style={{width:500,marginBottom:24}}
        />
        <div className="credit-card-inputs">
          <TextField
            label="Expiration date"
            variant="outlined"
            className="credit-card-input"
            style={{width:230, }}
          />
          <TextField
            label="CCV"
            variant="outlined"
            className="credit-card-input"
            style={{width:230,marginLeft:30}}
          />
        </div>
      </div>
<<<<<<< HEAD
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
=======

      <TextField
        label="Email address or phone number"
        variant="outlined"
        className="mt-4"
      />
       <br></br>
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        className="mt-4"
      />
        <div className="mt-7 text-lg font-semibold text-slate-500 max-md:max-w-full">
        Cancellation policy
>>>>>>> 6f3b64d5f7ff385f669b1389de6467889c2cfa0b
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
          <button className="confirm-button">Confirm and pay</button>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
}

export default Paye;
=======
    );
  }
  export default Paye;
   

>>>>>>> 6f3b64d5f7ff385f669b1389de6467889c2cfa0b
