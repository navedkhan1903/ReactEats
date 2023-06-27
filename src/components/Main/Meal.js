import './Meal.css';
import AddMeal from './AddMeal';
import { useState } from 'react';
import MealDisc from './Description/MealDisc';
import { AiTwotoneStar } from 'react-icons/ai';
import { RiInformationLine } from 'react-icons/ri';

export default function Meal({ title, quantity, disc, price, name, rating, type, disc1, disc2, nutrition }) {
  const [zoom, setZoom] = useState("0");
  const [item, setItem] = useState(parseInt(localStorage.getItem(title)));

  return (
    <>
      {zoom === "1" && <div className={`${zoom === "1" ? 'modal_active' : 'modal'}`}>
        <MealDisc closeModal={() => setZoom("0")} title={title} quantity={quantity} disc={disc} price={price} name={name} rating={rating} type={type} disc1={disc1} disc2={disc2} nutrition={nutrition} />
      </div>}
      <div className={`meal ${item > 0 ? 'added' : ''}`}>
        <center>
          <img src={`./images/${name}.png`} height="130px" className="meal_image" />
        </center>
        <div className="meal_title primary">{title}</div>
        <div className='rating'>
          <AiTwotoneStar color='#FFB94E' />
          <div className={`meal_rating ${item > 0 ? 'added' : ''}`}>{rating}{quantity}</div>
          <RiInformationLine className={`info ${item > 0 ? 'added' : ''}`} onClick={() => setZoom("1")} />
        </div>
        <div className={`meal_subtitle ${item > 0 ? 'added' : ''}`}>{disc}</div>
        <div className="meal_price primary">₹{price}</div>
        <AddMeal title={title} onGetItem={setItem} />
      </div>
    </>
  )
}