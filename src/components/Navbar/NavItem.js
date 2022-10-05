import { useState } from 'react';
import './NavItem.css';

export default function NavItem(props) {
  const [active, setActive] = useState(props.status);

  function onEnterHandler() { setActive("1"); }
  function onLeaveHandler() { setActive(props.status); }
  function navNameHandler() { props.onGetNav(props.value); }

  return (
    <div
      className={`nav_item ${active === "1" ? 'active' : ''} `}
      onMouseEnter={onEnterHandler}
      onMouseLeave={onLeaveHandler}
      onClick={navNameHandler}>
      <div className={`nav_item_image ${active === "1" ? 'active' : ''} `}>
        {active === "1" && <img src={`./images/${props.name}_active.png`} height="16px" />}
        {active === "0" && <img src={`./images/${props.name}.png`} height="16px" />}
      </div>
      {props.value}
    </div>
  )
}