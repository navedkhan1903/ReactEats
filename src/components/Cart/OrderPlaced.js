import './OrderPlaced.css';
import { RiCloseLine } from 'react-icons/ri';

export default function OrderPlaced({ onClick }) {
  return (
    <center>
      <div className='order_placed centered'>
        <div className='cross' onClick={onClick}>
          <RiCloseLine size="20" color='#323142' />
        </div>
        <img src="./images/check.png" width="100px" />
        <div className='order_placed_pri primary'>Woohoo!<br />Your order has been placed</div>
        <div className='order_placed_sec sec'>
          Pull up a chair, sit back and relax<br />as your order is on its way to you!
        </div>
      </div>
    </center>
  )
}