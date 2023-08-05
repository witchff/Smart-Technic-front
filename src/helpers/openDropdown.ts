import { Dispatch, SetStateAction } from 'react';

const openDropdown = (setState: Dispatch<SetStateAction<boolean>>): void => {
  setState((prev) => !prev);
};

export default openDropdown;
