import React, { Dispatch, FC, SetStateAction, useContext } from 'react';
import useLogout from 'hooks/useLogout';
import Button from 'ui/Button/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { menuProfile } from 'constants/static-data';
import { ModalContext } from '../../context/ModalProvider';
import styles from './MenuProfile.module.scss';
import Loading from 'ui/Loading/Loading';

type MenuProfileProps = {
  profile?: boolean;
  setProfile?: Dispatch<SetStateAction<boolean>>;
  border?: string;
  borderRadius?: string;
};

const MenuProfile: FC<MenuProfileProps> = ({
  profile,
  setProfile,
  border,
  borderRadius,
}) => {
  const { contentProfile, setContentProfile } = useContext(ModalContext);
  const { logout } = useLogout();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClickMenu = (state: string): void => {
    setContentProfile(state);

    if (setProfile) setProfile(false);
    if (pathname !== '/profile' && state !== 'logout') navigate('/profile');

    // Искуственная задержка
    if (state === 'logout') {
      setTimeout(() => logout(), 2000);
    }
  };

  return (
    <ul
      className={`${styles.dropdown} ${profile ? styles.open : styles.close}`}
      style={{ border: border, borderRadius: borderRadius }}
    >
      {menuProfile.map(({ id, state, title }) => (
        <li
          className={`${styles.item} ${
            contentProfile === state ? styles.active : null
          }`}
          key={id}
          onClick={() => handleClickMenu(state)}
        >
          <Button
            variant="default"
            className="non-style"
            as="button"
            style={{
              padding: '15px 20px',
              justifyContent: 'flex-start',
              fontWeight: '500',
              color: `${state === 'logout' && '#F15152'}`,
              borderTop: `${state === 'logout' && '1px solid #EAEAF0'}`,
            }}
          >
            {title}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default MenuProfile;
