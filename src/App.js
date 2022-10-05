import { useState, useEffect, useCallback } from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';
import History from './components/History/History';
import AuthContext from './components/Data';
import Home from './components/Home/Home';

const meals = [
  {
    title: "Badam Pista Milkshake",
    disc: "This traditional Indian Badam Pista Milkshake is loaded with the goodness of saffron and nuts.",
    quantity: "Large",
    price: "120",
    name: "badam_pista_milkshake_drink",
  }, {
    title: "Black Forest Cake",
    disc: "Consists of several layers of chocolate cake sandwiched with whipped cream and cherries.",
    quantity: "500g",
    price: "300",
    name: "black_forest_cake_dessert",
  }, {
    title: "Blackcurrant Falooda",
    disc: "A creamy and rich indian street food dessert made with milk, rose syrup and dry fruits.",
    quantity: "Large",
    price: "160",
    name: "blackcurrant_falooda_drink",
  }, {
    title: "Butter Chicken",
    disc: "A type of curry made from chicken with a spiced tomato and butter sauce.",
    quantity: "Quarter",
    price: "150",
    name: "butter_chicken",
  }, {
    title: "Butter Scotch Cake",
    disc: "The sweetness of the butterscotch flavor is enough to make any occasion sweeter!",
    quantity: "500g",
    price: "290",
    name: "butter_scotch_cake_dessert",
  }, {
    title: "Cheese and Paneer Pizza",
    disc: "Pizza with toppings of Paneer, pizza sauce, mix veggies on a whole wheat crust.",
    quantity: "Regular",
    price: "80",
    name: "cheese_and_paneer_pizza",
  }, {
    title: "Cheese Burger",
    disc: "Cheese Burger topped with chopped onions, mustard, and a slice of melty American cheese.",
    quantity: "1 Burger",
    price: "50",
    name: "cheese_burger",
  }, {
    title: "Chicken Hyderabadi Biryani",
    disc: "This flavourful and delectable gastronomical magic is a treat to relish on.",
    quantity: "Quarter",
    price: "70",
    name: "chicken_hyderabadi_biryani",
  }, {
    title: "Chicken Kadhai",
    disc: "Kadai Chicken is a delicious Indian chicken curry where chicken is cooked with freshly ground spices.",
    quantity: "Quarter",
    price: "140",
    name: "chicken_kadhai",
  }, {
    title: "Chicken Korma",
    disc: "Chicken Korma is a gravy dish that is usually made with yogurt, lots of nuts and spices.",
    quantity: "Quarter",
    price: "110",
    name: "chicken_korma",
  }, {
    title: "Chocolate Cake",
    disc: "Rich in chocolate flavour with a tender-moist crumb, and fluffy with perfect amount of sweetness.",
    quantity: "500g",
    price: "320",
    name: "chocolate_cake_dessert",
  }, {
    title: "Cold Drink with Ice Cream",
    disc: "What better way to kick off warmer temperatures than Cold Drink with Ice Cream.",
    quantity: "Large",
    price: "80",
    name: "cold_drink_with_ice_cream",
  }, {
    title: "Corn Pizza",
    disc: "Prepared using pizza dough, sauce, corn, this is a pizza lover’s dream come true.",
    quantity: "Regular",
    price: "70",
    name: "corn_pizza",
  }, {
    title: "Deluxe Veggie Pizza",
    disc: "For a vegetarian looking for a BIG treat that goes easy on the spices, this one's got it all.",
    quantity: "Medium",
    price: "200",
    name: "deluxe_veggie_pizza",
  }, {
    title: "Double Cheese Margherita Pizza",
    disc: "The combined flavors of the sauce, soft dough and cheese, are bound to put you in a happy mood.",
    quantity: "Medium",
    price: "150",
    name: "double_cheese_margherita_pizza",
  }, {
    title: "Double Decker Burger",
    disc: "This Double Decker man-sized sandwich looks as delectable as it tastes.",
    quantity: "1 Burger",
    price: "90",
    name: "double_decker_burger",
  }, {
    title: "Farm House Pizza",
    disc: "As the name suggests, the farmhouse pizza is loaded with various fresh vegetarian toppings.",
    quantity: "Medium",
    price: "170",
    name: "farm_house_pizza",
  }, {
    title: "Fruit Cake",
    disc: "Cake Made with candied or dried fruit, nuts, and spices, and optionally soaked in spirits.",
    quantity: "500g",
    price: "180",
    name: "fruit_cake_dessert",
  }, {
    title: "KitKat Milkshake",
    disc: "Chocolate flavoured drink perfect to quench thirst and treat yourself on hot days.",
    quantity: "Large",
    price: "100",
    name: "kitkat_milkshake_drink",
  }, {
    title: "Mango Shake",
    disc: "Cool and tempting fruit drink prepared by simply blending ripe mango pieces, milk and sugar.",
    quantity: "Large",
    price: "110",
    name: "mango_shake_drink",
  }, {
    title: "Masala Burger",
    disc: "This bad boy has a flavorful veggie patty that resembles the cutlet you get in a frankie.",
    quantity: "1 Burger",
    price: "30",
    name: "masala_burger",
  }, {
    title: "Mixed Veg Roll",
    disc: "Loaded with the goodness of carrot, potatoes, chillies, chapati, and a melange of spices.",
    quantity: "2 Rolls",
    price: "60",
    name: "mixed_veg_roll",
  }, {
    title: "Muradabadi Chicken Biryani",
    disc: "Prepared using basmati rice, chicken, lemon juice, onions, green chillies, ginger, and the likes.",
    quantity: "Quarter",
    price: "60",
    name: "muradabadi_chicken_biryani",
  }, {
    title: "Onion Pizza",
    disc: "Made using pizza sauce, onion, capsicum, mozzarella, this pizza is absolutely lip-smacking.",
    quantity: "Regular",
    price: "60",
    name: "onion_pizza",
  }, {
    title: "Pan Fried Momos",
    disc: "Delicious snack that is shallow-fried on a hot pan and steamed until the outer layer is crisp.",
    quantity: "6 Pieces",
    price: "170",
    name: "pan_fried_momos",
  }, {
    title: "Paneer Burger",
    disc: "Marinated in Indian spices & herbs and dabbed with smoky chilli mayonnaise ",
    quantity: "1 Burger",
    price: "40",
    name: "paneer_burger",
  }, {
    title: "Paneer Butter Grilled Wrap",
    disc: "Lured by the aroma of panner, onions and capsicum tossed in a spicy marinade.",
    quantity: "2 Rolls",
    price: "130",
    name: "paneer_butter_grilled_roll",
  }, {
    title: "Paneer Lava Burger",
    disc: "Delicious, lip-smacking and crunchy these words will only remind you of this amazing dish",
    quantity: "1 Burger",
    price: "80",
    name: "paneer_lava_burger",
  }, {
    title: "Paneer Steamed Momos",
    disc: "Great party starter or appetiser which can be served just before the meal",
    quantity: "6 Pieces",
    price: "90",
    name: "paneer_steamed_momos",
  }, {
    title: "Paneer Wrap",
    disc: "Paneer tikka, green chutney, and a mixed veggie salad are wrapped in a whole wheat roti.",
    quantity: "2 Rolls",
    price: "100",
    name: "paneer_roll",
  }, {
    title: "Pineapple Cake",
    disc: "Sweet traditional pastry and dessert containing butter, flour, egg, sugar, and pineapple jam.",
    quantity: "500g",
    price: "270",
    name: "pineapple_cake_dessert",
  }, {
    title: "Plum Cake",
    disc: "Plum cake refers to the variety of cakes made with fruits and dry fruits.",
    quantity: "500g",
    price: "160",
    name: "plum_cake_dessert",
  }, {
    title: "Soya Chaap Roll",
    disc: "Soya chaap is wrapped in a roomali roti with cream, green chutney and onion rings.",
    quantity: "2 Rolls",
    price: "80",
    name: "soya_chaap_roll",
  }, {
    title: "Strawberry Falooda",
    disc: "Chilled dessert, delicious with rose syrup that consists of layers of vermicelli.",
    quantity: "Large",
    price: "130",
    name: "strawberry_falooda_drink",
  }, {
    title: "Tandoori Chicken",
    disc: "South Asian dish of chicken marinated in yogurt and spices and roasted in a tandoor.",
    quantity: "Quarter",
    price: "100",
    name: "tandoori_chicken",
  }, {
    title: "Tandoori Momos",
    disc: "Steamed momos marinated with a punch of Indian spices and a crunchy vegetable stuffing. ",
    quantity: "6 Pieces",
    price: "180",
    name: "tandoori_momos",
  }, {
    title: "Veg Aloo Wrap",
    disc: "Baby potatoes tossed in a spicy paste and then wrapped up with a flavoured curd dressing.",
    quantity: "2 Rolls",
    price: "90",
    name: "veg_aloo_roll",
  }, {
    title: "Veg Burger",
    disc: "Made with beans, chickpeas, lentils, tofu, tempeh, quinoa and a mix of different vegetables.",
    quantity: "1 Burger",
    price: "60",
    name: "veg_burger",
  }, {
    title: "Veg Fried Momos",
    disc: "Crispy & delicious deep-fried dumplings made of plain flour stuffed mildly spiced vegetables.",
    quantity: "6 Pieces",
    price: "50",
    name: "veg_fried_momos",
  }, {
    title: "Veg Momos",
    disc: "Plain flour based dumplings steamed with cabbage, carrot and spring onion stuffing.",
    quantity: "6 Pieces",
    price: "40",
    name: "veg_momos",
  }, {
    title: "Wrap Roll",
    disc: "Packed with fresh ingredients and a play of spices. Take a bite and savour the delight!",
    quantity: "2 Rolls",
    price: "70",
    name: "wrap_roll",
  }
]

