'use client';

import { GachaShop } from '@/app/api/gacha/shop';
import GachaTable from '@/components/gacha-table';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface Props {
  data: GachaShop[],
};

export default function GachaTablePage(props: Props) {
  const [gachaList, setGachaList] = useState<GachaShop[]>(props.data);
  const [searchInput, setSearchInput] = useState<string>('');

  const handleSubmit = () => {
    setGachaList(props.data.filter(item => item.name.toUpperCase() === searchInput.toUpperCase()));
  };

  return (
    <div className='flex flex-col gap-4'>
      <form
        className='flex h-7'
        onSubmit={handleSubmit}
      >
        <input
          className='bg-surface h-full p-3'
          placeholder='Search'
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className='bg-surface h-full px-2 hover:brightness-125 active:brightness-75'
          type='submit'
        ><FaSearch/></button>
      </form>
      <GachaTable data={gachaList}/>
    </div>
  );
}
