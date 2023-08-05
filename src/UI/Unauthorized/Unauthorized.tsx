import React, { useContext } from 'react';
import styles from './Unauthorized.module.scss';
import Title from 'ui/Title/Title';
import Button from 'ui/Button/Button';
import { ModalContext } from '../../context/ModalProvider';

const Unauthorized = () => {
  const { isOpenModal, setIsOpenModal } = useContext(ModalContext);

  return (
    <div className={styles.unauthorized}>
      <Title
        style={{ fontSize: '16px', fontWeight: '700', width: '187px' }}
        as="h2"
      >
        Войдите или зарегистрируйтесь
      </Title>
      <Button
        onClick={() => setIsOpenModal(true)}
        as="button"
        variant="default"
        className="secondary"
        width="100px"
      >
        Войти
      </Button>
    </div>
  );
};

export default Unauthorized;
