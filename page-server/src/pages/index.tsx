import styles from './index.module.css'
import { ReactNode } from 'react';
import SearchBarLayout from '@/components/searchbar-layout';

import sales from '@/mock/sales.json'
import SaleItem from '@/components/sale-item';
import { InferGetServerSidePropsType } from "next";
import { fetchSalesRecent } from "@/util/fetch-sales";


// getServerSideProps: 이름 정해져 있음
// 서버에서 받아오고 props로 전달
export async function getServerSideProps() {
  const sales = await fetchSalesRecent();
  return { props: {sales:sales} }
}

export default function Home({
  sales
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
