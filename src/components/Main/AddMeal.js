import './AddMeal.css';
import { useState } from 'react';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';

export default function AddMeal({ title, onGetItem }) {
  const [item, setItem] = useState(parseInt(localStorage.getItem(title)));
  localStorage.setItem(title, item);
  onGetItem(item);

  return (
    <>
      {item === 0 && <div className="add_item" onClick={() => setItem(item + 1)}>
        <center><div className="default">ADD</div></center>
      </div>}
      {item > 0 && <div className="add_item">
        <center>
          <div className="minus" onClick={() => setItem(item - 1)}><RiSubtractLine color='white' /></div>
          <div className="default">{item}</div>
          <div className="plus" onClick={() => setItem(item + 1)}><RiAddLine color='white' /></div>
        </center>
      </div>}
    </>
  )
}