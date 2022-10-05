import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import CategoryItem from './CategoryItem';
import './CategoryList.css';

var categories = [
  { text: "All", name: "All Items", status: "1" },
  { text: "Pizza", name: "Pizza", status: "0" },
  { text: "Chicken", name: "Chicken", status: "0" },
  { text: "Momos", name: "Momos", status: "0" },
  { text: "Rolls", name: "Rolls", status: "0" },
  { text: "Burgers", name: "Burgers", status: "0" },
  { text: "Desserts", name: "Desserts", status: "0" },
  { text: "Drinks", name: "Drinks", status: "0" }
]

function CategoryList(props) {
  const [array, setArray] = useState();
  const [name, setName] = useState("All Items");

  function selectHandler(props) {
    for (var i = 0; i < 8; i++) categories[i].status = "0";
    var index = categories.findIndex(i => i.name === props);
    categories[index].status = "1";
    setArray([...categories]);
    setName(props);
  }
  props.getName(name);

  return (
    <div className="category_items">
      {categories.map(x => (
        <CategoryItem
          text={x.text}
          name={x.name}
          status={x.status}
          key={Math.random()}
          onSelect={selectHandler} />
      ))}
    </div>
  )
}

export default React.memo(CategoryList);