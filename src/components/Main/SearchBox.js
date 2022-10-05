import { useState } from 'react';
import './SearchBox.css';

export default function SearchBox(props) {
  const [text, setText] = useState();

  function getText(event) {
    setTimeout(function () {
      setText(event.target.value.toLowerCase().replace(/ +/g, "_"));
    }, 500)
  }

  props.onGetText(text);
  return (
    <input type="text" placeholder="Search food item" className="searchbox" onChange={getText}></input>
  )
}