

import type SaleData from "@/types/sale-data";
import Image from "next/image";

import style from './sale-item.module.css'



export default function SaleItem({id, productName, description, price, photo}: SaleData) {
  const imageUrl = `https://styangpa.blob.core.windows.net/yangpa/${photo}`;

  return (
    <div className={style.container}>
      <Image
        src={imageUrl}
        alt=''
        width={100}
        height={100}
        className={style.image}
      />
      <div>
        <h2 className={style.title}>상품명: {productName}</h2>
        <p className={style.description}>{description}</p>
        <p className={style.price}>{price.toLocaleString()}원</p>
      </div>
    </div>
  );
}