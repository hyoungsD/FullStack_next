
import SaleItem from "@/components/sale-item";
// import sales from '@/mock/sales.json'
import type SaleData from "@/types/sale-data";
import { ENV } from "@/env";
import style from './page.module.css'



export default async function Home() {

  // cache 
  //   : force-cache :: hit되지 않으면 가져옴
  //   : no-store :: 저장하지 않고 무조건 가져옴
  // next
  //   : revalidate: 10 :: 10초마다 background에서 가져옴
  // const response = await fetch(`${ENV.API_URL}/sales/recent`, {cache: 'no-store'});
  const response = await fetch(`${ENV.API_URL}/sales/recent`, {next: {revalidate: 10}});
  const data = await response.json();
  const sales: SaleData[] = data.documents;

  return (
    <div className={style.container}>
      <h3>최근 등록된 상품</h3>

      {/* <SaleItem {...sales[2]}/> */}
      {
        sales.map((sale) => (
          <SaleItem key={sale.id} {...sale}/>
        ))
      }
    </div>
  );
}
