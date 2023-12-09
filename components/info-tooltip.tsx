import { Tooltip } from '@nextui-org/react';
import { FaInfoCircle } from 'react-icons/fa';

interface InfoTooltipProps {
  children: string;
}

export default function InfoTooltip({ children }: InfoTooltipProps) {
  return (
    <Tooltip content={children}>
      <span className='my-auto'>
        <FaInfoCircle />
      </span>
    </Tooltip>
  );
}
