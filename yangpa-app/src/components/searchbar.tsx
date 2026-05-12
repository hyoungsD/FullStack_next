'use client';

import style from './searchbar.module.css'

export default function Searchbar() {


  return (
    <div className={style.searchbar_container}>
      <input type="text" />
      <button>검색</button>
    </div>
  );
}