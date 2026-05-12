import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import style from './searchbar-layout.module.css';


export default function SearchBarLayout({children}: {children: React.ReactNode}) {
  const [search, setSearch] = useState('');
  const onChangeSearch = (e:ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const router = useRouter();
  const onSubmit = () => {
    // search가 비었거나 이미 같은 위치면 return
    if(!search || router.query.q === search) return;
    router.push(`/search?q=${search}`);
  }

  return (
    <div>
      <div className={style.searchbar_container}>
        <input 
          type="text" 
          placeholder="검색어를 입력하시오" 
          onChange={onChangeSearch} 
          value={search} 
        />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
}