import React from "react";

export default function ProductItem({ item, addToCart, products, cart }) {
  return (
    <div style={{ marginBottom: "40px" }}>
      <p>Id: {item.id}</p>
      <p>Product Name: {item.name}</p>
      <p>Product Quantity: {item.quantity}</p>
      <p>Product Price: {item.price}</p>

      <button
        onClick={() => addToCart(item.id)}
        disabled={cart.includes(item.id)}
      >
        เพิ่มลงตะกร้า
      </button>
    </div>
  );
}
