import React, { FC } from 'react';
import Button from 'ui/Button/Button';
import Image from 'ui/Image/Image';
import Tag from 'ui/Tag/Tag';
import Tags from 'components/Tags/Tags';
import InfoBottom from './InfoBottom';
import Ratings from 'components/Ratings/Ratings';
import { IProduct } from 'types/product';
import { Link } from 'react-router-dom';
import { path } from 'constants/path';
import { navigate } from 'constants/static-data';
import styles from './CardProduct.module.scss';

interface CardProduct extends IProduct {
  width: string;
}

const CardProduct: FC<CardProduct> = ({
  name,
  price,
  sale,
  id,
  images,
  width,
}) => {
  return (
    <div style={{ width: width }} className={styles.card}>
      <Link to={`${path.product}${id}`}>
        <Image
          title={name}
          height="224px"
          children={
            images.length
              ? images[0]
              : 'https://i.ytimg.com/vi/xdPOh0jdTRM/hqdefault.jpg'
          }
        />
      </Link>
      <div className={styles.info}>
        <span className={styles.category}>Сигвей</span>
        <Link to={`${path.product}${id}`}>
          <h3 className={styles.title}>{name}</h3>
        </Link>
        <div className={styles.feedback}>
          <Ratings />
          <div className={styles.rewiew}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                stroke="#070C11"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>(17)</span>
          </div>
        </div>
        <InfoBottom sale={sale} price={price} />
      </div>
      <div className={styles.buttons}>
        <Button as="button" className={'primary'} variant="default">
          Купить в один клик
        </Button>
        <Button as="button" variant="icon" className={'primary'}>
          {navigate[navigate.length - 1].svg}
        </Button>
      </div>
      <Tags>
        <Tag background="#48A69B">Новинка</Tag>
        <Tag background="#D73838">Хит продаж</Tag>
      </Tags>
    </div>
  );
};

export default CardProduct;
