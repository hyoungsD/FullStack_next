import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import RootLayout from "@/components/global-layout";
import { NextPage } from "next";  // page를 만들 때 활용
import { ReactNode } from "react";

type NextPagWithLayout = NextPage & {getLayout: (page:ReactNode) => ReactNode}

export default function App({ Component, pageProps }: AppProps & {Component:NextPagWithLayout}) {
  const getLayout = Component.getLayout || ((page) => page);
  //  || ((page) => page) : getLayout이 없으면 그대로 반환
  
  return (
    <RootLayout>
      {getLayout(<Component {...pageProps} />)}
    </RootLayout>
  )
  



  // 
  // const router = useRouter();

  // return (
  //   <div>
  //     <header>
  //       <Link href={'/'}>HOME</Link>
  //       &nbsp;&nbsp;&nbsp;
  //       <Link href={'/search'}>SEARCH</Link>
  //       &nbsp;&nbsp;&nbsp;
  //       <Link href={'/sale/1'}>1번 상품</Link>
  //       &nbsp;&nbsp;&nbsp;
  //       <button onClick={() => {router.push('/sale/2')}}>2번 상품</button>
  //     </header>
  //     <Component {...pageProps} />
  //   </div>
  // );
}
