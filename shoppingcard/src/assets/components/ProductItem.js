import React from 'react';

const ProductItem = ({ product, addToCart, removeFromCart, isInCart }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      {isInCart ? (
        <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
      ) : (
        <button onClick={() => addToCart(product.id)}>Add to Cart</button>
      )}
    </div>
  );
};

export default ProductItem;
