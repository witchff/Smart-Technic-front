import React, { FC, ReactNode, ChangeEvent, MouseEvent } from 'react';
import Input from 'ui/Input/Input';
import InputIcon from 'ui/Input/InputIcon';
import InputLabel from 'ui/Input/InputLabel';
import { getStatusIcon } from 'helpers/getInputIcons';
import styles from './InputGroup.module.scss';

interface InputControl {
  icon?: 'default' | 'password' | 'dropdown';
  status?: 'default' | 'error' | 'success';
  label?: ReactNode;
  width?: string;
  text?: string;
  type?: string;
  className?: 'input' | 'checkbox';
  query?: string;
  value?: string;
  defValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: MouseEvent<HTMLInputElement>) => void;
}

const InputControl: FC<InputControl> = ({
  icon,
  status = 'default',
  label = '',
  width,
  text,
  type,
  query,
  value,
  defValue,
  className,
  onChange,
}) => {
  return (
    <div style={{ width }} className={styles.inputControl}>
      {type !== 'checkbox' && <InputLabel>{label}</InputLabel>}
      <Input
        defValue={defValue}
        status={status}
        icon={icon}
        className={className}
        type={type}
        text={text}
        query={query}
        value={value}
        label={label}
        onChange={onChange}
      />
      <InputIcon className="status">{getStatusIcon(status)}</InputIcon>
    </div>
  );
};

export default InputControl;
