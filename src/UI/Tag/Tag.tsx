import React, { FC, ReactNode } from 'react';
import styles from './Tag.module.scss';

type TagProps = {
  background: string;
  children: ReactNode;
  width?: string;
};

const Tag: FC<TagProps> = ({ width, children, background }): JSX.Element => {
  return (
    <div
      className={styles.tag}
      style={{ backgroundColor: background, width: width }}
    >
      {children}
    </div>
  );
};

export default Tag;
