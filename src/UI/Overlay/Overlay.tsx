import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import styles from './Overlay.module.scss';

type OverlayProps = {
  children: ReactNode;
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
};

const Overlay = ({
  children,
  isOpen,
  setIsOpen,
}: OverlayProps): JSX.Element => {
  return (
    <div
      onClick={(): void => {
        setIsOpen(false);
      }}
      className={`${styles.overlay} ${isOpen ? styles.open : styles.close}`}
    >
      {children}
    </div>
  );
};

export default Overlay;
