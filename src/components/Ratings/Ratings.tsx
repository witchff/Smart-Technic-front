import React, { FC, useState } from 'react';
import Rating from 'ui/Rating/Rating';
import { rating } from 'constants/static-data';
import styles from './Ratings.module.scss';

type RatingsProps = {
  editing?: boolean;
};

const Ratings: FC<RatingsProps> = ({ editing = false }): JSX.Element => {
  const [active, setActive] = useState('');
  const chooseRating = (id: string) => {
    setActive(id);
  };

  return (
    <div className={styles.ratings}>
      <div className={styles.wrapper}>
        {rating.map((item) => (
          <Rating
            key={item.id}
            id={item.id}
            chooseRating={editing && chooseRating}
            active={active}
          />
        ))}
      </div>
    </div>
  );
};

export default Ratings;
