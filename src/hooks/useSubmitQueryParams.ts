import { useNavigate, createSearchParams } from 'react-router-dom';

const useSubmitQueryParams = (
  event?: React.MouseEvent<HTMLElement> | React.ChangeEvent<HTMLInputElement>,
) => {
  const navigate = useNavigate();

  const addQueryParams = (
    event: React.MouseEvent<HTMLElement> | React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const query = event.currentTarget.getAttribute('name');
    const value = event.currentTarget.getAttribute('value');

    navigate({
      pathname: '/catalog',
      search: createSearchParams({
        [query]: value,
      }).toString(),
    });
    location.reload();
  };

  return { addQueryParams };
};

export default useSubmitQueryParams;
