import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const itemIndex = cart.findIndex((item) => item.id === product.id);
    if (itemIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateCartItemQuantity = (id, amount) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + amount } : item
      ).filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <h1 style={{ textAlign: "center" }}>Welcome to Aristo Shopping</h1>
      
      <ProductList addToCart={addToCart} />
      <Cart
        cart={cart}
        updateCartItemQuantity={updateCartItemQuantity}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default App;
