import React, { ChangeEvent, FC, useState } from 'react';
import Title from 'ui/Title/Title';
import InputCheckbox from 'components/InputCheckbox/InputCheckbox';
import { getIcon } from 'helpers/getInputIcons';
import styles from './Filter.module.scss';

type FilterProps = {
  id: number;
  title: string;
  value: any[];
  chooseFilter?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Filter: FC<FilterProps> = ({
  title,
  id,
  value,
  chooseFilter,
}): JSX.Element => {
  const [selectFilter, setSelectFilter] = useState<number>();

  const openDropdown = (id: number) => {
    if (selectFilter === id) {
      return setSelectFilter(null);
    }

    setSelectFilter(id);
  };

  const values = React.useMemo(() => {
    return value.map((value) => (
      <InputCheckbox
        onChange={chooseFilter}
        label={value.title}
        id={value.id}
        key={value.id}
        name={value.query}
        query={value.value}
      />
    ));
  }, [value]);

  return (
    <div id={`${id}`} className={styles.filter}>
      <div className={styles.title}>
        <Title
          style={{
            fontSize: '16px',
            fontWeight: '700',
            color: '#070C11',
            lineHeight: '130%',
          }}
        >
          {title}
        </Title>
        <div onClick={() => openDropdown(id)}>{getIcon('dropdown')}</div>
      </div>
      <div className={`${styles.value} ${selectFilter === id && styles.open}`}>
        {/* {value.map((value) => (
          <InputCheckbox
            onChange={chooseFilter}
            label={value.title}
            id={value.id}
            key={value.id}
            name={value.query}
            query={value.value}
          />
        ))} */}
        {values}
      </div>
    </div>
  );
};

export default Filter;
