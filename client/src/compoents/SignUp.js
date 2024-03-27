import React from 'react';

function SignUp({ trigger, setTrigger }) {
    return (
        <div>
            {trigger && (
                <div className='signIn'>
                    <span className='Top-SingUp'>
                        <h5 className='TrimpaSignUp'>Sign in to continue</h5>
                        <button onClick={() => setTrigger(false)}>X</button>
                        <input className='log-input' type="text" placeholder='Email or phone number' /><br />
                        <input className='log-input' type="text" placeholder='Password' /><br />
                    </span>
                    <button className='quit'>Sign in</button>
                </div>
            )}
        </div>
    );
}

export default SignUp;
