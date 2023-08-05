import React, { FC } from 'react';
import { ICategory } from 'types/category';
import Button from 'ui/Button/Button';
import useSubmitQueryParams from 'hooks/useSubmitQueryParams';
import Image from 'ui/Image/Image';
import styles from './Category.module.scss';

const Category: FC<ICategory> = ({ image, query, title, slug }) => {
  const { addQueryParams } = useSubmitQueryParams();

  return (
    <Button
      value={slug}
      name={query}
      onClick={addQueryParams}
      variant="link"
      as="a"
      className={'tertiary'}
    >
      {/* <img src={image} alt={title} /> */}
      <Image width="32px" height="32px" children={image} title={title} />
      <span>{title}</span>
    </Button>
  );
};

export default Category;
