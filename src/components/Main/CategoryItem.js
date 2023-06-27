import './CategoryItem.css';
import { useState } from 'react';

export default function CategoryItem({ status, name, text, onSelect }) {
  const [active, setActive] = useState(status);

  return (
    <div
      className={`category_item ${active === "1" ? 'active' : ''} `}
      onMouseEnter={() => setActive("1")}
      onMouseLeave={() => setActive(status)}
      onClick={() => onSelect(name)}>
      <center>
        <img src={`./images/${name}.png`} height="55px" />
        <div className={`category_item_text sec ${active === "1" ? 'active' : ''}`}>{text}</div>
      </center>
    </div>
  )
}