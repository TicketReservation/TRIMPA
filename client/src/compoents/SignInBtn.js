import * as React from 'react';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import '../css/homePage.css'

function SignInBtn() {

    const [anchor, setAnchor] = React.useState(null);

    const handleClick = (event) => {
      setAnchor(anchor ? null : event.currentTarget);
    };
  
    const open = Boolean(anchor);
    const id = open ? 'simple-popper' : undefined;

  return <div>
   <a onClick={handleClick} id="log" href="#Sign in">
                    Sign in
                </a>
                <BasePopup id={id} open={open} anchor={anchor}>
    <div className='signIn'>
    <form >
      <h2>Sign In</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email"  required />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password"   required />
      <label htmlFor="picture">Picture:</label>
      <input type="file" id="picture" name="picture"  />
      <button type="submit"  >Sign In</button>
    </form>
    </div>
      </BasePopup>
  </div>
  
}

export default SignInBtn
