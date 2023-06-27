import './Coupons.css';
import { coupons } from '../../Data/CouponData';

function CouponItem({ name, disc, onClick }) {
  return (
    <div className='coupon_item' onClick={() => onClick(name)}>
      <img src={`./images/${name}.png`} width="40px" className='coupon_img'></img>
      <div className='coupon_info'>
        <div className='coupon_name primary'>{name}</div>
        <div className='coupon_disc sec'>{disc}</div>
      </div>
    </div>
  )
}

export default function Coupons({ getName }) {
  return (
    <div className="coupons_container centered">
      <div className='coupons_title primary'><center>Available coupon codes</center></div>
      {coupons.map((x) => (<CouponItem {...x} key={Math.random()} onClick={getName} />))}
    </div>
  )
}