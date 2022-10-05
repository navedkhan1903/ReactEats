import './CategoryItem.css';
import { useState } from 'react';

export default function CategoryItem(props) {
  const [active, setActive] = useState(props.status);

  function onEnterHandler() { setActive("1"); }
  function onLeaveHandler() { setActive(props.status); }
  function selectedHandler() { props.onSelect(props.name); }

  return (
    <div
      className={`category_item ${active === "1" ? 'active' : ''} `}
      onMouseEnter={onEnterHandler}
      onMouseLeave={onLeaveHandler}
      onClick={selectedHandler}>
      <center>
        <img src={`./images/${props.name}.png`} height="55px" />
        <div className={`category_item_text ${active === "1" ? 'active' : ''}`}>{props.text}</div>
      </center>
    </div>
  )
}