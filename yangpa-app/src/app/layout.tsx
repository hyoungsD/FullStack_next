
import Link from 'next/link';
import style from './layout.module.css';


export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header>
            <Link href={'/'}>🧅 양파마켓</Link>
          </header>
          <main>
            {children}
          </main>
          <footer>&copy; 양파마켓 All rights reserved</footer>
        </div>
      </body>
    </html>
  );
}