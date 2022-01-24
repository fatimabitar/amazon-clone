import React from "react";
import "../css/checkout.css";
import { useGlobalContext } from "../StateProvider";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }, dispatch] = useGlobalContext();
  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQAO6viZRYIYst34lqdF_HoSAEZVd4aORrBg&usqp=CAU"
          className="checkout__ad"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h1>Your Basket is empty</h1>
            <p>
              You have no items in your basket. To buy one or mor items, click
              on "add to cart" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Shopping cart</h2>
            {basket.map((item) => {
              const { id, image, title, price, rating } = item;
              return (
                <div className="checkoutItem" key={id}>
                  <img src={image} alt="" />
                  <div className="checkoutItem__info">
                    <h4>{title}</h4>
                    <p className="checkoutProduct__price">
                      <small>$</small>
                      <strong>{price}</strong>
                    </p>
                    <div className="checkoutProduct__rating">
                      {Array(rating)
                        .fill()
                        .map((_) => (
                          <p>⭐</p>
                        ))}
                    </div>
                    <button onClick={() => removeFromCart(id)}>
                      Remove From Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
