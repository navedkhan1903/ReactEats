import './CategoryList.css';
import React, { useState } from 'react';
import CategoryItem from './CategoryItem';
import { categories } from '../Data/CategoryData';

function CategoryList(props) {
  const [array, setArray] = useState();
  const [name, setName] = useState("All Items");

  function selectHandler(props) {
    for (var i = 0; i < 8; i++) categories[i].status = "0";
    var index = categories.findIndex(i => i.name === props);
    categories[index].status = "1";
    setArray([...categories]); setName(props);
  }

  props.getName(name);

  return (
    <div className="category_items">
      {categories.map(x => (<CategoryItem {...x} key={Math.random()} onSelect={selectHandler} />))}
    </div>
  )
}

export default React.memo(CategoryList);