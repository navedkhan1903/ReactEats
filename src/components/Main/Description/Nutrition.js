import './Nutrition.css';

export default function Nutrition({ icon, nutrition, category }) {
  const Icon = icon;

  return (
    <div className='nutrition'>
      <center>
        <Icon size="20" color='gray' />
        <div className='value primary'>{nutrition}</div>
        <div className='category sec'>{category}</div>
      </center>
    </div>
  )
}