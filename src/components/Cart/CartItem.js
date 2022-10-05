import { useState } from 'react';
import './CartItem.css';
import AddMeal from '../Main/AddMeal';

export default function CartItem(props) {
  const [item, setItem] = useState(parseInt(localStorage.getItem(props.title)));

  function getItemHandler(props) { setItem(props); }
  props.onNoOfItems(item);

  return (
    <>
      {item > 0 && <div className="cart_item">
        <div className="cart_img">
          <center><img src={`./images/${props.imageSrc}.png`} height="80px" /></center>
        </div>
        <div className="cart_item_details">
          <div className="cart_item_title">{props.title}</div>
          <div className="cart_item_quantity">{props.quantity}</div>
        </div>
        <div className="cart_add"><AddMeal title={props.title} onGetItem={getItemHandler} /></div>
        <div className="cart_item_price">₹{props.price}</div>
      </div >}
    </>
  )
}