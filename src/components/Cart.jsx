import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart, updateCartItemQuantity, removeFromCart }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length > 0 ? (
        cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            updateCartItemQuantity={updateCartItemQuantity}
            removeFromCart={removeFromCart}
          />
        ))
      ) : (
        <p>Cart is empty.</p>
      )}
      <h3>Total Price: ₹{totalPrice}</h3>
    </div>
  );
};

export default Cart;
