import './History.css';
import { getData } from './GetData';
import HistoryItem from './HistoryItem';
import { useState, useEffect } from 'react';
import Loader from '../../components/Loader';

export default function History() {
  const [history, setHistory] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => { getData(setLoading, setHistory); }, [])

  return (
    <div className="history">
      <div className='history_title primary'>Order History</div>
      {loading && <Loader />}
      <table>
        <tr>
          <th className='history_key order_id'>ORDER ID</th>
          <th className='history_key items'>ITEMS</th>
          <th className='history_key order_date'>ORDER DATE</th>
          <th className='history_key order_time'>ORDER TIME</th>
          <th className='history_key total_amount'>TOTAL AMOUNT</th>
        </tr>
      </table>
      <div className='history_items'>
        {history && history.map((x, index) => (
          <HistoryItem {...x} index={index} key={Math.random()} />
        ))}
      </div>
    </div>
  )
}