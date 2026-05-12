
// 서버컴포넌트 -> 클라이언트 컴포넌트로 변경
// 버튼 에러 사라짐!!!
// 클라이언트 컴포넌트 안에 서버 컴포넌트 사용 불가
'use client';



// index.tsx 대신 page.tsx
export default function Home() {
  console.log('인덱스페이지 컴포넌트');

  return (
    <div>
      <h1>인덱스페이지입니다</h1>
      <button onClick={() => console.log('클릭')}>클릭</button> 
      {/* onClick 에러!!!! : Event handlers cannot be passed to Client Component props */}
      {/* 서버사이드에서 인터렉션 못함 -> 클라이언트사이드로 변경해야 함 */}
    </div>
  );
}
