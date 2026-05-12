
import type SaleData from "@/types/sale-data";
import { ENV } from "@/env";

import SaleItem from "@/components/sale-item";
// import sales from '@/mock/sales.json';



export default async function Page({searchParams}: {searchParams: Promise<{q?:string}>}) {
  const {q} = await searchParams;
  let url = `${ENV.API_URL}/sales`;
  if(q) {
    url += `?q=${q}`;
  }

  const response = await fetch(url);
  const data = await response.json();
  const sales: SaleData[] = data.documents;

  return (
    <div>
      <h1>검색페이지</h1>
      {
        sales.map((sale) => (
          <SaleItem key={sale.id} {...sale}/>
        ))
      }
    </div>
  );
}