import './Home.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginSignup from './LoginSignup';

export default function Home({ onLoginStatus }) {
  const [login, setLogin] = useState(false);
  const [getStarted, setGetStarted] = useState(false);
  onLoginStatus(login);

  return (
    <div className="home">
      <div className='home_content centered'>
        <center>
          <div className='home_title primary'>React<span className='eats'>Eats</span></div>
          <div className='home_sub sec'>Get your favourite meal delivered<br />at your doorstep.</div>
          <Link to="/Auth">
            <button className='home_button' onClick={() => setGetStarted(true)}>Get Started</button>
          </Link>
        </center>
      </div>
      <div className={`${getStarted ? 'modal_active' : 'modal'}`}>
        <LoginSignup onLoginStatus={(props) => setLogin(props)} />
      </div>
    </div>
  )
}