import { updateProduct } from "@/api";
import PaymentItem from "@/component/PaymentItem";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Payment() {
  const router = useRouter();
  const [data, setData] = useState(
    JSON.parse(window.localStorage.getItem("cart"))
  );

  const handleSubmit = async () => {
    const dataSubmit = data.map((item) => ({
      id: item.id,
      quantity: item.cartQuantity,
    }));
    try {
      await updateProduct(dataSubmit);
    } catch {
      alert("เกิดข้อผิดพลาด");
    } finally {
      router.push("/");
    }
  };

  const totalPrice = data.reduce(
    (acc, cur) => acc + cur.price * cur.cartQuantity,
    0
  );
  return (
    <>
      <h1>รายการสั่งซื้อ</h1>
      {data.map((item) => (
        <PaymentItem item={item} key={item.id} />
      ))}

      <h2>ราคารวมทั้งหมด {totalPrice} บาท</h2>
      <button onClick={() => router.back()}>ย้อนกลับ</button>
      <button onClick={handleSubmit}>สั่งซื้อ</button>
    </>
  );
}
