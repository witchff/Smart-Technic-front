import React, { FC } from 'react';
import styles from './Image.module.scss';

type ImageProp = {
  children: string;
  title: string;
  width?: string;
  height?: string;
  style?: unknown;
};

const Image: FC<ImageProp> = ({
  children,
  title = '',
  width = '100%',
  height = '100%',
  style,
}): JSX.Element => {
  return (
    <div style={style} className={styles.img}>
      <img
        style={{ width: width, height: height }}
        src={children}
        alt={title}
      />
    </div>
  );
};

export default Image;
