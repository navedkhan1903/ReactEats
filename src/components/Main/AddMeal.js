import { useState } from 'react';
import './AddMeal.css';

export default function AddMeal(props) {
  const [item, setItem] = useState(parseInt(localStorage.getItem(props.title)));

  function addItemHandler() { setItem(item + 1); }
  function subItemHandler() { setItem(item - 1); }

  localStorage.setItem(props.title, item);
  props.onGetItem(item);

  return (
    <>
      {item === 0 && <div className="add_item" onClick={addItemHandler}>
        <center><div className="default">ADD</div></center>
      </div>}
      {item > 0 && <div className="add_item">
        <center>
          <div className="minus" onClick={subItemHandler}>
            <img src="./images/minus.png" height="10px" />
          </div>
          <div className="default">{item}</div>
          <div className="plus" onClick={addItemHandler}>
            <img src="./images/plus.png" height="10px" />
          </div>
        </center>
      </div>}
    </>
  )
}