import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Link href={'/'}>Home</Link> &nbsp;&nbsp;
          <Link href={'/search'}>Search</Link> &nbsp;&nbsp;
          <Link href={'/sale/1'}>1번 상품</Link> &nbsp;&nbsp;
        </header>
        {children}
      </body>
    </html>
  );
}
