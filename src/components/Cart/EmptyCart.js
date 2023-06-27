import './EmptyCart.css';

export default function EmptyCart() {
  return (
    <center>
      <div className='centered'>
        <img src="./images/empty-cart.png" width="150px" />
        <div className="cart_empty sec">
          Your Cart is currently empty.<br />Please add items from the menu.
        </div>
      </div>
    </center>
  )
}