import React from 'react';
import styles from './Header.module.scss';

const HeaderInfo = () => {
  return (
    <div className={styles.header_info}>
      <span>+7(812)660-50-54</span>
      <span>+7(958)111-95-03</span>
      <span>Пн-вс: с 10:00 до 21:00</span>
    </div>
  );
};

export default HeaderInfo;
