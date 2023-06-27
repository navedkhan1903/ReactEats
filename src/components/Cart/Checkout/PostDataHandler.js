export async function postDataHandler(setPlaceOrder, items, grand, setCoupon, setCode, setOff, onClearArrHandler) {
  setPlaceOrder(true);
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  const postData = { meal_disc: items, grand: grand, date: date, time: time };
  const fetchUrl = 'https://reacteats-884d9-default-rtdb.firebaseio.com/';
  await fetch(fetchUrl + localStorage.getItem("id") + '/history.json', { method: 'POST', body: JSON.stringify(postData) })
  setPlaceOrder(false); setCoupon(false); setCode(""); setOff(0); onClearArrHandler();
}