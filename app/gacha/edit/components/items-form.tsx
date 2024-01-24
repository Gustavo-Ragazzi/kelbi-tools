'use client';

import InfoTooltip from '@/components/info-tooltip';
import { Input } from '@nextui-org/input';
import { useState } from 'react';

export default function ItemsForm() {
  const [gachaEntries, setGachaEntries] = useState();
  const [gachaItems, setGachaItems] = useState();

  return (
    <form className='flex flex-col'>
      {/* Item usado */}
      <div className='flex justify-between'>
        <div className='w-28'>
          <label htmlFor='entry_type' className={'text-left pl-2 pr-4 text-default-500 flex justify-between'}>entry_type <InfoTooltip>{'entry_type'}</InfoTooltip></label>
          <Input
            isRequired
            aria-label='entry_type'
            id='entry_type'
            type='number'
            variant='bordered'
            placeholder='0'
          />
        </div>
        <div className='w-28'>
          <label htmlFor='item_type' className={'text-left pl-2 pr-4 text-default-500 flex justify-between'}>item_type <InfoTooltip>{'item_type'}</InfoTooltip></label>
          <Input
            isRequired
            aria-label='item_type'
            id='item_type'
            type='number'
            variant='bordered'
            placeholder='7'
          />
        </div>
        <div className='w-28'>
          <label htmlFor='item_number' className={'text-left pl-2 pr-4 text-default-500 flex justify-between'}>item_number <InfoTooltip>{'item_number'}</InfoTooltip></label>
          <Input
            isRequired
            aria-label='item_number'
            id='item_number'
            type='number'
            variant='bordered'
            placeholder='13000'
          />
        </div>
        <div className='w-28'>
          <label htmlFor='item_quantity' className={'text-left pl-2 pr-4 text-default-500 flex justify-between'}>item_quantity <InfoTooltip>{'item_quantity'}</InfoTooltip></label>
          <Input
            isRequired
            aria-label='item_quantity'
            id='item_quantity'
            type='number'
            variant='bordered'
            placeholder='13000'
          />
        </div>
        <div className='w-28'>
          <label htmlFor='rolls' className={'text-left pl-2 pr-4 text-default-500 flex justify-between'}>rolls <InfoTooltip>{'rolls'}</InfoTooltip></label>
          <Input
            isRequired
            aria-label='rolls'
            id='rolls'
            type='number'
            variant='bordered'
            placeholder='13000'
          />
        </div>
        <div className='w-28'>
          <label htmlFor='frontier_points' className={'text-left pl-2 pr-4 text-default-500 flex justify-between'}>frontier_points <InfoTooltip>{'frontier_points'}</InfoTooltip></label>
          <Input
            isRequired
            aria-label='frontier_points'
            id='frontier_points'
            type='number'
            variant='bordered'
            placeholder='13000'
          />
        </div>
        <div className='w-28'>
          <label htmlFor='daily_limit' className={'text-left pl-2 pr-4 text-default-500 flex justify-between'}>daily_limit <InfoTooltip>{'daily_limit'}</InfoTooltip></label>
          <Input
            isRequired
            aria-label='daily_limit'
            id='daily_limit'
            type='number'
            variant='bordered'
            placeholder='13000'
          />
        </div>
      </div>
      {/* Itens ganhados */}
      <div className='flex justify-between'>
        <div className='w-28'>
          <label htmlFor='item_type (outra tabela)' className={'text-left pl-2 pr-4 text-default-500 flex justify-between'}>item_type (outra tabela) <InfoTooltip>{'item_type (outra tabela)'}</InfoTooltip></label>
          <Input
            isRequired
            aria-label='item_type (outra tabela)'
            id='item_type (outra tabela)'
            type='number'
            variant='bordered'
            placeholder='13000'
          />
        </div>
        <div className='w-28'>
          <label htmlFor='tem_number - outra tabela' className={'text-left pl-2 pr-4 text-default-500 flex justify-between'}>tem_number - outra tabela <InfoTooltip>{'tem_number - outra tabela'}</InfoTooltip></label>
          <Input
            isRequired
            aria-label='tem_number - outra tabela'
            id='tem_number - outra tabela'
            type='number'
            variant='bordered'
            placeholder='13000'
          />
        </div>
        <div className='w-28'>
          <label htmlFor='item_quantity' className={'text-left pl-2 pr-4 text-default-500 flex justify-between'}>item_quantity <InfoTooltip>{'item_quantity'}</InfoTooltip></label>
          <Input
            isRequired
            aria-label='item_quantity'
            id='item_quantity'
            type='number'
            variant='bordered'
            placeholder='13000'
          />
        </div>
        <div className='w-28'>
          <label htmlFor='weight (%)' className={'text-left pl-2 pr-4 text-default-500 flex justify-between'}>weight (%) <InfoTooltip>{'weight (%)'}</InfoTooltip></label>
          <Input
            isRequired
            aria-label='weight (%)'
            id='weight (%)'
            type='number'
            variant='bordered'
            placeholder='13000'
          />
        </div>
        <div className='w-28'>
          <label htmlFor='rarity (stars)' className={'text-left pl-2 pr-4 text-default-500 flex justify-between'}>rarity (stars) <InfoTooltip>{'rarity (stars)'}</InfoTooltip></label>
          <Input
            isRequired
            aria-label='rarity (stars)'
            id='rarity (stars)'
            type='number'
            variant='bordered'
            placeholder='13000'
          />
        </div>
      </div>
    </form>
  );
}