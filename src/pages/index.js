import { getProduct } from "@/api";
import ProductItem from "@/component/ProductItem";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const fetchProduct = async (setState) => {
  const data = await getProduct();
  setState(data);
};
export default function Index() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  const router = useRouter();

  useEffect(() => {
    fetchProduct(setData);
  }, []);

  const addToCart = (id) => {
    setCart((prev) => [...prev, id]);
  };

  const handleCart = () => {
    const cartData = data
      .filter((item) => cart.includes(item.id))
      .map((item) => ({ ...item, cartQuantity: 1 }));
    window.localStorage.setItem("cart", JSON.stringify(cartData));
    router.push("cart");
  };

  return (
    <>
      <h1>รายการสินค้า</h1>
      {data.map((item) => (
        <ProductItem
          item={item}
          key={item.id}
          addToCart={addToCart}
          products={data}
          cart={cart}
        />
      ))}
      <button onClick={handleCart}>ไปหน้าตะกร้าสินค้า</button>
    </>
  );
}
