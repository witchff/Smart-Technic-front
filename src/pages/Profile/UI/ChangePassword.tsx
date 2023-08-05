import React from 'react';
import InputControl from 'components/InputGroup/InputGroup';
import Button from 'ui/Button/Button';
import styles from '../Profile.module.scss';

const ChangePassword = () => {
  return (
    <form className={styles.password}>
      <InputControl
        width="310px"
        type="text"
        label="Введите старый пароль"
        className="input"
        icon="password"
        query="password"
        value=""
      />
      <InputControl
        width="310px"
        type="text"
        label="Введите новый пароль"
        className="input"
        icon="password"
        query="password"
        value=""
      />
      <InputControl
        width="310px"
        type="text"
        label="Повторите новый пароль"
        className="input"
        icon="password"
        query="password"
        value=""
      />
      <Button as="button" variant="default" className="secondary">
        Сохранить изменения
      </Button>
    </form>
  );
};

export default ChangePassword;
