import { useQuery } from '@tanstack/react-query';
import { loginAuth, registerAuth } from 'api/auth/auth.api';
import React, { useState } from 'react';
import { Auth, FormAuth } from 'types/auth';

type submitForm = {
  data: Auth;
  isFetching: boolean;
  isError: boolean;
  isSuccess: boolean;
  submitForm: (e: React.FormEvent<HTMLFormElement>) => void;
};

const useSubmitAuthForm = (login: string): submitForm => {
  const [user, setUser] = useState<FormAuth>();

  const submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    if (!e) return null;
    e.preventDefault();

    setUser({
      email: e.target[0].value,
      password: e.target[1].value,
    });
  };

  const { data, isFetching, isError, isSuccess } = useQuery({
    queryFn: () => (login === 'login' ? loginAuth(user) : registerAuth(user)),
    queryKey: login === 'login' ? ['login', 'user'] : ['register', 'user'],
    enabled: !!user,
  });

  return { data, isFetching, isError, isSuccess, submitForm };
};

export default useSubmitAuthForm;
