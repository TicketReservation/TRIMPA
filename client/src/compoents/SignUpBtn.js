import * as React from 'react';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import '../css/homePage.css'

function SignUpBtn() {

    const [anchor, setAnchor] = React.useState(null);

    const handleClick = (event) => {
      setAnchor(anchor ? null : event.currentTarget);
    };
  
    const open = Boolean(anchor);
    const id = open ? 'simple-popper' : undefined;

  return <div>
   <a onClick={handleClick} className="active" id="log" href="#Sign in">
                    Sign up
                </a>
                <BasePopup id={id} open={open} anchor={anchor}>
    <div className='signIn'>
    <form >
      <h2>Sign up</h2>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email"  required />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password"   required />
      <button type="submit"  >Sign up</button>
    </form>
    </div>
      </BasePopup>
  </div>
  
}

export default SignUpBtn
