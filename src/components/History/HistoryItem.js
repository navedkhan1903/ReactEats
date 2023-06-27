import './HistoryItem.css';

export default function HistoryItem(props) {
  return (
    <table>
      <tr className={`${props.index % 2 !== 0 ? 'history_row_odd' : ''}`}>
        <td className='history_value order_id primary'>{props.id}</td>
        <td className='history_value items primary'>
          {props.meal_disc.map(x => (<tr>{x.noOfItems}x {x.title}</tr>))}
        </td>
        <td className='history_value order_date primary'>{props.date}</td>
        <td className='history_value order_time primary'>{props.time}</td>
        <td className='history_value total_amount primary'>₹{props.grand}</td>
      </tr>
    </table>
  )
}