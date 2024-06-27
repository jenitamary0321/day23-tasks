import React from 'react';

const Cart = ({ cartItems }) => {
  const cartCount = Object.keys(cartItems).length;

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Items in cart: {cartCount}</p>
    </div>
  );
};

export default Cart;
