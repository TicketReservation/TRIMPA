import React from 'react'

function SignIn({trigger,children}) {
  return (trigger) ? (<div>
    <button>{children} X</button>
    <div className='signIn'>
                <label htmlFor="Adress">Adress :</label>
                <input className='log-input' type="text" /><br />
                <label htmlFor="Password">Password :</label>
                <input className='log-input' type="text" />
                </div>
    <button>Sign in</button>
  </div>):""
  }

export default SignIn