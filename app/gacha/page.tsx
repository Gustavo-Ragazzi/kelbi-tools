import { getGachaShopData } from '../api/gacha/shop';
import GachaTable from './components/gacha-table';

const columns = [
  {name: 'id', center: false, sortable: true, initialVisible: true},
  {name: 'min_gr', center: false, initialVisible: false},
  {name: 'min_hr', center: false, initialVisible: false},
  {name: 'name', center: false, sortable: true, initialVisible: true},
  {name: 'url_banner', center: false, initialVisible: false},
  {name: 'url_feature', center: false, initialVisible: false},
  {name: 'url_thumbnail', center: false, initialVisible: false},
  {name: 'wide', center: true, initialVisible: true},
  {name: 'recommended', center: true, initialVisible: true},
  {name: 'gacha_type', center: false, sortable: true, initialVisible: true},
  {name: 'hidden', center: true, initialVisible: true},
  {name: '', center: false, initialVisible: true},
];

export type ColumnsGacha = typeof columns;

const initialVisibleColumns = (columns: ColumnsGacha) => {
  const filteredColumns = columns.filter(column => column.initialVisible);
  const result = filteredColumns.map((column => column.name));
  return result;
};

export default async function Gacha() {
  const data = await getGachaShopData(999, 0);

  return (
    <>
      {data && <GachaTable
        data={data}
        columns={columns}
        initialVisibleColumns={initialVisibleColumns(columns)}
      />}
      {!data && <p>Fail getting data</p>}
    </>
  );
};
