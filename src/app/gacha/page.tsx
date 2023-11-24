import { getGachaShopData } from '../api/gacha/shop';
import GachaTable from '@/components/table';

export default async function Gacha() {
  const data = await getGachaShopData(0, 12, 0);

  return (
    <div className=''>
      <GachaTable data={data}/>
    </div>
  );
}
