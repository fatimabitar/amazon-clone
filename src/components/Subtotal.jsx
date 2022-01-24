import React from "react";
import "../css/subtotal.css";
import { getBasketTotal } from "../reducer";
import { useGlobalContext } from "../StateProvider";

const Subtotal = () => {
  const [{ basket }] = useGlobalContext();
  return (
    <div className="subtotal">
      {/* Price */}
      <div className="price">
        <p className="total__items">Subtotal ( {basket.length} items )</p>
        <p className="total__price">
          Total price :<small>$</small>
          <strong>{getBasketTotal(basket)}</strong>
        </p>
      </div>
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
