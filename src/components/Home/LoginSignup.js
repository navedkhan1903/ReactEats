import './LoginSignup.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginHandler } from './LoginHandler';
import { auth } from "../../firebase-config.js";
import { signupHandler } from './SignupHandler';
import { RiEyeOffFill, RiEyeFill } from 'react-icons/ri';
import { FcManager, FcGoogle, FcKey, FcHighPriority } from 'react-icons/fc';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginSignup({ onLoginStatus }) {
  const [name, setName] = useState();
  const [pass, setPass] = useState();
  const [email, setEmail] = useState();
  const [login, setLogin] = useState(false);
  const [lsWait, setLsWait] = useState(false);
  const [type, setType] = useState("password");
  const [passError, setPassError] = useState();
  const [visible, setVisible] = useState(false);
  const [emailError, setEmailError] = useState();
  const [validPass, setValidPass] = useState(true);
  const [validName, setValidName] = useState(true);
  const [openLogin, setOpenLogin] = useState(false);
  const [validEmail, setValidEmail] = useState(true);

  function openLoginHandler() { setOpenLogin(true); setValidName(true); setValidEmail(true); setValidPass(true); setVisible(false); }
  function visibilityHandler() { setVisible(!visible); setType(visible ? "password" : "text"); }
  function nameHandler(event) { setName(event.target.value); setValidName(true); }
  function emailHandler(event) { setEmail(event.target.value); setValidEmail(true); }
  function passHandler(event) { setPass(event.target.value); setValidPass(true); }
  function nameValidation() { if (!name) setValidName(false); }

  function emailInput() {
    return (
      <>
        <FcGoogle size="20" className='ls_img' />
        <input type="email" placeholder='Email Address' className='ls_input' onChange={emailHandler} />
        {!validEmail && <div className='invalid'>
          <FcHighPriority className='invalid_img' />
          {emailError}
        </div>}<br />
      </>
    )
  }

  function passInput() {
    return (
      <>
        <FcKey size="20" className='ls_img' />
        <input type={type} placeholder='Password' className='ls_input' onChange={passHandler} />
        {!visible && <RiEyeOffFill color="#323142" className='eye' onClick={visibilityHandler} />}
        {visible && <RiEyeFill color="#323142" className='eye' onClick={visibilityHandler} />}
        {!validPass && <div className='invalid'>
          <FcHighPriority className='invalid_img' />
          {passError}
        </div>}
      </>
    )
  }

  onLoginStatus(login);

  return (
    <div className='ls centered'>
      {!openLogin && <center>
        <div className='ls_title'>Create account</div>
        <FcManager size="20" className='ls_img' />
        <input type="text" placeholder='Full Name' className='ls_input' onChange={nameHandler} onBlur={nameValidation} />
        {!validName && <div className='invalid'>
          <FcHighPriority className='invalid_img' />
          This field is required.
        </div>}<br />
        {emailInput()}
        {passInput()}
        <Link to="/Home">
          {!lsWait && <button className='ls_button' onClick={() => signupHandler(name, setLsWait, createUserWithEmailAndPassword, auth, email, pass, setLogin, setValidName, setValidPass, setValidEmail, setPassError, setEmailError)}>Sign Up</button>}
        </Link>
        {lsWait && <button className='ls_button'>Signing Up...</button>} <br />
        <div className='ls_sub'>
          Already have an account?
          <span className='ls_bold' onClick={openLoginHandler}> Log In</span>
        </div>
      </center>}

      {openLogin && <center>
        <div className='ls_title'>Login</div>
        {emailInput()}
        {passInput()}
        <Link to="/Home">
          {!lsWait && <button className='ls_button' onClick={() => loginHandler(setLsWait, signInWithEmailAndPassword, auth, email, pass, setLogin, setValidEmail, setValidPass, setEmailError, setPassError)}>Login</button>}
        </Link>
        {lsWait && <button className='ls_button'>Logging In...</button>}
        <div className='ls_sub'>
          Don't have an account?
          <span className='ls_bold' onClick={() => setOpenLogin(false)}> Sign Up</span>
        </div>
      </center>}
    </div>
  )
}