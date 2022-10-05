import AddMeal from './AddMeal';
import { useState } from 'react';
import './Meal.css';

export default function Meal(props) {
  const [item, setItem] = useState(parseInt(localStorage.getItem(props.title)));
  const [zoom, setZoom] = useState(0);

  function zoomHandler() { setZoom(1); }
  function resetZoomHandler() { setZoom(0); }
  function getItemHandler(props) { setItem(props) }

  return (
    <>
      <div className={`${zoom === 1 ? 'image_modal_active' : 'image_modal'}`} onClick={resetZoomHandler}>
        <img src={`./images/${props.name}.png`} height="260px" className="zoomed_image" />
      </div>
      <div className={`meal ${item > 0 ? 'added' : ''}`}>
        <center>
          <img
            src={`./images/${props.name}.png`}
            height="130px"
            className="meal_image"
            onClick={zoomHandler} />
        </center>
        <div className="meal_title">{props.title}</div>
        <div className={`meal_subtitle ${item > 0 ? 'added' : ''}`}>{props.quantity}</div>
        <div className={`meal_subtitle ${item > 0 ? 'added' : ''}`}>{props.disc}</div>
        <div className="meal_price">₹{props.price}</div>
        <AddMeal title={props.title} onGetItem={getItemHandler} />
      </div>
    </>
  )
}