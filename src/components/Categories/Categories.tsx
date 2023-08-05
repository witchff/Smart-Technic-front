import React, { FC } from 'react';
import Category from 'ui/Category/Category';
import { ICategory } from 'types/category';
import styles from './Categories.module.scss';

type CategoriesProps = {
  categories: ICategory[];
  dropdown: boolean;
};

const Categories: FC<CategoriesProps> = ({ categories, dropdown }) => {
  return (
    <div
      className={`${styles.categories} ${
        dropdown ? styles.open : styles.close
      }`}
    >
      {categories.map((category) => (
        <Category key={category.id} {...category} />
      ))}
    </div>
  );
};

export default Categories;
