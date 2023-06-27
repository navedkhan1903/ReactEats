export async function getName(setDisplayName) {
  const fetchUrl = 'https://reacteats-884d9-default-rtdb.firebaseio.com/';
  const response = await fetch(fetchUrl + localStorage.getItem("id") + '/name.json');
  const data = await response.json();
  setDisplayName(data);
  localStorage.setItem("username", data[Object.keys(data)[0]].name);
}