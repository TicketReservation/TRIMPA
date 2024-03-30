// import * as React from 'react';
// import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
// import '../css/homePage.css'
// import axios from 'axios'

// function SignUpBtn({switchView}) {

//     const [anchor, setAnchor] = React.useState(null);

//     const handleClick = (event) => {
//       setAnchor(anchor ? null : event.currentTarget);
//     };
  
//     const open = Boolean(anchor);
//     const id = open ? 'simple-popper' : undefined;


//     const [signUp,setSignUp]=React.useState({
//       Name:"",
//       email:"",
//       password:"",
//       picture:""
//     })

    
//     const handleInput=(e)=>{
//       setSignUp({...signUp,
//         [e.target.id]:e.target.value})
//     }


//     const handleSubmit=(body)=>{
//       axios.post("http://localhost:3000/api/user/register",body)
//       .then(res=>console.log("signed"))
//       .catch(err=>console.log(err))
//     }

//   return <div>
//    <a onClick={handleClick} className="active" id="log" href="#Sign in">
//                     Sign up
//                 </a>
//       <BasePopup id={id} open={open} anchor={anchor}>
//     <div className='signIn'>
//     <form >
//       <h2>Sign up</h2>
//       <label htmlFor="name">Name</label>
//       <input type="text" onChange={(e)=>handleInput(e)} value={signUp.Name} id="Name" name="name" required />
//       <label htmlFor="email">Email</label>
//       <input type="email" onChange={(e)=>handleInput(e)} value={signUp.email} id="email" name="email"  required />
//       <label htmlFor="password">Password</label>
//       <input type="password" onChange={(e)=>handleInput(e)} value={signUp.password} id="password" name="password"   required />
//       <label htmlFor="picture">Picture</label>
//       <input type="file" onChange={(e)=>handleInput(e)} value={signUp.picture} id="picture" name="picture"  />
//       <button type="submit" onClick={()=>{handleSubmit();switchView("signIn")}}  >Sign up</button>
//     </form>
//     </div>
//       </BasePopup>
//   </div>

  
  
// }

// export default SignUpBtn
