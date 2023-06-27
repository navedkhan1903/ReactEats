import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ onGetText }) {
  const [text, setText] = useState();

  function getText(event) {
    setTimeout(function () {
      setText(event.target.value.toLowerCase().replace(/ +/g, "_"));
    }, 500)
  }
  onGetText(text);

  return (
    <input type="text" placeholder="Search food item" className="searchbox primary" onChange={getText}></input>
  )
}