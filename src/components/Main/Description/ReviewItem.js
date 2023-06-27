import './ReviewItem.css';
import { HiUserCircle } from 'react-icons/hi';
import { AiTwotoneStar } from 'react-icons/ai';

export default function ReviewItem({ username, rating, review }) {
  return (
    <>
      <HiUserCircle size="45" className='user_img' color="gray" />
      <div className='name_stars'>
        <div className='user_name primary'>{username}</div>
        <div className='review_stars'>
          {rating === 1 && <><AiTwotoneStar color='#FFB94E' /><AiTwotoneStar color='#e6e6e6' /><AiTwotoneStar color='#e6e6e6' /><AiTwotoneStar color='#e6e6e6' /><AiTwotoneStar color='#e6e6e6' /></>}
          {rating === 2 && <><AiTwotoneStar color='#FFB94E' /><AiTwotoneStar color='#FFB94E' /><AiTwotoneStar color='#e6e6e6' /><AiTwotoneStar color='#e6e6e6' /><AiTwotoneStar color='#e6e6e6' /></>}
          {rating === 3 && <><AiTwotoneStar color='#FFB94E' /><AiTwotoneStar color='#FFB94E' /><AiTwotoneStar color='#FFB94E' /><AiTwotoneStar color='#e6e6e6' /><AiTwotoneStar color='#e6e6e6' /></>}
          {rating === 4 && <><AiTwotoneStar color='#FFB94E' /><AiTwotoneStar color='#FFB94E' /><AiTwotoneStar color='#FFB94E' /><AiTwotoneStar color='#FFB94E' /><AiTwotoneStar color='#e6e6e6' /></>}
          {rating === 5 && <><AiTwotoneStar color='#FFB94E' /><AiTwotoneStar color='#FFB94E' /><AiTwotoneStar color='#FFB94E' /><AiTwotoneStar color='#FFB94E' /><AiTwotoneStar color='#FFB94E' /></>}
        </div>
      </div>
      <div className='review sec'>{review}</div>
    </>
  )
}