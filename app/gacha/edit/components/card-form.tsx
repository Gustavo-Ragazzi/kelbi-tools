'use client';

import InfoTooltip from '@/components/info-tooltip';
import { Button, Checkbox, CheckboxGroup, Input, Select, SelectItem } from '@nextui-org/react';

export default function CardForm() {
  const gachaTypeOptions = [
    {
      name: 'Normal',
      value: 0,
    },
    {
      name: 'Step Up',
      value: 1,
    },
    {
      name: 'Lucky Box',
      value: 4,
    },
  ];

  const idTooltip = 'The id is also used to order the list';
  const nameTooltip = 'The name will appear ingame if the image is not loaded';
  const minHrTooltip = 'Number between 0 and 999. HR7 = 999';
  const minGrTooltip = 'Number between 0 and 999';
  const bannerURLTooltip = 'URL of the image above when you select a gacha. Size = 420x70';
  const featureURLTooltip = 'URL of the image on the right when selecting a gacha. Size = 324x282';
  const thumbnailURLTooltip = 'Image URL to select the gacha. Normal size = 176x68, Wide size = 475x80';
  const wideTooltip = 'Only one item should be wide. If you select this option and an item is already set to wide, the other will be changed. Size 475x80';
  const recommendedTooltip = 'Enabled or disables the flashing “recommend” tag';
  const hiddenTooltip = 'Hides the gacha. Due to an error in Erupe this does not work';

  const labelStyle = 'text-left pl-2 pr-4 text-default-500 flex justify-between';

  return (
  
    <div className='flex flex-col max-w-4xl gap-6 mx-auto text-left'>
      <div className='flex flex-wrap gap-4'>
        <div className='w-28'>
          <label htmlFor='id' className={labelStyle}>ID <InfoTooltip>{idTooltip}</InfoTooltip></label>
          <Input id='id' type='number' variant='bordered' placeholder='50'/>
        </div>
        <div className='flex-grow'>
          <label htmlFor='name' className={labelStyle}>Name <InfoTooltip>{nameTooltip}</InfoTooltip></label>
          <Input id='name' type='text' variant='bordered' placeholder='Stylish Assault Up PZ'/>
        </div>
        <div className='w-28'>
          <label htmlFor='minHr' className={labelStyle}>Min HR <InfoTooltip>{minHrTooltip}</InfoTooltip></label>
          <Input id='minHr' type='number' min={0} max={999} variant='bordered' placeholder='999'/>
        </div>
        <div className='w-28'>
          <label htmlFor='minGr' className={labelStyle}>Min GR <InfoTooltip>{minGrTooltip}</InfoTooltip></label>
          <Input id='minGr' type='number' min={0} max={999} variant='bordered' placeholder='999'/>
        </div>
        <div className='flex-grow'>
          <label htmlFor='selectSwitch' className={labelStyle}>Gacha Type</label>
          <Select id='selectSwitch' variant='bordered'>
            {gachaTypeOptions.map((gacha) => (
              <SelectItem key={gacha.value} value={gacha.value}>
                {gacha.name}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>

      <div className='flex flex-wrap gap-4'>
        <div className='flex-grow'>
          <label htmlFor='bannerUrl' className={labelStyle}>Banner URL <InfoTooltip>{bannerURLTooltip}</InfoTooltip></label>
          <Input id='bannerUrl' type='text' variant='bordered' placeholder='https://imageurl'/>
        </div>
        <div className='flex-grow'>
          <label htmlFor='featureUrl' className={labelStyle}>Feature URL <InfoTooltip>{featureURLTooltip}</InfoTooltip></label>
          <Input id='featureUrl' type='text' variant='bordered' placeholder='https://imageurl'/>
        </div>
        <div className='flex-grow'>
          <label htmlFor='thumbnailUrl' className={labelStyle}>Thumbnail URL <InfoTooltip>{thumbnailURLTooltip}</InfoTooltip></label>
          <Input id='thumbnailUrl' type='text' variant='bordered' placeholder='https://imageurl'/>
        </div>
      </div>

      <div className='flex justify-between px-2'>
        <CheckboxGroup label='Toogles' orientation='vertical'>
          <Checkbox value='wide' className=''>
            <span className='flex gap-4'>Wide <InfoTooltip>{wideTooltip}</InfoTooltip></span>
          </Checkbox>
          <Checkbox value='recommended'>
            <span className='flex gap-4'>Recommended <InfoTooltip>{recommendedTooltip}</InfoTooltip></span>
          </Checkbox>
          <Checkbox value='hidden'>
            <span className='flex gap-4'>Hidden <InfoTooltip>{hiddenTooltip}</InfoTooltip></span>
          </Checkbox>
        </CheckboxGroup>
        <div className='flex items-end'>
          <Button color='primary'>Save</Button>
        </div>
      </div>
    </div>
  );
}