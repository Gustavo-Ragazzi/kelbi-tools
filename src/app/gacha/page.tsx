import { getGachaShopData } from '../api/gacha/shop';
import GachaTablePage from './components/gacha-table-page';

export default async function Gacha() {
  const data = await getGachaShopData(0, 12, 0);

  return (
    <div>
      {data.length > 0 ? <GachaTablePage data={data} /> : <h1>No Results Founds =/</h1>}
    </div>
  );
}
