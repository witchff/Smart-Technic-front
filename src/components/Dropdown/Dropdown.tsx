import React from 'react';
import Button from 'ui/Button/Button';
import useLogout from 'hooks/useLogout';
import { path } from 'constants/path';
import styles from './Dropdown.module.scss';

const Dropdown = ({ profile, setProfile }) => {
  const { logout } = useLogout();
  return (
    <ul
      onClick={() => setProfile(false)}
      className={`${styles.dropdown} ${profile ? styles.open : styles.close}`}
    >
      <li className={styles.item}>
        <Button
          style={{ padding: '15px 20px' }}
          variant="link"
          className={'tertiary'}
          as="link"
          to={path.profile}
        >
          Общие сведения
        </Button>
      </li>
      <li className={styles.item}>
        <Button
          style={{ padding: '15px 20px' }}
          variant="link"
          className={'tertiary'}
          as="link"
          to={path.profile}
        >
          Личные данные
        </Button>
      </li>
      <li className={styles.item}>
        <Button
          variant="link"
          className={'tertiary'}
          as="link"
          to={path.orders}
        >
          История покупок
        </Button>
      </li>
      <li className={styles.item}>
        <Button
          style={{ padding: '15px 20px' }}
          variant="link"
          className={'tertiary'}
          as="link"
          to={path.favorite}
        >
          Избранное
        </Button>
      </li>
      <li className={styles.item}>
        <Button
          style={{ padding: '15px 20px' }}
          variant="link"
          className={'tertiary'}
          as="link"
          to={path.profile}
        >
          Сменить пароль
        </Button>
      </li>
      <li className={styles.item} onClick={() => logout()}>
        <Button
          style={{ color: '#F15152', borderTop: '1px solid #EAEAF0' }}
          variant="link"
          className={'tertiary'}
          as="link"
          to={path.profile}
        >
          Выйти
        </Button>
      </li>
    </ul>
  );
};

export default Dropdown;
