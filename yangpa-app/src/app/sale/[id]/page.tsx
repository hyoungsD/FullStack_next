
import Image from 'next/image';
import type SaleData from '@/types/sale-data';
import style from './page.module.css';

import sales from '@/mock/sales.json'

export default function Page() {
  const {productName, description, price, photo} = sales[0];

  const imageUrl = `https://styangpa.blob.core.windows.net/yangpa/${photo}`;

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
    </div>
  );
}