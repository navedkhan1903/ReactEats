import './NavBar.css';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';
import { getName } from './GetNameHandler';
import { navItems } from '../Data/NavItemsData';
import React, { useEffect, useState } from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

function NavBar({ onGetNavName }) {
  const [navName, setNavName] = useState();
  const [displayName, setDisplayName] = useState();
  const [status, setStatus] = useState([...navItems]);
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => { getName(setDisplayName); }, [])

  function useGetNavHandler(props) {
    for (var i = 0; i < 4; i++) navItems[i].status = "0";
    var index = navItems.findIndex(i => i.value === props);
    if (navItems[index].value === "Log Out") {
      navItems[0].status = "1";
      localStorage.setItem("login", "false");
    }
    else navItems[index].status = "1";
    setStatus([...navItems]); setNavName(props);
  }

  function renderNavItems() {
    return (
      navItems.map(x => (
        <Link to={x.value} style={{ textDecoration: 'none' }}>
          <NavItem {...x} onGetNav={useGetNavHandler} key={Math.random()} />
        </Link>
      ))
    )
  }

  useEffect(() => { setNavVisible(false) }, [navName])
  onGetNavName(navName);

  return (
    <>
      <div className="sidenav">
        <div className="user_image"><img src="./images/man.png" height="60px" /></div>
        {displayName && <div className="username primary">{displayName[Object.keys(displayName)[0]].name}</div>}
        {renderNavItems()}
      </div>
      <div className={`topnav ${navVisible ? 'visible' : ''}`}>
        {!navVisible ? <RiMenuLine size="20" color='#323142' className='lines' onClick={() => setNavVisible(true)} /> : <RiCloseLine size="20" className='lines' color='#323142' onClick={() => setNavVisible(false)} />}
        {displayName && <div className='topnav_name'>{displayName[Object.keys(displayName)[0]].name}</div>}
        <div className={`topnav_items ${navVisible ? 'visible' : ''}`}>{renderNavItems()}</div>
      </div>
    </>
  )
}

export default React.memo(NavBar);