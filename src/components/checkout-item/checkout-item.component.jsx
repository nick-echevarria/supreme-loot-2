import React from "react";

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className={name}></span>
      <span className={quantity}></span>
      <span className={price}></span>
      <span className="remove-button">&#10005;</span>
    </div>
  );
};

export default CheckoutItem;
