export default function CartItem({ item, handleCart }) {
  return (
    <div style={{ marginBottom: "40px" }}>
      <p>Id: {item.id}</p>
      <p>Product Name: {item.name}</p>
      <p>Product Quantity: {item.quantity}</p>
      <p>Product Price: {item.price}</p>

      <div style={{ display: "flex", gap: "8px" }}>
        <button
          onClick={() => handleCart(item.id, -1)}
          disabled={item.cartQuantity <= 0}
        >
          -
        </button>
        <span>{item.cartQuantity}</span>
        <button
          onClick={() => handleCart(item.id, +1)}
          disabled={item.cartQuantity >= item.quantity}
        >
          +
        </button>
      </div>
    </div>
  );
}
