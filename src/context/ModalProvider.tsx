import React, { createContext, useState } from 'react';

export const ModalContext = createContext<any>({});

const ModalProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [contentProfile, setContentProfile] = useState<string>('');

  return (
    <ModalContext.Provider
      value={{ isOpenModal, setIsOpenModal, contentProfile, setContentProfile }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
