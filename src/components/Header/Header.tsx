import React, { Dispatch, FC, SetStateAction } from 'react';
import Logo from 'ui/Logo/Logo';
import HeaderInfo from './HeaderInfo';
import Button from 'ui/Button/Button';
import Navigation from 'ui/Navigation/Navigation';
import Container from 'ui/Container/Container';
import Menu from 'components/Menu/Menu';
import Categories from 'components/Categories/Categories';
import openDropdown from 'helpers/openDropdown';
import MenuProfile from 'components/MenuProfile/MenuProfile';
import { isAuth } from 'helpers/isAuth';
import { CgProfile } from 'react-icons/cg';
import { useQueryClient } from '@tanstack/react-query';
import { ICategory } from 'types/category';
import styles from './Header.module.scss';

type HeaderProps = {
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  dropdown?: boolean;
  setDropdown?: Dispatch<SetStateAction<boolean>>;
  profile?: boolean;
  setProfile?: Dispatch<SetStateAction<boolean>>;
};

const Header: FC<HeaderProps> = ({
  setIsOpen,
  dropdown,
  setDropdown,
  profile,
  setProfile,
}) => {
  const categories = useQueryClient().getQueryData<ICategory[]>(['categories']);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <Container>
            <div className={styles.row}>
              <Logo />
              <HeaderInfo />
              <Button variant="link" className={'non-style'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M13 19C8.58172 19 5 15.4183 5 11C5 6.58172 8.58172 3 13 3C17.4183 3 21 6.58172 21 11C21 15.4183 17.4183 19 13 19Z"
                    // stroke="#838688"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.99961 21.0004L7.34961 16.6504"
                    // stroke="#838688"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
              <Navigation />
              {isAuth() ? (
                <Button
                  onClick={(e): void => {
                    e.stopPropagation();
                    openDropdown(setProfile);
                  }}
                  variant="icon"
                  className="non-style"
                >
                  <CgProfile />
                </Button>
              ) : (
                <Button
                  onClick={() => setIsOpen(true)}
                  width="100px"
                  as="button"
                  variant="default"
                  className={'primary'}
                >
                  Войти
                </Button>
              )}
            </div>
          </Container>
          <Menu openDropdown={openDropdown} setDropdown={setDropdown} />
          <Container>
            {dropdown && (
              <Categories categories={categories} dropdown={dropdown} />
            )}
            {profile && (
              <div
                style={{
                  position: 'absolute',
                  top: '-75px',
                  right: '0',
                  zIndex: 100,
                }}
              >
                <MenuProfile profile={profile} setProfile={setProfile} />
              </div>
            )}
            {/* </OverlayDropdown> */}
          </Container>
        </div>
      </header>
    </>
  );
};

export default Header;
