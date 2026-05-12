'use client';

import { useState } from 'react';
import style from './SearchBar.module.css'

export default function SearchBar() {
  const [search, setSearch] = useState('');

  const onChangeSearch = () => {}
  const onSubmit = () => {}

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
    </div>
  );
}

