import { GachaShop } from '@/app/api/gacha/shop';
import { FaCheckCircle, FaTrash, FaEdit } from 'react-icons/fa';


interface GachaProps extends GachaShop {
  [key: string]: any;
};

interface GachaTableProps {
  data: GachaProps[];
};

const customItem = (type: string, value: string) => {
  switch (type) {
  case  'url_banner':
    return removeCapcomPrefix(value);
  case 'url_feature':
    return removeCapcomPrefix(value);
  case 'url_thumbnail':
    return removeCapcomPrefix(value);
  case 'wide':
    return value ? 'true' : 'false';
  case 'recommended':
    return value ? 'true' : 'false';
  case 'hidden':
    return value ? 'true' : 'false';
  default:
    return value;
  }
};

const removeCapcomPrefix = (str: string) => {
  const prefix = 'http://mhfg.capcom.com.tw/g6_launcher/gacha_shop';

  if (typeof str === 'string' && str.startsWith(prefix)) {
    return '...' + str.substring(prefix.length);
  };

  return str;
};

export default function GachaTable({ data }: GachaTableProps) {
  const columns = Object.keys(data[0]);

  return (
    <table className={'w-full border-collapse border border-onPrimary overflow-hidden p-0 m-0 text-left'}>
      <thead>
        <tr className='text-sm'>
          {columns.map(column => (
            <th className='py-2 px-4 border-b tex' key={column}>{column}</th>
          ))}
          <th className='py-2 px-4 border-b'></th>
          <th className='py-2 px-4 border-b'></th>
        </tr>
      </thead>
      <tbody>
        {data.map(gacha => (
          <tr key={gacha.id} className={'border-b text-sm'}>
            {columns.map(item => (
              <td className='py-2 px-4' key={item + gacha.id}>{customItem(item, gacha[item])}</td>
            ))}
            <td><FaEdit /></td>
            <td><FaTrash /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
