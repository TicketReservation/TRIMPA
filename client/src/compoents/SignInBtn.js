import React, { useState } from 'react';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import '../css/homePage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function SignInBtn() {
     const [anchor, setAnchor] = useState(null);
     const navigate=useNavigate()
      const url="http://localhost:3000/api/admin/login"
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

  
  const handleSubmit = () => {
    axios.post(url, signIn)
        .then(res => {
            const token = res.data.token;
            localStorage.setItem("jwtToken", token);
            console.log("Token stored in local storage:", token);
            navigate("/login"); // Redirect to login page after successful login
        })
        .catch(err => {
            console.log(err);
            // If admin login fails, attempt user login
            axios.post("http://localhost:3000/api/user/login", signIn)
                .then((res) => {
                    const token = res.data.token;
                    localStorage.setItem("jwtToken", token);
                    console.log("Token Stored in the local storage", token);
                    // Redirect to login page after successful login
                    navigate("/login");
                })
                .catch((err) => {
                    console.log(err);
                });
        });
};


  return (
<div>
      <a onClick={handleClick} id="log" href="#Sign in">
        Sign in
      </a>
      <BasePopup id={_id} open={open} anchor={anchor}>
        <div className='signIn'>
          <form onSubmit={()=>{handleSubmit()}}>
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



