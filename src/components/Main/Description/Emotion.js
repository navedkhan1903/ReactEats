import './Emotion.css';
import { useState } from 'react';
import { RiEmotionUnhappyLine, RiEmotionSadLine, RiEmotionNormalLine, RiEmotionHappyLine, RiEmotionLine, RiEmotionUnhappyFill, RiEmotionSadFill, RiEmotionNormalFill, RiEmotionHappyFill, RiEmotionFill } from 'react-icons/ri';

export default function Emotion({ onGetEmotion }) {
  const [emotion, setEmotion] = useState([0, 0, 0, 0, 0]);
  onGetEmotion(emotion);

  return (
    <div className='emotion_container'>
      {!emotion[0] && <div className='emotion' onClick={() => setEmotion([1, 0, 0, 0, 0])}>
        <RiEmotionUnhappyLine size="30" color='#323142' /></div>}
      {emotion[0] === 1 && <div className='emotion'>
        <RiEmotionUnhappyFill size="30" color='#F22613' /></div>}
      {!emotion[1] && <div className='emotion' onClick={() => setEmotion([0, 1, 0, 0, 0])}>
        <RiEmotionSadLine size="30" color='#323142' /></div>}
      {emotion[1] === 1 && <div className='emotion'>
        <RiEmotionSadFill size="30" color='#F9690E' /></div>}
      {!emotion[2] && <div className='emotion' onClick={() => setEmotion([0, 0, 1, 0, 0])}>
        <RiEmotionNormalLine size="30" color='#323142' /></div>}
      {emotion[2] === 1 && <div className='emotion'>
        <RiEmotionNormalFill size="30" color='#FFA400' /></div>}
      {!emotion[3] && <div className='emotion' onClick={() => setEmotion([0, 0, 0, 1, 0])}>
        <RiEmotionHappyLine size="30" color='#323142' /></div>}
      {emotion[3] === 1 && <div className='emotion'>
        <RiEmotionHappyFill size="30" color='#16A085' /></div>}
      {!emotion[4] && <div className='emotion' onClick={() => setEmotion([0, 0, 0, 0, 1])}>
        <RiEmotionLine size="30" color='#323142' /></div>}
      {emotion[4] === 1 && <div className='emotion'>
        <RiEmotionFill size="30" color='#006442' /></div>}
    </div>
  )
}