import React, { FC } from 'react';
import Title from 'ui/Title/Title';
import Image from 'ui/Image/Image';
import Button from 'ui/Button/Button';
import styles from '../Profile.module.scss';

type BasicInformationProps = {
  avatar?: string;
  firstname?: string;
  createAt?: Date;
  orders?: any;
};

const BasicInformation: FC<BasicInformationProps> = ({
  avatar,
  firstname,
  createAt,
  orders,
}): JSX.Element => {
  const date = new Date(createAt).toLocaleDateString('de-DE');

  return (
    <div className={styles.basic_information}>
      <Title style={{ marginBottom: '30px' }} as="h2">
        {!firstname ? 'Имя отсутствует' : firstname}
      </Title>
      <div className={styles.user}>
        <Image
          title="Avatar"
          width="100px"
          height="100px"
          children={
            !avatar &&
            'https://i.pinimg.com/originals/31/ec/2c/31ec2ce212492e600b8de27f38846ed7.jpg'
          }
        />
        <div className={styles.info}>
          <span className={styles.date}>Дата регистрации: {date}</span>
          <span className={styles.count_orders}>
            Заказов: {orders?.items.length}
          </span>
        </div>
      </div>
      <div className={styles.manual}>
        Добро пожаловать в панель управления. Здесь вы можете изменить свои
        регистрационные данные и cменить пароль. Зарегистрированные пользователи
        имеют доступ к истории заказов и возможность добавлять в избранное
        товары для будущих покупок.
      </div>
      <Button
        style={{ padding: '16px', width: '310px' }}
        as="button"
        variant="default"
        className="secondary"
      >
        Панель управления
      </Button>
    </div>
  );
};

export default BasicInformation;
