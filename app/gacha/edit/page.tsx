'use client';

import { Checkbox, CheckboxGroup, Input, Select, SelectItem } from '@nextui-org/react';

export default function EditGacha() {
  const gachaTypeOptions = [
    {
      name: 'normal',
      value: 0,
    },
    {
      name: 'step up',
      value: 1,
    },
    {
      name: 'lucky box',
      value: 4,
    },
  ];

  return (
    <div className='flex flex-col gap-6 mx-auto'>
      <div className='flex flex-wrap gap-4'>
        <div className='w-full md:w-1/2 lg:w-1/6'>
          <label htmlFor='id'>ID</label>
          <Input id='id' type='number' />
        </div>
        <div className='w-full md:w-1/2 lg:w-1/6'>
          <label htmlFor='minGr'>Min GR</label>
          <Input id='minGr' type='number' min={0} max={999} />
        </div>
        <div className='w-full md:w-1/2 lg:w-1/6'>
          <label htmlFor='minHr'>Min HR</label>
          <Input id='minHr' type='number' min={0} max={999} />
        </div>
        <div className='w-full md:w-1/2 lg:w-1/6'>
          <label htmlFor='selectSwitch'>Select Switch</label>
          <Select id='selectSwitch'>
            {gachaTypeOptions.map((gacha) => (
              <SelectItem key={gacha.value} value={gacha.value}>
                {gacha.name}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>

      <div className='flex flex-wrap gap-4'>
        <div className='w-full md:w-1/2 lg:w-1/4'>
          <label htmlFor='name'>Name</label>
          <Input id='name' type='text' />
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4'>
          <label htmlFor='bannerUrl'>Banner URL</label>
          <Input id='bannerUrl' type='text' />
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4'>
          <label htmlFor='featureUrl'>Feature URL</label>
          <Input id='featureUrl' type='text' />
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4'>
          <label htmlFor='thumbnailUrl'>Thumbnail URL</label>
          <Input id='thumbnailUrl' type='text' />
        </div>
      </div>

      <CheckboxGroup>
        <Checkbox value='wide'>Wide</Checkbox>
        <Checkbox value='recommended'>Recommended</Checkbox>
        <Checkbox value='hidden'>Hidden</Checkbox>
      </CheckboxGroup>
    </div>
  );
}
