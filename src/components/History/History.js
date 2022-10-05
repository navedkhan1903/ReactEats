import { useState, useEffect } from 'react';
import './History.css';
import HistoryItem from './HistoryItem';

export default function History() {
  const [history, setHistory] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await fetch('https://reacteats-884d9-default-rtdb.firebaseio.com/history.json');
      const data = await response.json();
      const historyArr = [];
      for (const key in data) {
        historyArr.push({
          id: key,
          meal_disc: data[key].meal_disc,
          grand: data[key].grand,
          date: data[key].date,
          time: data[key].time
        })
      }
      setHistory(...[historyArr]);
      setLoading(false);
    }
    getData();
  }, [])

  return (
    <div className="history">
      <div className='history_title'>Order History</div>
      {loading && <div className='loading'>
        <img src='./images/loader.gif' height="50px" />Loading...
      </div>}
      <table>
        <tr>
          <th className='history_key order_id'>ORDER ID</th>
          <th className='history_key items'>ITEMS</th>
          <th className='history_key order_date'>ORDER DATE</th>
          <th className='history_key order_time'>ORDER TIME</th>
          <th className='history_key total_amount'>TOTAL AMOUNT</th>
        </tr>
      </table>
      {history && history.map((x, index) => (
        <HistoryItem
          index={index}
          key={Math.random()}
          id={x.id}
          meal_disc={x.meal_disc}
          grand={x.grand}
          date={x.date}
          time={x.time} />
      ))}
    </div>
  )
}