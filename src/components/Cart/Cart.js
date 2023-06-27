import './Cart.css';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import OrderPlaced from './OrderPlaced';
import { useState, useEffect } from 'react';
import CartSummary from './Checkout/CartSummary';

var cartArr = [];

export default function Cart(props) {
	const [items, setItems] = useState(0);
	const [arr, setArr] = useState(cartArr);
	const [subtotal, setSubtotal] = useState();
	const [delivery, setDelivery] = useState();
	const [orderPlaced, setOrderPlaced] = useState(false);

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
					type: props.items[index].type,
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
		setSubtotal(tot); setDelivery(del);
	}, [props, items])

	function clearArrHandler() {
		for (var i = 0; i < cartArr.length; i++) { localStorage.setItem(cartArr[i].title, 0); }
		cartArr = []; setArr([]); setSubtotal(0); setDelivery(0); setOrderPlaced(true);
	}

	return (
		<div className="row cart">
			<div className="main_col col-xl-8">
				<div className="cart_heading primary">Your Cart</div>
				<table>
					{arr.map(x => (
						<tr key={Math.random()}>
							<CartItem {...x} key={Math.random()} onNoOfItems={(props) => setItems(props)} />
						</tr>
					))}
				</table>
				{cartArr.length === 0 && <EmptyCart />}
			</div>
			{subtotal > 0 && <div className="main_col col-xl-4">
				<CartSummary subtotal={parseFloat(subtotal)} delivery={parseFloat(delivery)} items={cartArr} onClearArrHandler={clearArrHandler} />
			</div >}
			<div className={`${orderPlaced ? 'modal_active' : 'modal'}`}>
				<OrderPlaced onClick={() => setOrderPlaced(false)} />
			</div>
		</div>
	)
}