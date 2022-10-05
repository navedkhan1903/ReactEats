import { useState, useEffect } from 'react';
import './Cart.css';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

var cartArr = [];

export default function Cart(props) {
	const [arr, setArr] = useState(cartArr);
	const [items, setItems] = useState(0);
	const [subtotal, setSubtotal] = useState();
	const [delivery, setDelivery] = useState();

	function noOfItemsHandler(props) { setItems(props); }

	useEffect(() => {
		cartArr = [];
		for (var key in localStorage) {
			if (parseInt(localStorage.getItem(key)) > 0) {
				var index = props.items.findIndex(i => i.title === key);
				let obj = {
					title: key,
					quantity: props.items[index].quantity,
					imageSrc: props.items[index].name,
					price: props.items[index].price * parseInt(localStorage.getItem(key)),
					noOfItems: localStorage.getItem(key)
				};
				cartArr.push(obj);
			};
		};
		setArr([...cartArr]);
		let tot = 0, del = 0;
		for (var i in cartArr) {
			tot += cartArr[i].price;
			del += parseInt(localStorage.getItem(cartArr[i].title) * 5);
		}
		setSubtotal(tot);
		setDelivery(del);
	}, [props, items])

	function clearArrHandler() {
		for (var i = 0; i < cartArr.length; i++) { localStorage.setItem(cartArr[i].title, 0); }
		cartArr = [];
		setArr([]);
		setSubtotal(0);
		setDelivery(0);
	}

	return (
		<div className="row cart">
			<div className="main_col col-xl-8">
				<div className="cart_heading">Your Cart</div>
				<table>
					{arr.map(x => (
						<tr key={Math.random()}>
							<CartItem
								title={x.title}
								quantity={x.quantity}
								imageSrc={x.imageSrc}
								key={Math.random()}
								price={x.price}
								onNoOfItems={noOfItemsHandler} />
						</tr>
					))}
				</table>
				{cartArr.length === 0 && <center>
					<img src="./images/empty-cart.png" width="150px" className='cart_empty_img' />
					<div className="cart_empty">
						Your Cart is currently empty.<br />Please add items from the menu.
					</div>
				</center>}
			</div>
			<div className="main_col col-xl-4">
				<CartSummary
					subtotal={parseFloat(subtotal)}
					delivery={parseFloat(delivery)}
					items={cartArr}
					onClearArrHandler={clearArrHandler} />
			</div >
		</div>
	)
}