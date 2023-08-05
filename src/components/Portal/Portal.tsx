import Modal from 'components/Modal/Modal';
import { ModalContext } from '../../context/ModalProvider';
import { useMount } from 'hooks/useMount';
import React, { useContext } from 'react';
import Overlay from 'ui/Overlay/Overlay';

const Portal = () => {
  const { isOpenModal, setIsOpenModal } = useContext(ModalContext);
  const { mounted } = useMount(isOpenModal);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Overlay isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
        <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
      </Overlay>
    </>
  );
};

export default Portal;
