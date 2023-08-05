import React, { ChangeEvent, FC, useState } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import Filter from 'ui/Filter/Filter';

type FiltersProps = {
  filters: any[];
};

const Filters: FC<FiltersProps> = ({ filters }) => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [queryParam, setQueryParam] = React.useState([]);
  const [string, setString] = useState('');
  const { search } = useLocation();
  const navigate = useNavigate();
  const chooseFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.currentTarget.name;
    const value = event.currentTarget.value;
    const checkFilter = event.currentTarget.checked;

    if (checkFilter) {
      return setQueryParam((prev) => [...prev, { [query]: value }]);
    } else {
      return setQueryParam((prev) =>
        prev.filter((item) => item !== query && item[query] !== value),
      );
    }
  };
  React.useEffect(() => {
    const convertInStringParam = (): string => {
      if (queryParam === undefined) return '';

      queryParam.forEach((item) => {
        for (const key in item) {
          if (!item[key]) return;
          setString((prev) => prev + `&${key}=${item[key]}`);
        }
      });
    };

    convertInStringParam();
    navigate(search + string);
  }, [queryParam]);

  return (
    <>
      {filters.map((filter) => (
        <Filter
          id={filter.id}
          title={filter.title}
          value={filter.filter_value}
          key={filter.id}
          chooseFilter={chooseFilter}
        />
      ))}
    </>
  );
};

export default Filters;
