
import SaleItem from "@/components/sale-item";
import sales from '@/mock/sales.json'



export default function Home() {
  return (
    <div>
      <h1>인덱스페이지</h1>

      {/* <SaleItem {...sales[2]}/> */}
      {
        sales.map((sale) => (
          <SaleItem key={sale.id} {...sale}/>
        ))
      }
    </div>
  );
}
