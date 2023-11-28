'use client';

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/modal';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from '@nextui-org/react';
import { Button } from '@nextui-org/button';

export default function ConfirmationGachaModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const example = [
    {
      id: 66,
      name: 'Adaptation PZ4',
    },
  ];

  return (
    <>
      <Button onPress={onOpen}>Delete</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Delete</ModalHeader>
              <ModalBody>
                <h2>Are you sure you want to deleting these items forever?</h2>
                <Table aria-label="Delete Table" className='max-h-[400px] overflow-y-auto shadow-lg'>
                  <TableHeader>
                    <TableColumn>id</TableColumn>
                    <TableColumn>name</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {example.map(item => (
                      <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="danger" onPress={onClose}>
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
