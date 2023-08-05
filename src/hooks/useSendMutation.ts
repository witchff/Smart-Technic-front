import { FormEvent } from 'react';
import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

const useSendMutation = (
  req: any,
  key: string[],
  refreshKey?: string[],
  event?: FormEvent<HTMLFormElement>,
) => {
  const client = useQueryClient();

  const { mutate, isLoading }: UseMutationResult<any> = useMutation({
    mutationFn: req,
    mutationKey: key,
    cacheTime: Infinity,
    onSuccess: (data) => {
      client.invalidateQueries({
        queryKey: refreshKey && refreshKey,
      });
      client.setQueryData(refreshKey, data);
    },
  });

  const submitMutate = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const elements = Object.fromEntries(formData.entries());

    mutate(elements);
  };

  return { submitMutate, isLoading };
};

export default useSendMutation;
