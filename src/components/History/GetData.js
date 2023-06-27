export async function getData(setLoading, setHistory) {
  setLoading(true);
  const fetchUrl = 'https://reacteats-884d9-default-rtdb.firebaseio.com/';
  const response = await fetch(fetchUrl + localStorage.getItem("id") + '/history.json');
  const data = await response.json();
  const historyArr = [];
  for (const key in data) {
    historyArr.push({
      id: key, meal_disc: data[key].meal_disc, grand: data[key].grand, date: data[key].date, time: data[key].time
    })
  }
  setHistory(...[historyArr]);
  setLoading(false);
}