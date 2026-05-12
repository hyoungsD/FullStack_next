import Image from "next/image";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import SaleItem from "@/components/SaleItem";

import sales from '@/mock/sales.json'



export default function Home() {
  return (
    <div>
      <h1>인덱스페이지</h1>
      <Link href={`/search`}>search</Link>
      <SearchBar />
      <section>
        <h3>최신 등록 상품</h3>
        {sales.map((sale) => (
          <SaleItem key={sale.id} {...sale} />
        ))}
      </section>
    </div>
  );
}
