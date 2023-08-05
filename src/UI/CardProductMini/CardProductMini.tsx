import React from 'react';
import Image from 'ui/Image/Image';
import Title from 'ui/Title/Title';
import Button from 'ui/Button/Button';
import styles from './CardProductMini.module.scss';

const CardProductMini = () => {
  const con = true;
  return (
    <div className={styles.product}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <Image
            width="80px"
            height="80px"
            title="Гироскутер"
            children="https://static.tildacdn.com/tild6538-6362-4431-b365-333935376564/DSC01445_1.jpg"
          />
          <Title as="h4" style={{ fontSize: '16px', fontWeight: '400' }}>
            Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)
          </Title>
        </div>
        <div className={styles.quantity}>
          <span className={styles.minus}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M16 10L4 10"
                stroke="#C8CACB"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <div className={styles.counter}>1</div>
          <span className={styles.plus}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10 4V16M16 10L4 10"
                stroke="#070C11"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
        <div className={styles.price}>
          <div className={styles.price_wrapper}>
            {con ? (
              <>
                <span className={`${styles.price} ${styles.price_sale}`}>
                  10000 ₽
                </span>
                <span className={styles.price}>{20000} ₽</span>
              </>
            ) : (
              <span className={styles.price}>{80000} ₽</span>
            )}
          </div>
        </div>
        <div className={styles.remove}>
          <Button as="button" variant="icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardProductMini;
