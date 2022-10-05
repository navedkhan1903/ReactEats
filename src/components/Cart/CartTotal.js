import './CartTotal.css';

export default function CartTotal(props) {
  return (
    <>
      <div className="summ_key">Subtotal</div>
      <div className="summ_value">₹{props.sub}</div> <br />
      <div className="summ_key">Coupon</div>
      <div className={`summ_value ${props.off > 0 ? 'code' : ''}`}>-₹{props.coup}</div> <br />
      <div className="summ_key">Taxes</div>
      <div className="summ_value">₹{props.tax}</div> <br />
      <div className="summ_key">Delivery Charges</div>
      <div className="summ_value">₹{props.del}</div> <br />
      <div className="summ_key">Grand Total</div>
      <div className="summ_value">₹{props.grand}</div> <br />
    </>
  )
}