import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import styles from './Title.module.scss';

type TitleProps<T extends ElementType> = {
  children: ReactNode;
  as?: T;
};

const Title = <T extends ElementType = 'h1'>({
  as,
  children,
  ...props
}: TitleProps<T> & ComponentPropsWithoutRef<T>): JSX.Element => {
  const TagName = as || 'h1';

  return (
    <TagName className={styles.as} {...props}>
      {children}
    </TagName>
  );
};

export default Title;
