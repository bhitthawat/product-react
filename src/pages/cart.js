import { getProduct, verifyProduct } from "@/api";
import CartItem from "@/component/CartItem";
import ProductItem from "@/component/CartItem";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Cart() {
  const router = useRouter();
  const [data, setData] = useState(
    JSON.parse(window.localStorage.getItem("cart"))
  );

  const handleCart = (id, inc) => {
    const dataAdd = data.map((item) => {
      if (item.id == id) {
        return { ...item, cartQuantity: item.cartQuantity + inc };
      } else {
        return item;
      }
    });
    setData(dataAdd);
  };

  const handlePayment = async () => {
    const paylaod = data.map((item) => ({
      id: item.id,
      quantity: item.cartQuantity,
    }));

    try {
      await verifyProduct(paylaod);
      window.localStorage.setItem("cart", JSON.stringify(data));
      router.push("/payment");
    } catch {
      alert("เกิดข้อผิดพลาด");
      router.reload();
    }
  };

  return (
    <>
      <h1>ตะกร้าสินค้า</h1>
      {data.map((item) => (
        <CartItem item={item} key={item.id} handleCart={handleCart} />
      ))}
      <button onClick={() => router.back()}>ย้อนกลับ</button>
      <button onClick={handlePayment}>ไปหน้าชำระเงิน</button>
    </>
  );
}
