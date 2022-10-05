import { useState, useCallback } from 'react';
import './Main.css';
import CategoryList from './CategoryList';
import SearchBox from './SearchBox';
import Meal from './Meal';

export default function Main(props) {
	const [name, setName] = useState();
	const [text, setText] = useState();

	const getNameHandler = useCallback((props) => { setName(props); }, [])
	function useGetTextHandler(props) { setText(props); }
	props.getName(name);
	props.onGetEnteredText(text);

	return (
		<div className="main">
			<div className="header">
				<div className="title">Welcome to<br />ReactEats</div>
				<img src="./images/full.png" height="50px" className="tasty" />
				<SearchBox onGetText={useGetTextHandler} />
			</div>
			<CategoryList getName={getNameHandler} />
			<div className="category_title">{name}</div>
			<hr />
			<div className="meals">
				{props.items.map((x) => (
					<Meal
						title={x.title}
						quantity={x.quantity}
						disc={x.disc}
						price={x.price}
						name={x.name}
						key={Math.random()} />
				))}
			</div>
		</div >
	)
}