import React, { FC, useState } from 'react';
import styles from './Input.module.scss';
import InputControl from 'components/InputGroup/InputGroup';
import { getIcon } from 'helpers/getInputIcons';
import InputIcon from './InputIcon';
import InputLabel from './InputLabel';

// interface InputProps extends InputControl {}

const Input: FC<InputControl> = ({
  text = '',
  type = 'text',
  className = 'input',
  status = 'default',
  icon = 'default',
  query,
  value,
  label,
  defValue,
  onChange,
}): JSX.Element => {
  const [password, setPassword] = useState(false);

  const showPassword = (): void => {
    setPassword(!password);
  };

  return (
    <div className={styles.wrapper}>
      <input
        defaultValue={defValue}
        name={query}
        value={value}
        onChange={(e) => (onChange ? onChange(e) : null)}
        maxLength={32}
        placeholder={text}
        className={`${styles[className]} ${styles[status]}`}
        type={password ? 'text' : type}
        autoComplete="on"
      />
      <InputIcon className="icon" onClick={showPassword}>
        {getIcon(icon)}
      </InputIcon>
    </div>
  );
};

export default Input;
