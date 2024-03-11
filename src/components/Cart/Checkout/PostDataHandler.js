export async function postDataHandler(setPlaceOrder, items, grand, setCoupon, setCode, setOff, onClearArrHandler) {
  setPlaceOrder(true);
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
  const postData = JSON.stringify({ meal_disc: items, grand: grand, date: date, time: time, userId: localStorage.getItem("id") });
  // const fetchUrl = 'https://reacteats-884d9-default-rtdb.firebaseio.com/';
  // await fetch(fetchUrl + localStorage.getItem("id") + '/history.json', { method: 'POST', body: JSON.stringify(postData) })
  try {
    await fetch("https://react-eats-backend-4zq8asb3b-naved-khans-projects.vercel.app/Cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: postData,
    });
  } catch (err) {
    console.log(err);
  }
  setPlaceOrder(false);
  setCoupon(false);
  setCode("");
  setOff(0);
  onClearArrHandler();
}
