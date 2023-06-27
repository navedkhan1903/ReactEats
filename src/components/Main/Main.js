import './Main.css';
import Meal from './Meal';
import SearchBox from './SearchBox';
import CategoryList from './CategoryList';
import { useState, useCallback } from 'react';

export default function Main(props) {
	const [name, setName] = useState();
	const [text, setText] = useState();

	const getNameHandler = useCallback((props) => { setName(props); }, [])
	props.getName(name);
	props.onGetEnteredText(text);

	return (
		<div className="main">
			<div className="title primary">Welcome to<br />React<span className='title_bold'>Eats</span></div>
			<img src="./images/full.png" height="50px" className="tasty" />
			<SearchBox onGetText={(props) => setText(props)} />
			<CategoryList getName={getNameHandler} />
			<div className="category_title primary">{name}</div>
			<hr />
			<div className="meals">{props.items.map((x) => (<Meal {...x} key={Math.random()} />))}</div>
		</div >
	)
}