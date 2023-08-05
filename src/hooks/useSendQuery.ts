import { useQuery } from '@tanstack/react-query';

export const useSendQuery = (
  req: any,
  key: string[],
  dto?: any,
  state?: any,
) => {
  const { data, isLoading, isFetching, isSuccess, isError } = useQuery({
    queryFn: () => req(dto),
    queryKey: key,
    enabled: state && !!state,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  return { data, isLoading, isFetching, isSuccess, isError };
};
