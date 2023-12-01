'use client';

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Selection, SortDescriptor } from '@nextui-org/table';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown';
import { Pagination } from '@nextui-org/pagination';
import { BsThreeDotsVertical, BsSearch, BsChevronDown, BsCheckCircle, BsXCircle, BsEyeSlashFill, BsTrashFill, BsPlusLg, BsExclamationLg } from 'react-icons/bs';
import { useState, useMemo, useCallback } from 'react';
import { GachaShop } from '@/app/api/gacha/shop';
import { ColumnsGacha } from '../page';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/modal';
import ConfirmationGachaModal from './confirmation-modal';

interface Props {
  data: GachaShop[],
  columns: ColumnsGacha;
  initialVisibleColumns: string[];
};

const statusOptions = [
  {name: 'normal', uid: '0'},
  {name: 'step up', uid: '1'},
  {name: 'lucky box', uid: '4'},
];

export default function GachaTable({ data, columns, initialVisibleColumns }: Props) {
  const [filterValue, setFilterValue] = useState('');
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState<Selection>(new Set(initialVisibleColumns));
  const [statusFilter, setStatusFilter] = useState<Selection>('all');
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({ column: 'age', direction: 'ascending' });
  const [page, setPage] = useState(1);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const getSelectedFilterList = (selectedItems: any) => {
    if (selectedKeys === 'all') return data;

    const selectedNumbers = [...selectedItems].map(Number);
    const gachaFilteredList = data.filter(item => selectedNumbers.includes(item.id));

    if (gachaFilteredList.length === 0) return null;

    return gachaFilteredList;
  };

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = visibleColumns === 'all'
    ? columns
    : columns.filter((column) => Array.from(visibleColumns).includes(column.name));

  const filterItems = () => {
    let updatedFilteredData = [...data];
      
    if (hasSearchFilter) {
      updatedFilteredData = updatedFilteredData.filter((item) => item.name.toLowerCase().includes(filterValue.toLowerCase()));
    };
      
    if (statusFilter !== 'all' && Array.from(statusFilter).length !== statusOptions.length) {
      updatedFilteredData = updatedFilteredData.filter((item) => {
        const gachaType = statusOptions.find((status) => status.uid === String(item.gacha_type));
        const gachaTypeName = gachaType?.name || ''; 
        return Array.from(statusFilter).includes(gachaTypeName);
      });
    }
      
    return updatedFilteredData;
  };

  const filteredItems = filterItems();

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const items = filteredItems.slice(start, end);

  const sortedItems = [...items].sort((a: GachaShop, b: GachaShop) => {
    const first = a[sortDescriptor.column as keyof GachaShop] as number;
    const second = b[sortDescriptor.column as keyof GachaShop] as number;
    const cmp = first < second ? -1 : first > second ? 1 : 0;

    return sortDescriptor.direction === 'descending' ? -cmp : cmp;
  });

  const renderCell = useCallback((data: GachaShop, columnKey: React.Key) => {
    const cellValue = data[columnKey as keyof GachaShop];

    switch (columnKey) {
    case 'wide':
      if (data.wide) {
        return (
          <div className='flex justify-center'>
            <BsCheckCircle className='text-xl text-green-700'/>
          </div>
        );
      } else {
        return (
          <div className='flex justify-center'>
            <BsXCircle className='text-xl text-red-700'/>
          </div>
        );
      }
    case 'recommended':
      if (data.recommended) {
        return (
          <div className='flex justify-center'>
            <BsCheckCircle className='text-xl text-green-700'/>
          </div>
        );
      } else {
        return (
          <div className='flex justify-center'>
            <BsXCircle className='text-xl text-red-700'/>
          </div>
        );
      }
    case 'gacha_type':
      let text = String(data.gacha_type);
      if (data.gacha_type == 0) text = 'normal';
      if (data.gacha_type == 1) text = 'step up';
      if (data.gacha_type == 4) text = 'luck box';

      return (
        <span>{text}</span>
      );
    case 'hidden':
      if (data.hidden) {
        return (
          <div className='flex justify-center'>
            <BsCheckCircle className='text-xl text-green-700'/>
          </div>
        );
      } else {
        return (
          <div className='flex justify-center'>
            <BsXCircle className='text-xl text-red-700'/>
          </div>
        );
      }
    case '':
      return (
        <div className="relative flex justify-end items-center gap-2">
          <Dropdown>
            <DropdownTrigger>
              <Button isIconOnly size="sm" variant="light">
                <BsThreeDotsVertical className="text-default-300" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem onClick={() => alert('Em construção')}>Open</DropdownItem>
              <DropdownItem onClick={() => alert('Em construção')}>Edit</DropdownItem>
              <DropdownItem onClick={onOpen} className='text-danger-400'>Delete</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      );
    default:
      return cellValue;
    }
  }, []);

  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue('');
    }
  }, []);

  const onClear = useCallback(()=>{
    setFilterValue('');
    setPage(1);
  },[]);

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search by name..."
            startContent={<BsSearch />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<BsChevronDown className="text-small" />} variant="flat">
                  Gacha Types
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.name} className="capitalize">
                    {status.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<BsChevronDown className="text-small" />} variant="flat">
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.name} className={`${column.name === '' ? 'hidden' : ''}`}>
                    {column.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button className='bg-primary' endContent={<BsChevronDown className="text-small" />} variant="flat">
                  Actions
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
              >
                <DropdownItem onClick={() => alert('Em construção')} startContent={<BsPlusLg/>}>
                  New Gacha
                </DropdownItem>
                <DropdownItem isDisabled>
                  <hr />
                </DropdownItem>
                <DropdownItem onClick={onOpen} startContent={<BsExclamationLg/>}>
                  Recommend Selected
                </DropdownItem>
                <DropdownItem onClick={onOpen} startContent={<BsEyeSlashFill/>}>
                  Hide Selected
                </DropdownItem>
                <DropdownItem onClick={onOpen} className='text-danger' startContent={<BsTrashFill/>}>
                  Delete Selected
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {data.length} options</span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="6">6</option>
              <option value="12">12</option>
              <option value="18">18</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    data.length,
    columns,
    onClear,
  ]);

  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === 'all'
            ? 'All items selected'
            : `${selectedKeys.size} of ${filteredItems.length} selected`}
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
            Previous
          </Button>
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
            Next
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, page, pages, filteredItems.length, onNextPage, onPreviousPage]);

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ConfirmationGachaModal type={0} list={getSelectedFilterList(selectedKeys)}/>

            </>
          )}
        </ModalContent>
      </Modal>
      <Table
        aria-label="Gacha table"
        isHeaderSticky
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        classNames={{wrapper: 'max-h-[1080px] ',}}
        selectedKeys={selectedKeys}
        selectionMode="multiple"
        sortDescriptor={sortDescriptor}
        topContent={topContent}
        topContentPlacement="outside"
        onSelectionChange={setSelectedKeys}
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={headerColumns}>
          {(column: any) => (
            <TableColumn
              key={column.name}
              align={undefined}
              allowsSorting={column.sortable}
              className={`${column.center ? 'text-center' : 'text-left'}`}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={'No data found'} items={sortedItems}>
          {(item: any) => (
            <TableRow key={item.id} className={'text-left'}>
              {(columnKey: any) => <TableCell>
                {renderCell(item, columnKey)}
              </TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
