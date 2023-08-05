import React from 'react';
import styles from './CardProduct.module.scss';
import Button from 'ui/Button/Button';
import { navigate } from 'constants/static-data';

type InfoBottom = {
  sale: number;
  price: number;
};

const CardProductInfo = ({ sale, price }) => {
  const discountAmount = Math.round((price * sale) / 100);
  const discountedPrice = Math.round(price - price * (sale / 100));
  return (
    <div className={styles.info_bottom}>
      <div className={styles.price_wrapper}>
        {sale ? (
          <>
            <span className={`${styles.price} ${styles.price_sale}`}>
              {price} ₽
            </span>
            <span className={styles.price}>{discountedPrice} ₽</span>
            <div className={styles.sale}>
              <span>{sale}%</span>
              <span>{discountAmount} ₽</span>
            </div>
          </>
        ) : (
          <span className={styles.price}>{price} ₽</span>
        )}
      </div>
      <div className={styles.button_action}>
        <Button variant="icon" className="secondary">
          {navigate[1].svg}
        </Button>
        <Button as="button" variant="icon" className="secondary">
          {navigate[2].svg}
        </Button>
      </div>
    </div>
  );
};

export default CardProductInfo;
