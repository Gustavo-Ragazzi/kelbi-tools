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
    },
    {
      name: 'Step Up',
      value: '1',
    },
    {
      name: 'Lucky Box',
      value: '4',
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

  const handleIdChange = (value: number) => {
    setCardData((prevData) => ({
      ...prevData!,
      id: value,
    }));
  };

  const handleMinGrChange = (value: number) => {
    setCardData((prevData) => ({
      ...prevData!,
      min_gr: value,
    }));
  };
  
  const handleMinHrChange = (value: number) => {
    setCardData((prevData) => ({
      ...prevData!,
      min_hr: value,
    }));
  };
  
  const handleNameChange = (value: string) => {
    setCardData((prevData) => ({
      ...prevData!,
      name: value,
    }));
  };
  
  const handleBannerUrlChange = (value: string) => {
    setCardData((prevData) => ({
      ...prevData!,
      url_banner: value,
    }));
  };
  
  const handleFeatureUrlChange = (value: string) => {
    setCardData((prevData) => ({
      ...prevData!,
      url_feature: value,
    }));
  };
  
  const handleThumbnailUrlChange = (value: string) => {
    setCardData((prevData) => ({
      ...prevData!,
      url_thumbnail: value,
    }));
  };
  
  const handleWideChange = (value: boolean) => {
    setCardData((prevData) => ({
      ...prevData!,
      wide: value,
    }));
  };
  
  const handleRecommendedChange = (value: boolean) => {
    setCardData((prevData) => ({
      ...prevData!,
      recommended: value,
    }));
  };
  
  const handleHiddenChange = (value: boolean) => {
    setCardData((prevData) => ({
      ...prevData!,
      hidden: value,
    }));
  };
  
  const handleGachaTypeChange = (value: number) => {
    setCardData((prevData) => ({
      ...prevData!,
      gacha_type: value,
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
            id='id'
            type='number'
            variant='bordered'
            placeholder='50'
            value={cardData.id.toString()}
            onChange={(e) => handleIdChange(Number(e.target.value))}
          />
        </div>
        <div className='flex-grow'>
          <label htmlFor='name' className={labelStyle}>Name <InfoTooltip>{nameTooltip}</InfoTooltip></label>
          <Input
            isRequired
            id='name'
            type='text'
            variant='bordered'
            placeholder='Stylish Assault Up PZ'
            value={cardData.name}
            onChange={(e) => handleNameChange(e.target.value)}
          />
        </div>
        <div className='w-28'>
          <label htmlFor='minHr' className={labelStyle}>Min HR <InfoTooltip>{minHrTooltip}</InfoTooltip></label>
          <Input
            isRequired
            id='minHr'
            type='number'
            min={0}
            max={999}
            variant='bordered'
            placeholder='999'
            value={cardData.min_hr.toString()}
            onChange={(e) => handleMinHrChange(Number(e.target.value))}
          />
        </div>
        <div className='w-28'>
          <label htmlFor='minGr' className={labelStyle}>Min GR <InfoTooltip>{minGrTooltip}</InfoTooltip></label>
          <Input
            isRequired
            id='minGr'
            type='number'
            min={0}
            max={999}
            variant='bordered'
            placeholder='999'
            value={cardData.min_gr.toString()}
            onChange={(e) => handleMinGrChange(Number(e.target.value))}
          />
        </div>
        <div className='flex-grow'>
          <label htmlFor='selectSwitch' className={labelStyle}>Gacha Type</label>
          <Select
            isRequired
            id='selectSwitch'
            variant='bordered'
            defaultSelectedKeys={[cardData.gacha_type.toString()]}
            onChange={(e) => handleGachaTypeChange(Number(e.target.value))}
          >
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
          <Input
            isRequired
            id='bannerUrl'
            type='text'
            variant='bordered'
            placeholder='https://imageurl'
            value={cardData.url_banner}
            onChange={(e) => handleBannerUrlChange(e.target.value)}
          />
        </div>
        <div className='flex-grow'>
          <label htmlFor='featureUrl' className={labelStyle}>Feature URL <InfoTooltip>{featureURLTooltip}</InfoTooltip></label>
          <Input
            isRequired
            id='featureUrl'
            type='text'
            variant='bordered'
            placeholder='https://imageurl'
            value={cardData.url_feature}
            onChange={(e) => handleFeatureUrlChange(e.target.value)}
          />
        </div>
        <div className='flex-grow'>
          <label htmlFor='thumbnailUrl' className={labelStyle}>Thumbnail URL <InfoTooltip>{thumbnailURLTooltip}</InfoTooltip></label>
          <Input
            isRequired
            id='thumbnailUrl'
            type='text'
            variant='bordered'
            placeholder='https://imageurl'
            value={cardData.url_thumbnail}
            onChange={(e) => handleThumbnailUrlChange(e.target.value)}
          />
        </div>
      </div>

      <div className='flex justify-between px-2'>
        <CheckboxGroup label='Toogles' orientation='vertical'>
          <Checkbox
            value='wide'
            checked={cardData.wide}
            onChange={(e) => handleWideChange(e.target.checked)}
          >
            <span className='flex gap-4'>Wide <InfoTooltip>{wideTooltip}</InfoTooltip></span>
          </Checkbox>
          <Checkbox
            value='recommended'
            checked={cardData.recommended}
            onChange={(e) => handleRecommendedChange(e.target.checked)}
          >
            <span className='flex gap-4'>Recommended <InfoTooltip>{recommendedTooltip}</InfoTooltip></span>
          </Checkbox>
          <Checkbox
            value='hidden'
            checked={cardData.hidden}
            onChange={(e) => handleHiddenChange(e.target.checked)}
          >
            <span className='flex gap-4'>Hidden <InfoTooltip>{hiddenTooltip}</InfoTooltip></span>
          </Checkbox>
        </CheckboxGroup>
        <div className='flex items-end'>
          <Button
            color='primary'
            type='submit'
          >Save</Button>
        </div>
      </div>
    </form>
  );
}
