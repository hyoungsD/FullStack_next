import { useRouter } from "next/router";
import { ReactNode } from "react";
import SearchBarLayout from '@/components/searchbar-layout';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { fetchSales } from "@/util/fetch-sales";
import SaleItem from "@/components/sale-item";

//// SSR(서버사이드 렌더링)
// useRoute가 아니라 context를 전달
// useRoute는 서버에서 사용 안됨
export async function  getServerSideProps(context: GetServerSidePropsContext) {
  const q = context.query.q;  // string 타입이 아님
  const sales = await fetchSales(q as string);  // q as string : string 타입으로 바꿔줌
  return {props: {sales}}; // props: {sales: sales}q
}

export default function Page({
  sales
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  //// 서버에서 할거니까 필요없음
  // const router = useRouter();
  // const query = router.query.q; // /search?q=검색어


  return (
    <div>
      {/* <h1>검색어: {query} 페이지입니다.</h1> */}

      {sales.map((sale) => (
        <SaleItem key={sale.id} {...sale} />
      ))}
    </div>
  );
}

Page.getLayout = (page:ReactNode) => {
  return <SearchBarLayout>{page}</SearchBarLayout>
}
