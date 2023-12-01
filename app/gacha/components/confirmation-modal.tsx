import { GachaShop } from '@/app/api/gacha/shop';
import { ModalHeader, ModalBody, ModalFooter} from '@nextui-org/modal';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button} from '@nextui-org/react';

interface Props {
  type: number,
  list: GachaShop[] | null,
};

export default function ConfirmationGachaModal({ type, list }: Props) {
  const formType = () => {
    const typeList = [
      {
        id: 0,
        name: 'Delete',
        title: 'Are you sure you want to deleting these items forever?',
      },
      {
        id: 1,
        name: 'Recommended',
        title: 'Do you want to mark the items below as recommended?',
      },
      {
        id: 2,
        name: 'Hide',
        title: 'Do you want to hide the items below?',
      },
      {
        id: 97,
        name: 'Error',
        title: 'No item selected',
      },
      {
        id: 98,
        name: 'Error',
        title: 'Invalid Type',
      },
    ];

    const response = typeList.filter(item => item.id === type);

    if (!list) {
      const noItemError = typeList.filter(item => item.id === 97);
      return noItemError[0];
    }

    if (response.length === 0) {
      const invalidTypeError = typeList.filter(item => item.id === 98);
      return invalidTypeError[0];
    }

    return response[0];
  };

  const selectedType = formType();

  return (
    <>
      <ModalHeader className="flex flex-col gap-1">{selectedType.name}</ModalHeader>
      <ModalBody >
        <h2>{selectedType.title}</h2>
        {list && <Table aria-label="Selected Items Table" className='max-h-[400px] overflow-y-auto shadow-lg'>
          <TableHeader>
            <TableColumn>id</TableColumn>
            <TableColumn>name</TableColumn>
          </TableHeader>
          <TableBody>
            {list.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onPress={() => console.log('k')}>{selectedType.name}</Button>
      </ModalFooter>
    </>
  );
}
