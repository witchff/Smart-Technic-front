import React, { FC, useState } from 'react';
import Title from 'ui/Title/Title';
import { getIcon } from 'helpers/getInputIcons';
import CardProductMini from 'ui/CardProductMini/CardProductMini';
import styles from '../Profile.module.scss';

type OrderDetailsProps = {
  selected: number;
  id: number;
};

export const OrderDetails: FC<OrderDetailsProps> = ({
  selected,
  id,
}): JSX.Element => {
  const details = selected === id;
  return (
    <div className={`${styles.details} ${details && styles.open}`}>
      <CardProductMini />
      <CardProductMini />
      <CardProductMini />
      <CardProductMini />
      <CardProductMini />
    </div>
  );
};

const HistoryOrders = (): JSX.Element => {
  const [selected, setSelected] = useState(null);
  const fake = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];

  const openDetails = (item) => {
    if (item.id === selected) return setSelected(null);

    setSelected(item.id);
  };

  return (
    <div className={styles.orders}>
      <Title as="h3">История покупок</Title>
      <ul className={styles.list}>
        {fake.map((item) => (
          <li key={item.id} className={styles.item}>
            <div className={styles.wrapper}>
              <div className={styles.info_order}>
                <div className={styles.info_order_left}>
                  <span className={styles.order_number}>Заказ #9 </span>
                  <span className={styles.order_date}>от 04.07.2021</span>
                </div>
                <div className={styles.info_order_right}>
                  <span>2 товара на сумму 15 600 ₽</span>
                </div>
              </div>
              <div className={styles.status_order}>
                <span>В процессе</span>
              </div>
              <div
                onClick={() => openDetails(item)}
                className={`${styles.icon} ${
                  selected === item.id && styles.open
                }`}
              >
                {getIcon('dropdown')}
              </div>
            </div>
            <OrderDetails selected={selected} id={item.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryOrders;

// () => setDetails(!details)
