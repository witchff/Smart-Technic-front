import React, { FC, FormEvent } from 'react';
import InputControl from 'components/InputGroup/InputGroup';
import Button from 'ui/Button/Button';
import styles from '../Profile.module.scss';

type PersonalDataProps = {
  firstname?: string;
  surname?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  index?: string;
  payment?: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const PersonalData: FC<PersonalDataProps> = ({
  address,
  city,
  firstname,
  surname,
  email,
  index,
  phone,
  payment,
  onSubmit,
}): JSX.Element => {
  return (
    <form
      onSubmit={(event) => {
        onSubmit(event);
      }}
      className={styles.personalData}
    >
      <InputControl
        defValue={firstname}
        type="text"
        className="input"
        label="Имя"
        text="Введите имя"
        query="firstname"
        width="310px"
      />
      <InputControl
        defValue={surname}
        type="text"
        className="input"
        label="Фамилия"
        text="Введите фамилию"
        query="surname"
        width="310px"
      />
      <InputControl
        defValue={email}
        type="email"
        className="input"
        label="Эл. почта"
        text="Введите эл. почту"
        query="email"
        width="310px"
      />
      <InputControl
        defValue={phone}
        type="text"
        className="input"
        label="Телефон"
        text="Введите номер телефона"
        query="phone"
        width="310px"
      />
      <InputControl
        defValue={city}
        type="text"
        className="input"
        label="Город"
        text="Введите город"
        query="city"
        width="310px"
      />
      <InputControl
        defValue={index}
        type="text"
        className="input"
        label="Индекс"
        text="Введите индекс"
        query="index"
        width="310px"
      />
      <InputControl
        defValue={address}
        type="text"
        className="input"
        label="Адрес"
        text="Введите ваш адрес"
        query="address"
        width="310px"
      />
      <InputControl
        defValue={payment}
        type="text"
        className="input"
        label="Предпочитаемый способ оплаты"
        text="Не указан"
        query="payment"
        width="310px"
      />
      {/* <InputControl
        className="input"
        label="Аватар"
        type="file"
        query="avatar"
        width="310px"
      /> */}
      <Button
        type="submit"
        as="button"
        variant="default"
        className="secondary"
        style={{ padding: '16px 20px', width: '310px', marginTop: '20px' }}
      >
        Сохранить
      </Button>
    </form>
  );
};

export default PersonalData;
