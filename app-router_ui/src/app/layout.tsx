
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import style from "./layout.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className={style.container}>
          <Header />
          {children}        
          <Footer />
        </div>
      </body>
    </html>
  );
}
