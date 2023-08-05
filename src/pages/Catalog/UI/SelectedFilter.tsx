import React from 'react';
import styles from '../Catalog.module.scss';

const SelectedFilter = () => {
  return (
    <li className={styles.filter}>
      <span className={styles.filter_title}>
        Цена: <span className={styles.filter_value}>4200 Р</span>
      </span>
      <button className={styles.filter_btn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="14"
          viewBox="0 0 10 14"
          fill="none"
        >
          <path
            d="M8.5 5L1.5 12"
            stroke="#F15152"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.5 5L8.5 12"
            stroke="#F15152"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </li>
  );
};

export default SelectedFilter;
