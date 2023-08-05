import React, { FC } from 'react';
import InputControl from 'components/InputGroup/InputGroup';
import Button from 'ui/Button/Button';
import styles from './FormAuth.module.scss';

type FormAuthProps = {
  variant: string;
  submitForm?: (e: React.FormEvent<HTMLFormElement>) => void;
  setVariant?: React.Dispatch<string>;
};

const FormAuth: FC<FormAuthProps> = ({
  variant,
  submitForm,
  setVariant,
}): JSX.Element => {
  return (
    <form onSubmit={(e) => submitForm(e)} className={styles.form}>
      <InputControl
        className="input"
        width="100%"
        label="Эл. почта"
        type="email"
      />
      <InputControl
        className="input"
        width="100%"
        label="Пароль"
        type="password"
        icon="password"
      />
      {variant === 'login' && (
        <>
          <span className={styles.label}>Забыли пароль?</span>
          <Button
            variant="default"
            as="button"
            className={'secondary'}
            type="submit"
          >
            Войти
          </Button>
          <span className={styles.label} onClick={() => setVariant('register')}>
            Зарегистрироваться?
          </span>
        </>
      )}
      {variant === 'register' && (
        <>
          <Button
            variant="default"
            as="button"
            className={'secondary'}
            type="submit"
          >
            Зарегистрироваться
          </Button>
          <span className={styles.label} onClick={() => setVariant('login')}>
            Уже зарегистрированы?
          </span>
        </>
      )}
    </form>
  );
};

export default FormAuth;
