import { useState } from 'react';
import LoginSignup from './LoginSignup';
import './Home.css';

export default function Home() {
  const [getStarted, setGetStarted] = useState(false);
  function getStartedHandler() { setGetStarted(true); }

  return (
    <div className="home">
      <div className='home_content'>
        <center>
          <div className='home_title'>React<span className='eats'>Eats</span></div>
          <div className='home_sub'>Get your favourite meal delivered<br />at your doorstep.</div>
          <button className='home_button' onClick={getStartedHandler}>Get Started</button>
        </center>
      </div>
      <div className={`${getStarted ? 'image_modal_active' : 'image_modal'}`}>
        <LoginSignup />
      </div>
    </div>
  )
}