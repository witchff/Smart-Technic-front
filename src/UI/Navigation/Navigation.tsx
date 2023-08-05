import React, { FC } from 'react';
import Button from 'ui/Button/Button';
import { navigate } from 'constants/static-data';
import styles from './Navigation.module.scss';

const Navigation: FC = (): JSX.Element => {
  return (
    <div className={styles.navigation}>
      {navigate.map((item) => (
        <Button
          as="link"
          variant="link"
          to={item.link}
          className={'non-style'}
          key={item.id}
        >
          {item.svg}
        </Button>
      ))}
    </div>
  );
};

export default Navigation;
