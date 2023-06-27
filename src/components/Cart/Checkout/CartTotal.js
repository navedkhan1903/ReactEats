import './CartTotal.css';

export default function CartTotal({ sub, off, coup, tax, del, grand }) {
  return (
    <>
      <div className="summ_key sec">Subtotal</div>
      <div className="summ_value primary">₹{sub}</div> <br />
      <div className="summ_key sec">Coupon</div>
      <div className={`summ_value primary ${off > 0 ? 'code' : ''}`}>-₹{coup}</div> <br />
      <div className="summ_key sec">Taxes</div>
      <div className="summ_value primary">₹{tax}</div> <br />
      <div className="summ_key sec">Delivery Charges</div>
      <div className="summ_value primary">₹{del}</div> <br />
      <div className="summ_key sec">Grand Total</div>
      <div className="summ_value primary">₹{grand}</div> <br />
    </>
  )
}