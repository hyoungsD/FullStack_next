export default async function Page({
  searchParams
}: {
  searchParams: Promise<{q?:string}>
}) {
  // console.log('props', props);  // params, searchParams가 Promise로 나옴


  const { q } = await searchParams;


  return (
    <div>
      <h1>검색어: {q}의 페이지입니다.</h1>
    </div>
  );
}