import { useState, useEffect } from 'react';
import CartTotal from './CartTotal';
import "./CartSummary.css";

export default function CartSummary(props) {
  const [coupon, setCoupon] = useState(false);
  const [code, setCode] = useState();
  const [off, setOff] = useState(0);
  const [placeOrder, setPlaceOrder] = useState(false);

  function codeHandler(event) {
    if (event.target.value !== "PAL25") {
      setCoupon(false);
      setOff(0);
    }
    setCode(event.target.value);
  }

  function couponHandler(event) {
    if (code === "PAL25") {
      setCoupon(true);
      setOff(props.subtotal * 25 / 100);
    }
  }

  useEffect(() => {
    if (code === "PAL25") { setOff(props.subtotal * 25 / 100); }
  }, [props.subtotal]);

  const sub = props.subtotal.toFixed(2);
  const coup = off.toFixed(2);
  const tax = (props.subtotal * 5 / 100).toFixed(2);
  const del = props.delivery.toFixed(2);
  const grand = (props.subtotal + props.subtotal * 5 / 100 + props.delivery - off).toFixed(2);
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  const postData = { meal_disc: props.items, grand: grand, date: date, time: time };

  async function postDataHandler() {
    setPlaceOrder(true);
    const response = await fetch('https://reacteats-884d9-default-rtdb.firebaseio.com/history.json', {
      method: 'POST',
      body: JSON.stringify(postData)
    })
    setPlaceOrder(false);
    setCoupon(false);
    setCode("");
    setOff(0);
    props.onClearArrHandler();
  }

  return (
    <div className="summ">
      <label className="summ_label">Have a Coupon Code?</label>
      <div className="coupon">
        <input
          type="text"
          placeholder="COUPON CODE"
          className="summ_input"
          onChange={codeHandler}
          value={code} />
        {coupon && <button className="apply_button">Applied!</button>}
        {!coupon && <button className="apply_button" onClick={couponHandler}>Apply</button>}
      </div>
      <div className="coupon">
        <CartTotal sub={sub} off={off} coup={coup} tax={tax} del={del} grand={grand} />
      </div>
      {!placeOrder && <button className="checkout_button" onClick={postDataHandler}>Place Order</button>}
      {placeOrder && <button className="checkout_button">Placing Order...</button>}
    </div>
  )
}