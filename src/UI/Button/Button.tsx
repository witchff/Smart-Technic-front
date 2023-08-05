import React, {
  ComponentPropsWithoutRef,
  ElementType,
  MouseEvent,
  ReactNode,
} from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

type ButtonProps<T extends ElementType> = {
  name?: string;
  value?: string;
  children: ReactNode;
  to?: string;
  variant?: 'icon' | 'default' | 'link';
  className?: 'primary' | 'secondary' | 'tertiary' | 'non-style';
  width?: string;
  height?: string;
  as?: T;
  onClick?: (e?: MouseEvent<HTMLElement>) => void;
};

export const Button = <T extends ElementType = 'button'>({
  as,
  children,
  to,
  variant = 'default',
  className,
  width,
  height,
  value,
  name,
  onClick,
  ...props
}: ButtonProps<T> & ComponentPropsWithoutRef<T>): JSX.Element => {
  const TagName = as || 'button';

  if (as === 'link') {
    return (
      <Link
        value={value}
        name={name}
        onClick={(e) => onClick && onClick(e)}
        to={to}
        style={variant === 'default' ? { width: width, height: height } : null}
        className={`${styles[variant]} ${styles[className]}`}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <TagName
      value={value}
      name={name}
      onClick={(e) => onClick && onClick(e)}
      style={variant === 'default' ? { width: width, height: height } : null}
      className={`${styles[variant]} ${styles[className]}`}
      {...props}
    >
      {children}
    </TagName>
  );
};

export default Button;
