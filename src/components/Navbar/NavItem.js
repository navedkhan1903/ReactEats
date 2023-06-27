import './NavItem.css';
import { useState } from 'react';

export default function NavItem({ icon, status, value, onGetNav }) {
  const IconTag = icon;
  const [active, setActive] = useState(status);

  return (
    <div
      className={`nav_item sec ${active === "1" ? 'active' : ''} `}
      onMouseEnter={() => setActive("1")}
      onMouseLeave={() => setActive(status)}
      onClick={() => onGetNav(value)}>
      <div className={`nav_item_image ${active === "1" ? 'active' : ''} `}>
        <IconTag size="20" color={active === "1" ? 'white' : '#808080'} />
      </div>
      {value}
    </div>
  )
}