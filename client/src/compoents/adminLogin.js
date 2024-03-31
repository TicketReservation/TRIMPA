import React, { useState } from 'react';
import axios from 'axios';

function AdminSignIn() {
  const [signIn, setSignIn] = useState({ email: "", password: "" });

  const handleSubmit = () => {
    axios.post("http://localhost:3000/api/admin/login", signIn)
      .then(res => {
        const token = res.data.token;
        localStorage.setItem("jwtToken", token);
        console.log("Token Stored in the local storage", token);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h2>Admin Sign In</h2>
      <form onSubmit={() => handleSubmit()} >
        <label htmlFor="email">Email</label>
        <input type="email" onChange={(e) => setSignIn({ ...signIn, email: e.target.value })} value={signIn.email} id="email" name="email" required />
        <label htmlFor="password">Password</label>
        <input type="password" onChange={(e) => setSignIn({ ...signIn, password: e.target.value })} value={signIn.password} id="password" name="password" required />
        <button type="submit" >Sign in</button>
      </form>
    </div>
  );
}

export default AdminSignIn;