import React from 'react';
import ProductsByCategory from 'components/ProductsByCategory/ProductsByCategory';
import Loading from 'ui/Loading/Loading';
import Slider from 'components/Slider/Slider';
import { useQueryClient } from '@tanstack/react-query';
import { ICategory } from 'types/category';
import { slider } from 'constants/static-data';
import styles from './Home.module.scss';

const Home = () => {
  const categories = useQueryClient().getQueryData<ICategory[]>(['categories']);

  if (!categories) return <Loading />;

  return (
    <div className={styles.home}>
      <Slider slides={slider} height="524px" />
      {categories.map((item) => (
        <ProductsByCategory {...item} key={item.id} />
      ))}
    </div>
  );
};

export default Home;
