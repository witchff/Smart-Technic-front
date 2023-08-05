import React, { FC, useContext } from 'react';
import Header from 'components/Header/Header';
import Routing from './routing/Routing';
import Portal from 'components/Portal/Portal';
import Container from 'ui/Container/Container';
import Loading from 'ui/Loading/Loading';
import { ModalContext } from './context/ModalProvider';
import { getProfile } from 'api/user/user.api';
import { useSendQuery } from 'hooks/useSendQuery';
import styles from './App.module.scss';
import { getCategories } from 'api/category/category.api';

const App: FC = (): JSX.Element => {
  const { isOpenModal, setIsOpenModal } = useContext(ModalContext);
  const [dropdown, setDropdown] = React.useState(false);
  const [profile, setProfile] = React.useState<boolean>(false);

  const { data: userProfile, isLoading: profileLoading } = useSendQuery(
    getProfile,
    ['profile'],
  );
  const { data, isLoading } = useSendQuery(getCategories, ['categories']);

  if (isLoading) return <Loading />;

  return (
    <div
    // onClick={(): void => {
    //   setDropdown(false);
    //   setProfile(false);
    //   console.log('App');
    // }}
    >
      <Portal />
      <Header
        dropdown={dropdown}
        setDropdown={setDropdown}
        profile={profile}
        setProfile={setProfile}
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
      />
      <main className={styles.main}>
        <Container>
          <Routing />
        </Container>
      </main>
    </div>
  );
};

export default App;
