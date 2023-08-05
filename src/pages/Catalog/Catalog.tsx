import React from 'react';
import Title from 'ui/Title/Title';
import Loading from 'ui/Loading/Loading';
import Filters from 'components/Filters/Filters';
import { useSendQuery } from 'hooks/useSendQuery';
import { getFilters } from 'api/filter/filter.api';
import styles from './Catalog.module.scss';
import SelectedFilter from './UI/SelectedFilter';
import { getProducts } from 'api/product/product.api';
import CardProduct from 'ui/CardProduct/CardProduct';

const Catalog = () => {
  const { search } = window.location;

  const { data: filters, isLoading: filterLoading } = useSendQuery(
    getFilters,
    ['filters'],
    search,
  );

  const { data: products, isLoading: productLoading } = useSendQuery(
    getProducts,
    ['products'],
    search,
  );

  return (
    <div className={styles.catalog}>
      <Title style={{ paddingBottom: '50px' }} as="h1">
        Каталог
      </Title>
      <div className={styles.wrapper}>
        <form className={styles.filters}>
          {filterLoading ? <Loading /> : <Filters filters={filters} />}
        </form>
        <div className={styles.content}>
          <div className={styles.content_top}>
            <ul className={styles.choose_filters}>
              <SelectedFilter />
              <SelectedFilter />
              <SelectedFilter />
            </ul>
            <div className={styles.sort}>
              <div className={styles.row}>
                <span className={styles.sort_title}>Сначала дорогие</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                >
                  <path
                    d="M6.79171 9.68907C6.6337 9.85749 6.3663 9.85749 6.20829 9.68907L1.50288 4.67368C1.26324 4.41825 1.44435 4 1.7946 4L11.2054 4C11.5557 4 11.7368 4.41825 11.4971 4.67368L6.79171 9.68907Z"
                    fill="#070C11"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.products}>
            {productLoading ? (
              <Loading />
            ) : (
              products.map((product) => (
                <CardProduct
                  width="calc((100% - 20px) / 3)"
                  {...product}
                  key={product.id}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
