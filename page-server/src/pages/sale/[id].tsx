// 파일명
// [id] : /id
// [...id] : /id/id/id (root는 안됨)
// [[id]] : /id/id/id (root에서도 가능)

import style from "./[id].module.css";
import Image from "next/image";
import { fetchSalesById } from '@/util/fetch-sales';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';

//// 서버
export async function getServerSideProps(context: GetServerSidePropsContext){
  const id = context.params!.id;
  // ! : optional, 있을 거라는 확신! 강제!!
  const sales = await fetchSalesById(Number(id));
  return {props: {sales}}
}

export default function Page({
  sales
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  //// 
  // const router = useRouter();
  // const id = router.query.id; // /sale/id

  // const product: SaleData[] = sales.filter((item) => item.id === id);
  // const sale: SaleData[] = await fetchSaleById(id);
  // const product = sales[0];

  // if (!product) {
  //   return <div>일치하는 상품이 없습니다.</div>;
  // }

  // const { productName, description, price, photo } = product;


  //// SSR(서버사이드 렌더링)
  if(!sales) return <div>뭔가 문제가 생겼어요. 다시하세요.</div>

  const { productName, description, price, photo } = sales[0];
  const imageUrl = `${process.env.NEXT_PUBLIC_IMAGE_URL}/${photo}`;


  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url("${imageUrl}")` }}
      >
        <Image
          src={imageUrl}
          alt={productName}
          className={style.cover_img}
          width={300}
          height={300}
        />
      </div>
      <h2 className={style.title}>{productName}</h2>
      <p className={style.description}>{description}</p>
      <span className={style.price}>{price.toLocaleString()}원</span>
    </div>
  );
}