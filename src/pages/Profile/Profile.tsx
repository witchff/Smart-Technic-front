import React, { ReactNode, useContext } from 'react';
import Title from 'ui/Title/Title';
import MenuProfile from 'components/MenuProfile/MenuProfile';
import HistoryOrders from './UI/HistoryOrders';
import BasicInformation from './UI/BasicInformation';
import PersonalData from './UI/PersonalData';
import ChangePassword from './UI/ChangePassword';
import Loading from 'ui/Loading/Loading';
import useSendMutation from 'hooks/useSendMutation';
import { ModalContext } from '../../context/ModalProvider';
import { menuProfile } from 'constants/static-data';
import { updateProfile } from 'api/user/user.api';
import { useQueryClient } from '@tanstack/react-query';
import { IUser } from 'types/user';
import styles from './Profile.module.scss';

const Profile = () => {
  const profile = useQueryClient().getQueryData<IUser>(['profile']);
  const { contentProfile } = useContext(ModalContext);
  const { submitMutate, isLoading } = useSendMutation(
    updateProfile,
    ['update'],
    ['profile'],
  );

  if (!profile) return <Loading />;

  const getCurrentContent = (condition: string): ReactNode => {
    if (condition === 'content') {
      switch (contentProfile) {
        case menuProfile[0].state:
          return (
            <BasicInformation
              avatar={profile.avatar}
              firstname={profile.firstname}
              orders={profile.cart}
              createAt={profile.createAt}
            />
          );
        case menuProfile[1].state:
          return isLoading ? (
            <Loading />
          ) : (
            <PersonalData
              firstname={profile.firstname}
              surname={profile.surname}
              email={profile.email}
              phone={profile.phone}
              city={profile.city}
              index={profile.index}
              address={profile.address}
              payment={profile.payment}
              onSubmit={submitMutate}
            />
          );
        case menuProfile[2].state:
          return <HistoryOrders />;
        case menuProfile[4].state:
          return <ChangePassword />;
        default:
          return <Loading />;
      }
    }
    if (condition === 'title') {
      switch (contentProfile) {
        case menuProfile[0].state:
          return menuProfile[0].title;
        case menuProfile[1].state:
          return menuProfile[1].title;
        case menuProfile[2].state:
          return menuProfile[2].title;
        case menuProfile[4].state:
          return menuProfile[4].title;
        default:
          return null;
      }
    }
  };

  return (
    <div className={styles.profile}>
      <div className={styles.breadcrumb}>
        Главная = Профиль = Общие сведения
      </div>
      <Title style={{ marginTop: '30px' }} as="h1">
        {getCurrentContent('title')}
      </Title>
      <div
        style={{ columnGap: contentProfile === 'history orders' && '20px' }}
        className={styles.content}
      >
        <MenuProfile
          border="1px solid #EAEAF0"
          borderRadius="8px"
          profile={true}
        />
        {getCurrentContent('content')}
      </div>
    </div>
  );
};

export default Profile;
