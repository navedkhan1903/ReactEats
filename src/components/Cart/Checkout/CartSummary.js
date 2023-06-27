import "./CartSummary.css";
import Coupons from "./Coupons";
import CartTotal from './CartTotal';
import { useState, useEffect } from 'react';
import { coupons } from "../../Data/CouponData";
import { couponHandler } from "./CouponHandler";
import { FcHighPriority } from 'react-icons/fc';
import { RiInformationLine } from 'react-icons/ri';
import { postDataHandler } from "./PostDataHandler";

export default function CartSummary({ subtotal, delivery, items, onClearArrHandler }) {
  const [off, setOff] = useState(0);
  const [code, setCode] = useState();
  const [coupon, setCoupon] = useState(false);
  const [couponError, setCouponError] = useState();
  const [placeOrder, setPlaceOrder] = useState(false);
  const [couponList, setCouponList] = useState(false);
  const [invalidCoupon, setInvalidCoupon] = useState(false);

  function codeHandler(event) {
    if (event.target.value !== "PAL25") { setCoupon(false); setOff(0); setInvalidCoupon(false); }
    setCode(event.target.value);
  }

  function couponErrorHandler() {
    setInvalidCoupon(true);
    setCouponError(coupons.find(coupon => coupon.name === code).error);
  }

  useEffect(() => {
    couponHandler(setInvalidCoupon, setCouponError, setOff, code, setCoupon, subtotal, couponErrorHandler, delivery, items);
  }, [subtotal]);

  const sub = subtotal.toFixed(2);
  const coup = off.toFixed(2);
  const tax = (subtotal * 0.05).toFixed(2);
  const del = delivery.toFixed(2);
  const grand = (subtotal + parseInt(tax) + parseInt(del) - off).toFixed(2);

  return (
    <>
      {couponList && <div className={`${couponList ? 'modal_active' : ''}`} onClick={() => setCouponList(false)}>
        <Coupons getName={(props) => { setCode(props); setInvalidCoupon(false); setOff(0); setCoupon(false) }} />
      </div>}
      <div className="summ">
        <label className="summ_label sec">Have a Coupon Code?</label>
        <RiInformationLine color="gray" className="coupon_i" onClick={() => setCouponList(true)} />
        <div className="coupon">
          <input type="text" placeholder="COUPON CODE" className="summ_input primary" onChange={codeHandler} value={code} />
          {coupon && <button className="apply_button">Applied!</button>}
          {!coupon && <button className="apply_button" onClick={() => couponHandler(setInvalidCoupon, setCouponError, setOff, code, setCoupon, subtotal, couponErrorHandler, delivery, items)}>Apply</button>}
          {invalidCoupon && <>
            <FcHighPriority />
            <div className="coupon_error">{couponError}</div>
          </>}
        </div>
        <div className="coupon">
          <CartTotal sub={sub} off={off} coup={coup} tax={tax} del={del} grand={grand} />
        </div>
        {!placeOrder && <button className="checkout_button" onClick={() => postDataHandler(setPlaceOrder, items, grand, setCoupon, setCode, setOff, onClearArrHandler)}>Place Order</button>}
        {placeOrder && <button className="checkout_button">Placing Order...</button>}
      </div>
    </>
  )
}