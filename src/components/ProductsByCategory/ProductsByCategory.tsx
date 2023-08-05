import React, { FC, MouseEvent } from 'react';
import CardProduct from 'ui/CardProduct/CardProduct';
import Title from 'ui/Title/Title';
import Button from 'ui/Button/Button';
import Loading from 'ui/Loading/Loading';
import useSubmitQueryParams from 'hooks/useSubmitQueryParams';
import { ICategory } from 'types/category';
import styles from './ProductsByCategory.module.scss';

const ProductsByCategory: FC = ({
  title,
  products,
  slug,
  query,
}: ICategory) => {
  const { addQueryParams } = useSubmitQueryParams();
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <Title
          style={{
            fontWeight: '700',
            fontSize: '36px',
            color: '#070C11',
            lineHeight: '130%',
          }}
          as="h2"
        >
          {title}
        </Title>
        <Button
          onClick={(e: MouseEvent<HTMLElement>) => addQueryParams(e)}
          name={query}
          value={slug}
          as="a"
          variant="link"
          className="secondary"
        >
          Все товары
        </Button>
      </div>
      <div className={styles.products}>
        {products.map((product) => {
          if (!product) return <Loading />;

          return (
            <CardProduct
              width="calc((100% - 20px) / 4)"
              {...product}
              key={product.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsByCategory;
