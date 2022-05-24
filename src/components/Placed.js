import React, { useContext, useState } from "react";
import { FoodContext } from "../App";
import { Link } from "react-router-dom";

function Placed() {
  let context = useContext(FoodContext);

  return (
    <div className="product-wrapper">
      <h2 >Your Order successfully Placed!</h2>
      {context.cart.map((e, i) => {
        return (
          <div className="product-item-wrapper" key={i}>
            <div className="product-details">
              <h4>{e.name}</h4>
              <div className="product-price"> &#x20B9; {e.price} </div>
              <div className="product-description">{e.description}</div>
            </div>
            <div className="product-image">
              <img src={e.image} alt={e.name}></img>
            </div>
          </div>
        );
      })}

      <div className="placeholder-wrapper">
        <Link to="/">
          <button
            className="product-btn-placeholder"
            onClick={() => {
              context.setCart([]);
              context.setCartValue(0);
            }}
          >
            Finish
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Placed;
