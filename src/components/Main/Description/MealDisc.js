import './MealDisc.css';
import Reviews from './Reviews';
import Nutrition from './Nutrition';
import { RiCloseLine } from 'react-icons/ri';
import { AiTwotoneStar } from 'react-icons/ai';
import { TbDna, TbBread, TbCheese, TbBolt } from 'react-icons/tb';

export default function MealDisc({ closeModal, title, type, rating, disc1, disc2, nutrition, name }) {
  return (
    <div className='disc row centered'>
      <div className='col-xl-6 left'>
        <div className='disc_close' onClick={closeModal}><center><RiCloseLine size="20" /></center></div>
        <img src={`./images/${name}.png`} height="130px" className='disc_img' />
        <div className='disc_title primary'>{title}
          <img className='type' src={`./images/${type}.png`} width="19px" />
        </div>
        {parseInt(rating) == 5 && <div className='disc_stars'><AiTwotoneStar color='#FFB94E' /><AiTwotoneStar color='#FFB94E' /><AiTwotoneStar color='#FFB94E' /><AiTwotoneStar color='#FFB94E' /><AiTwotoneStar color='#FFB94E' /></div>}
        {parseInt(rating) == 4 && <div className='disc_stars'><AiTwotoneStar color='#FFB94E' /><AiTwotoneStar color='#FFB94E' /><AiTwotoneStar color='#FFB94E' /><AiTwotoneStar color='#FFB94E' /><AiTwotoneStar color='#e6e6e6' /></div>}
        {parseInt(rating) == 3 && <div className='disc_stars'><AiTwotoneStar color='#FFB94E' /><AiTwotoneStar color='#FFB94E' /><AiTwotoneStar color='#FFB94E' /><AiTwotoneStar color='#e6e6e6' /><AiTwotoneStar color='#e6e6e6' /></div>}
        <div className='disc_rating'>{rating}</div>
        <div className='disc_disc sec'>{disc1}<br /><br />{disc2}</div>
        <Nutrition icon={TbBolt} nutrition={nutrition[0]} category="Calories" />
        <Nutrition icon={TbBread} nutrition={nutrition[1]} category="Carbs" />
        <Nutrition icon={TbCheese} nutrition={nutrition[2]} category="Fat" />
        <Nutrition icon={TbDna} nutrition={nutrition[3]} category="Protein" />
      </div>
      <div className='col-xl-6 right'>
        <Reviews name={title} />
      </div>
    </div>
  )
}