import React from "react";

export default function PaymentItem({ item }) {
  return (
    <>
      {item.cartQuantity > 0 && (
        <div style={{ marginBottom: "40px" }}>
          <p>Id: {item.id}</p>
          <p>Product Name: {item.name}</p>
          <p>Product Quantity: {item.cartQuantity}</p>
          <p>Product Price: {item.price}</p>
        </div>
      )}
    </>
  );
}
