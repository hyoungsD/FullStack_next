import styles from './index.module.css'
import { ReactNode } from 'react';
import SearchBarLayout from '@/components/searchbar-layout';

import sales from '@/mock/sales.json'
import SaleItem from '@/components/sale-item';
import { InferGetStaticPropsType } from "next";
import { fetchSalesRecent } from "@/util/fetch-sales";


// ServerSide => Static
export async function getStaticProps() {
  const sales = await fetchSalesRecent();
  return { props: {sales:sales} }
}

export default function Home({
  sales
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.title}>
      <h1>인덱스페이지입니다</h1>
      <section>
        <h3>최신 등록 상품</h3>
        {sales.map((sale) => (
          <SaleItem key={sale.id} {...sale} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page:ReactNode) => {
  return <SearchBarLayout>{page}</SearchBarLayout>
}