for (var i = 0; i < 41; i++) { localStorage.setItem(meals[i].title, 0); }
const pizza = meals.filter(item => item.name.includes("pizza"));
const chicken = meals.filter(item => item.name.includes("chicken"));
const momos = meals.filter(item => item.name.includes("momos"));
const rolls = meals.filter(item => item.name.includes("roll"));
const burgers = meals.filter(item => item.name.includes("burger"));
const desserts = meals.filter(item => item.name.includes("dessert"));
const drinks = meals.filter(item => item.name.includes("drink"));

export default function App(props) {
  const [name, setName] = useState();
  const [arr, setArray] = useState(meals);
  const [section, setSection] = useState("Home");
  const [loggedIn, setLoggedIn] = useState(false);

  function getNameHandler(props) { setName(props); }
  function useGetEnteredText(props) {
    useEffect(() => {
      const search = meals.filter(item => item.name.includes(props));
      setArray([...search]);
    }, [props])
  }

  useEffect(() => {
    if (name === "Pizza") setArray([...pizza]);
    else if (name === "Chicken") setArray([...chicken]);
    else if (name === "Momos") setArray([...momos]);
    else if (name === "Rolls") setArray([...rolls]);
    else if (name === "Burgers") setArray([...burgers]);
    else if (name === "Desserts") setArray([...desserts]);
    else if (name === "Drinks") setArray([...drinks]);
    else setArray([...meals]);
  }, [name])

  const useGetNavHandler = useCallback((props) => {
    if (props === "Home") setSection(props);
    else if (props === "Cart") setSection(props);
    else if (props === "History") setSection(props);
  }, [props])

  return (
    <>
      {loggedIn && <div className="row">
        <div className="main_col col-xl-2"><NavBar onGetNavName={useGetNavHandler} /></div>
        <div className="main_col col-xl-10">
          <AuthContext.Provider value={meals}>
            {section === "Home" && <Main items={arr} getName={getNameHandler} onGetEnteredText={useGetEnteredText} />}
            {section === "Cart" && <Cart section={section} items={meals} />}
            {section === "History" && <History />}
          </AuthContext.Provider>
        </div>
      </div>}
      {!loggedIn && <Home />}
    </>
  );
}