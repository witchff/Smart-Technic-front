import React, { FC, ReactNode } from 'react';
import styles from './Input.module.scss';

type InputLabelProps = {
  children: ReactNode;
};

const InputLabel: FC<InputLabelProps> = ({ children }): JSX.Element => {
  return <span className={styles.label}>{children}</span>;
};

export default InputLabel;
