import Link from "next/link";
import Image from "next/image";
import type { SaleData } from "../types/saleData";
import style from './SaleItem.module.css'

export default function SaleItem({productName, description, price, photo}:SaleData) {

  const imageUrl = `https://styangpa.blob.core.windows.net/yangpa/${photo}`;

  return (
    <Link href={`/sale/1`} className={style.container}>
      <Image 
        src={imageUrl} 
        alt={`${productName}의 이미지`} 
        width={100} height={100} 
        className={style.image}
      />
      <div>
        <div className={style.title}>{productName}</div>
        <div className={style.description}>{description}</div>
        <div className={style.price}>{price.toLocaleString()}원</div>
      </div>
    </Link>
  );
}