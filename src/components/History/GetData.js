export async function getData(setLoading, setHistory) {
  setLoading(true);
  // const fetchUrl = 'https://reacteats-884d9-default-rtdb.firebaseio.com/';
  // const response = await fetch(fetchUrl + localStorage.getItem("id") + '/history.json');
  try {
    const response = await fetch("https://react-eats-backend-4zq8asb3b-naved-khans-projects.vercel.app/History/" + localStorage.getItem("id"));
    const data = await response.json();
    const historyArr = [];
    for (const key in data) {
      historyArr.push({
        id: data[key]._id,
        meal_disc: data[key].meal_disc,
        grand: data[key].grand,
        date: data[key].date,
        time: data[key].time,
      });
    }
    setHistory(...[historyArr]);
  } catch (err) {
    console.log(err);
  }
  setLoading(false);
}
