import './App.css';
import Loader from './components/Loader';
import Main from './components/Main/Main';
import { Route, Routes } from 'react-router-dom';
import { meals, filteredMeals } from './components/Data/MealsData';
import React, { useState, useEffect, useCallback, Suspense } from 'react';
const Home = React.lazy(() => import('./components/Home/Home'));
const NavBar = React.lazy(() => import('./components/Navbar/NavBar'));
const Cart = React.lazy(() => import('./components/Cart/Cart'));
const History = React.lazy(() => import('./components/History/History'));

for (var i = 0; i < 56; i++) { localStorage.setItem(meals[i].title, 0); }

export default function App(props) {
  const [name, setName] = useState();
  const [arr, setArray] = useState(meals);
  const [section, setSection] = useState("Home");
  const [loggedIn, setLoggedIn] = useState(false);

  const loginInfo = localStorage.getItem("login");
  useEffect(() => { if (loginInfo === "true") setLoggedIn(true); }, [])

  function useGetEnteredText(props) {
    useEffect(() => {
      const search = meals.filter(item => item.name.includes(props));
      setArray([...search]);
    }, [props])
  }

  useEffect(() => { setArray(name in filteredMeals ? [...filteredMeals[name]] : [...meals]); }, [name])

  const useGetNavHandler = useCallback((props) => {
    if (props === "Log Out") {
      for (var i = 0; i < 56; i++) { localStorage.setItem(meals[i].title, 0); }
      setLoggedIn(false); setSection("Home");
    }
  }, [props])

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {loggedIn && <Route path='*' element={
          <div className="row">
            <div className="main_col col-xl-2"><NavBar onGetNavName={useGetNavHandler} /></div>
            <div className="main_col col-xl-10">
              <Routes>
                <Route path='/Home' element={<Main items={arr} getName={(props) => setName(props)} onGetEnteredText={useGetEnteredText} />} />
                <Route path='/Cart' element={<Cart section={section} items={meals} />} />
                <Route path='/History' element={<History />} />
              </Routes>
            </div>
          </div>
        } />}
        {!loggedIn && <Route path='*' element={<Home onLoginStatus={(props) => setLoggedIn(props)} />} />}
      </Routes>
    </Suspense>
  );
}