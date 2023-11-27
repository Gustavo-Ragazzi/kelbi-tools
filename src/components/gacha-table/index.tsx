import { GachaShop } from '@/app/api/gacha/shop';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { scrollbar } from '../customClassName';


interface GachaProps extends GachaShop {
  [key: string]: any;
};

interface Props {
  data: GachaProps[];
};

const gachaTypeTranslation = (type: number) => {
  switch (type) {
  case 0:
    return 'normal';
  case 1:
    return 'step';
  case 2:
    return 'luck box';
  default:
    return '???';
  }
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
  case 'gacha_type':
    return gachaTypeTranslation(Number(value));
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

export default function GachaTable({ data }: Props) {
  console.log('Logando GachaTable: ', data);
  const columns = Object.keys(data[0]);

  return (
    <div className={`rounded-lg border border-onPrimary overflow-auto ${scrollbar}`}>
      <table className='min-w-full divide-y-2 divide-onPrimary text-sm text-center bg-surface'>
        <thead>
          <tr>
            {columns.map((column) => (
              <th className='whitespace-nowrap px-2 py-2 font-bold' key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((gacha) => (
            <tr className='bg-surface hover:brightness-125 hover:text-white cursor-default' key={gacha.id}>
              {columns.map((item) => (
                <td className='px-4 py-2 font-medium whitespace-nowrap ' key={gacha.id + item}>
                  {customItem(item, gacha[item])}
                </td>
              ))}
              <td className='px-2 py-2 font-medium'><FaEdit className='hover:text-discord active:text-surface cursor-pointer'/></td>
              <td className='px-2 py-2 font-medium'><FaTrash className='hover:text-danger active:text-surface cursor-pointer'/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
