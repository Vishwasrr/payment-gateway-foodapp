import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Pizza from "./components/Pizza";
import Burger from "./components/Burger";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Header from "./components/Header";
import PaymentGateway from "./components/PaymentGateway";
import Placed from "./components/Placed";
const url = "https://62efef1c57311485d12b012a.mockapi.io/foodapi";
export const FoodContext = React.createContext();

function App() {
  let [data, setData] = useState([]);
  let [cart, setCart] = useState([]);
  let [cartValue, setCartValue] = useState(cart.length);

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    let res = await axios.get(`${url}/food`);
    console.log(res.data.data);
    setData(res.data.data);
  };
  return (
    <>
      <Router>
        <FoodContext.Provider
          value={{ data, cart, setCart, cartValue, setCartValue, url }}
        >
          <Header />
          <Routes>
            <Route path="/pizza" element={<Pizza />} />
            <Route path="/payment" element={<PaymentGateway />} />
            <Route path="/burger" element={<Burger />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Placed />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </FoodContext.Provider>
      </Router>
    </>
  );
}

export default App;
 
