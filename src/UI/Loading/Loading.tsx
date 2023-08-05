import React, { FC } from 'react';
import styles from './Loading.module.scss';

type LoadingProps = {
  top?: string;
  left?: string;
};

const Loading: FC<LoadingProps> = ({ top, left }): JSX.Element => {
  return (
    <div style={{ top: top, left: left }} className={styles.loading}></div>
  );
};

export default Loading;
