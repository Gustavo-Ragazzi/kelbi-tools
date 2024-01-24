'use client';

import { GachaShop, getGachaShopById } from '@/app/api/gacha/shop';
import InfoTooltip from '@/components/info-tooltip';
import { Button, Checkbox, CheckboxGroup, Input, Select, SelectItem } from '@nextui-org/react';
import { useEffect, useState } from 'react';

interface Props {
  id: number;
};

const defaultCardData = {
  id: 0,
  min_gr: 0,
  min_hr: 0,
  name: '',
  url_banner: '*',
  url_feature: '*',
  url_thumbnail: '*',
  wide: false,
  recommended: false,
  gacha_type: 0,
  hidden: false,
};

export default function CardForm({ id }: Props) {
  const [cardData, setCardData] = useState<GachaShop>(defaultCardData);

  const gachaTypeOptions = [
    {
      name: 'Normal',
      value: '0',
      isDisabled: false,
    },
    {
      name: 'Step Up',
      value: '1',
      isDisabled: true,
    },
    {
      name: 'Lucky Box',
      value: '4',
      isDisabled: true,
    },
  ];

  const idTooltip = 'The id is also used to order the list';
  const nameTooltip = 'The name will appear ingame if the image is not loaded';
  const minHrTooltip = 'Number between 0 and 999. 0 = No Restriction';
  const minGrTooltip = 'Number between 0 and 999. 0 = No Restriction';
  const bannerURLTooltip = 'URL of the image above when you select a gacha. Size = 420x70';
  const featureURLTooltip = 'URL of the image on the right when selecting a gacha. Size = 324x282';
  const thumbnailURLTooltip = 'Image URL to select the gacha. Normal size = 176x68, Wide size = 475x80';
  const wideTooltip = 'Only one item should be wide. If you select this option and an item is already set to wide, the other will be changed. Size 475x80';
  const recommendedTooltip = 'Enabled or disables the flashing “recommend” tag';
  const hiddenTooltip = 'Hides the gacha. Due to an error in Erupe this does not work';

  const labelStyle = 'text-left pl-2 pr-4 text-default-500 flex justify-between';

  useEffect(() => {
    const fetchData = async () => {
      const gachaShopData = await getGachaShopById(id);
      if (gachaShopData) {
        setCardData(gachaShopData);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (field: string, value: any) => {
    setCardData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
  
    <form
      className='flex flex-col max-w-4xl gap-6 mx-auto text-left'
      onSubmit={(e) => {
        e.preventDefault();
        console.log(cardData);
      }}
    >
      <div className='flex flex-wrap gap-4'>
        <div className='w-28'>
          <label htmlFor='id' className={labelStyle}>ID <InfoTooltip>{idTooltip}</InfoTooltip></label>
          <Input
            isRequired
            aria-label='Id Input'
            id='id'
            type='number'
            variant='bordered'
            placeholder='50'
            value={cardData.id.toString()}
            onChange={(e) => handleInputChange('id', Number(e.target.value))}
          />
        </div>
        <div className='flex-grow'>
          <label htmlFor='name' className={labelStyle}>Name <InfoTooltip>{nameTooltip}</InfoTooltip></label>
          <Input
            isRequired
            aria-label='Name Input'
            id='name'
            type='text'
            variant='bordered'
            placeholder='Stylish Assault Up PZ'
            value={cardData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
        </div>
        <div className='w-28'>
          <label htmlFor='minHr' className={labelStyle}>Min HR <InfoTooltip>{minHrTooltip}</InfoTooltip></label>
          <Input
            isRequired
            aria-label='MinHR Input'
            id='minHr'
            type='number'
            min={0}
            max={999}
            variant='bordered'
            placeholder='999'
            value={cardData.min_hr.toString()}
            onChange={(e) => handleInputChange('min_hr', Number(e.target.value))}
          />
        </div>
        <div className='w-28'>
          <label htmlFor='minGr' className={labelStyle}>Min GR <InfoTooltip>{minGrTooltip}</InfoTooltip></label>
          <Input
            isRequired
            aria-label='MinGR Input'
            id='minGr'
            type='number'
            min={0}
            max={999}
            variant='bordered'
            placeholder='999'
            value={cardData.min_gr.toString()}
            onChange={(e) => handleInputChange('min_gr', Number(e.target.value))}
          />
        </div>
        <div className='flex-grow'>
          <label htmlFor='selectSwitch' className={labelStyle}>Gacha Type</label>
          <Select
            isRequired
            aria-label='Gacha Type Select'
            id='selectSwitch'
            variant='bordered'
            defaultSelectedKeys={[cardData.gacha_type.toString()]}
            onChange={(e) => handleInputChange('gacha_type', Number(e.target.value))}
          >
            {gachaTypeOptions.map((gacha) => (
              <SelectItem key={gacha.value} value={gacha.value} isDisabled={gacha.isDisabled}>
                {gacha.name}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>

      <div className='flex flex-wrap gap-4'>
        <div className='flex-grow'>
          <label htmlFor='bannerUrl' className={labelStyle}>Banner URL <InfoTooltip>{bannerURLTooltip}</InfoTooltip></label>
          <Input
            isRequired
            aria-label='BannerURL Input'
            id='bannerUrl'
            type='text'
            variant='bordered'
            placeholder='https://imageurl'
            value={cardData.url_banner}
            onChange={(e) => handleInputChange('url_banner', e.target.value)}
          />
        </div>
        <div className='flex-grow'>
          <label htmlFor='featureUrl' className={labelStyle}>Feature URL <InfoTooltip>{featureURLTooltip}</InfoTooltip></label>
          <Input
            isRequired
            aria-label='FeatureURL Input'
            id='featureUrl'
            type='text'
            variant='bordered'
            placeholder='https://imageurl'
            value={cardData.url_feature}
            onChange={(e) => handleInputChange('url_feature', e.target.value)}
          />
        </div>
        <div className='flex-grow'>
          <label htmlFor='thumbnailUrl' className={labelStyle}>Thumbnail URL <InfoTooltip>{thumbnailURLTooltip}</InfoTooltip></label>
          <Input
            isRequired
            aria-label='ThumbnailURL Input'
            id='thumbnailUrl'
            type='text'
            variant='bordered'
            placeholder='https://imageurl'
            value={cardData.url_thumbnail}
            onChange={(e) => handleInputChange('url_thumbnail', e.target.value)}
          />
        </div>
      </div>

      <div className='flex justify-between px-2'>
        <CheckboxGroup label='Toogles' orientation='vertical'>
          <Checkbox
            aria-label='Wide Checkbox'
            value='wide'
            checked={cardData.wide}
            onChange={(e) => handleInputChange('wide', e.target.checked)}
          >
            <span className='flex gap-4'>Wide <InfoTooltip>{wideTooltip}</InfoTooltip></span>
          </Checkbox>
          <Checkbox
            aria-label='Recommended Checkbox'
            value='recommended'
            checked={cardData.recommended}
            onChange={(e) => handleInputChange('recommended', e.target.checked)}
          >
            <span className='flex gap-4'>Recommended <InfoTooltip>{recommendedTooltip}</InfoTooltip></span>
          </Checkbox>
          <Checkbox
            aria-label='Hidden Checkbox'
            value='hidden'
            checked={cardData.hidden}
            onChange={(e) => handleInputChange('hidden', e.target.checked)}
          >
            <span className='flex gap-4'>Hidden <InfoTooltip>{hiddenTooltip}</InfoTooltip></span>
          </Checkbox>
        </CheckboxGroup>
        <div className='flex items-end'>
          <Button
            aria-label='Submit form'
            color='primary'
            type='submit'
          >Save</Button>
        </div>
      </div>
    </form>
  );
}
