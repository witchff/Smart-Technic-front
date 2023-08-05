import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import openDropdown from 'helpers/openDropdown';
import styles from './Dropdown.module.scss';

type DropdownProps = {
  children?: ReactNode;
  // dropdown?: boolean;
  // setDropdown?: Dispatch<SetStateAction<boolean>>;
  // profile?: boolean;
  // setProfile?: Dispatch<SetStateAction<boolean>>;
};

const Dropdown = ({
  children,
  // profile,
  // setProfile,
  // dropdown,
  // setDropdown,
}) => {
  return (
    <div
      className={styles.dropdown}
      // style={{
      //   position: 'absolute',
      //   top: '0',
      //   right: '0',
      //   width: '100%',
      //   height: '100vh',
      //   zIndex: 100,
      //   float: 'right',
      // }}
      onClick={() => {
        console.log('Click Overlay');
      }}
    >
      {children}
    </div>
  );
};

export default Dropdown;
