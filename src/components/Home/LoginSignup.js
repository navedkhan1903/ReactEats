import { useState } from 'react';
import './LoginSignup.css';

export default function LoginSignup() {
  const [openLogin, setOpenLogin] = useState(false);

  function openLoginHandler() { setOpenLogin(true); }
  function openSignupHandler() { setOpenLogin(false); }

  return (
    <div className='ls'>
      {!openLogin && <center>
        <div className='ls_title'>Create account</div>
        <img src='./images/user.png' width="15px" className='ls_img' />
        <input type="text" placeholder='Full Name' className='ls_input' /><br />
        <img src='./images/gmail.png' width="15px" className='ls_img' />
        <input type="email" placeholder='Email Address' className='ls_input' /><br />
        <img src='./images/key.png' width="15px" className='ls_img' />
        <input type="password" placeholder='Password' className='ls_input' />
        <button className='ls_button'>Sign Up</button> <br />
        <div className='ls_sub'>Already have an account?
          <span className='ls_bold' onClick={openLoginHandler}> Log in</span>
        </div>
      </center>}
      {openLogin && <center>
        <div className='ls_title'>Login</div>
        <img src='./images/gmail.png' width="15px" className='ls_img' />
        <input type="email" placeholder='Email Address' className='ls_input' /><br />
        <img src='./images/key.png' width="15px" className='ls_img' />
        <input type="password" placeholder='Password' className='ls_input' />
        <button className='ls_button'>Login</button> <br />
        <div className='ls_sub'>
          <span className='ls_bold' onClick={openSignupHandler}>Create Account</span>
        </div>
      </center>}
    </div>
  )
}