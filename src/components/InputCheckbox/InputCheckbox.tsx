import React, { ChangeEvent, FC } from 'react';
import styles from './InputCheckbox.module.scss';

type InputCheckboxProps = {
  label?: string;
  name?: string;
  query?: string;
  id?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const InputCheckbox: FC<InputCheckboxProps> = ({
  label,
  name = 'text',
  query = '12345',
  id,
  onChange,
}): JSX.Element => {
  return (
    <label className={styles.checkbox} htmlFor={id}>
      <input
        onChange={(event) => (onChange ? onChange(event) : null)}
        id={id}
        type="checkbox"
        name={name}
        value={query}
      />
      <span>{label}</span>
    </label>
  );
};

export default InputCheckbox;
