import React from 'react'
import "../css/sign.css"
function SignIn({trigger,setTrigger}) {



  return (trigger) ? (<div className='signIn'>
    <span className='Top-SingUp'>
    <h5 className='TrimpaSignUp'>Sign up for Tripma</h5><button  onClick={()=>setTrigger(false)}>X</button>
    </span>
    <h7>Tripma is totally fre to use. Sign in your email<br/> adress or phone numberbelow to get started</h7><br/>
    <span>
      <input className='log-input' type="text" placeholder='Email or phone number' /><br />
      <input className='log-input' type="password" placeholder='Password'/><br />
      </span>

    <button className='quit'>Create Account</button>
    
  </div>):""
  }

export default SignIn