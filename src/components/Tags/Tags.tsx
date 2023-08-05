import React from 'react';
import styles from './Tags.module.scss';

const Tags = ({ children }) => {
  return <div className={styles.tags}>{children}</div>;
};

export default Tags;
