'use client';

import { Tab, Tabs } from '@nextui-org/react';
import CardForm from '../components/card-form';
import ItemsForm from '../components/items-form';

export default function EditGacha({ params }: { params: { id: number } }) {
  return (
    <>
      <Tabs variant='underlined' aria-label='Edit Options' className='mb-4'>
        <Tab title='Card' className='text-md'>
          <CardForm />
        </Tab>
        <Tab title='Items' className='text-md'>
          <ItemsForm />
        </Tab>
      </Tabs>
    </>
  );
}
