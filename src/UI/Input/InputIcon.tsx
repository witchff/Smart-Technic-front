import React, { FC, MouseEvent, ReactNode } from 'react';
import styles from './Input.module.scss';

type InputIconProps = {
  children: ReactNode;
  className?: 'icon' | 'status';
  onClick?: (event: MouseEvent<HTMLElement>) => void;
};

const InputIcon: FC<InputIconProps> = ({
  children,
  className,
  onClick,
}): JSX.Element => {
  return (
    <div
      onClick={(event) => (onClick ? onClick(event) : null)}
      className={styles[className]}
    >
      {children}
    </div>
  );
};

export default InputIcon;
