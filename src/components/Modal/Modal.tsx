import React, { Dispatch, FC, SetStateAction } from 'react';
import Button from 'ui/Button/Button';
import Title from 'ui/Title/Title';
import useSubmitAuthForm from 'hooks/useSubmitAuthForm';
import FormAuth from 'ui/FormAuth/FormAuth';
import Loading from 'ui/Loading/Loading';
import { useNavigate } from 'react-router-dom';
import styles from './Modal.module.scss';

type ModalProps = {
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
};

const Modal: FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const [login, setLogin] = React.useState('login');
  const navigate = useNavigate();

  const { isFetching, isSuccess, submitForm } = useSubmitAuthForm(login);

  React.useEffect(() => {
    if (isSuccess) {
      navigate(0);
      setIsOpen(false);
    }
  }, [isSuccess]);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`${styles.modal} ${isOpen ? styles.open : styles.close}`}
    >
      {isFetching ? (
        <Loading top="40%" left="40%" />
      ) : (
        <>
          <div className={styles.header}>
            <Title
              style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#070C11',
              }}
            >
              {login === 'login' ? 'Вход' : 'Регистрация'}
            </Title>
            <Button
              onClick={() => setIsOpen(false)}
              variant="icon"
              className={'non-style'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#F15152"
                  d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
                ></path>
              </svg>
            </Button>
          </div>
          <FormAuth
            variant={login}
            submitForm={submitForm}
            setVariant={setLogin}
          />
        </>
      )}
    </div>
  );
};

export default Modal;
