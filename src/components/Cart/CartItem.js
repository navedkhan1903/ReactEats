import './CartItem.css';
import { useState } from 'react';
import AddMeal from '../Main/AddMeal';

export default function CartItem({ title, onNoOfItems, imageSrc, quantity, price }) {
  const [item, setItem] = useState(parseInt(localStorage.getItem(title)));
  onNoOfItems(item);

  return (
    <>
      {item > 0 && <div className="cart_item">
        <div className="cart_img">
          <center><img src={`./images/${imageSrc}.png`} height="75px" /></center>
        </div>
        <div className="cart_item_details">
          <div className="cart_item_title primary">{title}</div>
          <div className="cart_item_quantity sec">{quantity}</div>
        </div>
        <div className="cart_add"><AddMeal title={title} onGetItem={(props) => setItem(props)} /></div>
        <div className="cart_item_price primary">₹{price}</div>
      </div >}
    </>
  )
}