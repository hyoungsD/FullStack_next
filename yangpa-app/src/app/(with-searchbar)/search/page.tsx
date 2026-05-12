
import SaleItem from "@/components/sale-item";
import sales from '@/mock/sales.json';


export default function Page() {
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