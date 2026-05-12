

export default async function Page({
  params,
}: {
  params: Promise<{ Id:string }>;
}) {
  
  const { Id } = await params;

  return (
    <div>
      <h1>{Id}번 상품 상세페이지</h1>
    </div>
  );
}