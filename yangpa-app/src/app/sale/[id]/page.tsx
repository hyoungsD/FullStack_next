
import Image from 'next/image';
import type SaleData from '@/types/sale-data';
import { ENV } from '@/env';
import style from './page.module.css';

// import sales from '@/mock/sales.json'

export default async function Page({params}: {params:Promise<{id:string}>}) {

  let sales:SaleData[];
  
  try {
    const {id} = await params;
    const response = await fetch(`${ENV.API_URL}/sales/${id}`);
    if(!response.ok) throw new Error(response.statusText);
  
    const data = await response.json();
    // const sales:SaleData[] = data.documents;
    sales = data.documents;
  
  } catch (error) {
    console.error('예외 발생', error);
    return <div>오류가 발생했습니다. 다시 시도해주세요.</div>
  }


  const {productName, description, price, photo} = sales[0];
  const imageUrl = `${ENV.IMAGE_URL}/${photo}`;

  return (
    <div className={style.container}>
      <div 
        className={style.cover_img_container}
        style={{backgroundImage: `url('${imageUrl}')` }}
      >
        <Image 
          src={imageUrl}
          alt=''
          className={style.cover_img}
          width={300}
          height={300}
        />
      </div>
      <h2 className={style.title}>{productName}</h2>
      <div className={style.price}>{price.toLocaleString()}원</div>
      <div className={style.description}>{description}</div>
    </div>
  );
}