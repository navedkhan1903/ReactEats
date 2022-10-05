import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './NavBar.css';
import NavItem from './NavItem';

var navItems = [
  { value: "Home", name: "house", status: "1" },
  { value: "Cart", name: "cart", status: "0" },
  { value: "History", name: "history", status: "0" },
  { value: "Log Out", name: "logout", status: "0" }
];

function NavBar(props) {
  const [status, setStatus] = useState([...navItems]);
  const [navName, setNavName] = useState();

  function useGetNavHandler(props) {
    for (var i = 0; i < 4; i++) navItems[i].status = "0";
    var index = navItems.findIndex(i => i.value === props);
    navItems[index].status = "1";
    setStatus([...navItems]);
    setNavName(props);
  }
  props.onGetNavName(navName);

  return (
    <div className="sidenav">
      <div className="user_image">
        <img src="./images/man.png" height="60px" />
      </div>
      <div className="username">React User</div>
      {navItems.map(x => (
        <NavItem value={x.value} name={x.name} status={x.status} onGetNav={useGetNavHandler} key={Math.random()} />
      ))}
    </div>
  )
}

export default React.memo(NavBar);