import React, { useState } from 'react';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import '../css/homePage.css';
import axios from 'axios';

function SignInBtn({ toggle }) {
     const [anchor, setAnchor] = useState(null);


     const handleClick = (event) => {
      setAnchor(anchor ? null : event.currentTarget);
  };

  const open = Boolean(anchor);
  const _id = open ? 'simple-popper' : undefined;

  const [signIn, setSignIn] = useState({
    email: "",
    password: ""
  });

  const handleInput = (e) => {
    setSignIn({
      ...signIn,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (event) => {
    axios.post("http://localhost:3000/api/user/login", signIn)
      .then(res => {
        const token = res.data.token;
        localStorage.setItem("jwtToken", token);
        console.log("Token stored in local storage:", token);
        toggle("profile");
      })
      .catch(err => {
        if (err.response && err.response.status === 401) {
          console.log("Invalid email or password. Please try again.");
        } else {
          console.error("An error occurred:", err);
        }
      });
  };
  

  return (
    <div>
      <a onClick={handleClick} id="log" href="#Sign in">
        Sign in
      </a>
      <BasePopup id={_id} open={open} anchor={anchor}>
        <div className='signIn'>
          <form onSubmit={()=>{handleSubmit();toggle("profile")}}>
            <h2>Sign in</h2>
            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleInput} value={signIn.email} id="email" name="email" required />
            <label htmlFor="password">Password</label>
            <input type="password" onChange={handleInput} value={signIn.password} id="password" name="password" required />
            <button type="submit" className='signInBtn'>Sign in</button>
          </form>
        </div>
      </BasePopup>
    </div>
  );
}

export default SignInBtn;
