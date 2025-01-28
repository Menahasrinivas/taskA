import React from "react";

const CartItem = ({ item, updateCartItemQuantity, removeFromCart }) => {
  return (
    <div className="cart-item">
      <p>{item.name}</p>
      <p>Price: ₹{item.price}</p>
      <div>
        <button onClick={() => updateCartItemQuantity(item.id, -1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => updateCartItemQuantity(item.id, 1)}>+</button>
      </div>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
