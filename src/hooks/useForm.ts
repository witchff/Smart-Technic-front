import { FormEvent, useState } from 'react';

const useForm = (event?: FormEvent<HTMLFormElement>) => {
  const [personalData, setPersonalData] = useState({});

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const elements = new FormData(event.currentTarget);
    const form = Object.fromEntries(elements.entries());

    setPersonalData({ ...form });
  };

  return { personalData, submitForm };
};

export default useForm;
