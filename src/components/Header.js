import React, { useContext } from "react";
import { FoodContext } from "../App";
import { Link } from "react-router-dom";

function Header() {
  let context = useContext(FoodContext);
  return (
    <div className="head-wrapper">
      <div className="head-title">Food Ordering Portal</div>
      <div className="head-cart">
        <Link to="cart">
          <i class="fa-solid fa-cart-shopping fa-xl"></i>
        </Link>
        <div class="count_num">
          <span className="count">{context.cartValue}</span>
        </div>
      </div>

      <div className="home-cart">
        <Link to="/">
          <i class="fa-solid fa-house fa-xl"></i>
        </Link>
      </div>
    </div>
  );
}

export default Header;
