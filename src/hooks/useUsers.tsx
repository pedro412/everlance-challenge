import { UserList } from '../types';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { getUsers } from '../api/githubApi';
import { getHasNextPage } from '../utils/utils';

export const useUsers = () => {
  const [users, setUsers] = useState<UserList[]>([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [hastNextPage, setHasNextPage] = useState(false);

  const { data, isLoading, refetch, error, isError } = useQuery(
    ['users', search, page],
    () => getUsers(search, page),
    { staleTime: 1000 * 60 * 60 }
  );

  useEffect(() => {
    if (data?.items) {
      setUsers((prevUsers) =>
        page === 1 ? data.items : [...prevUsers, ...data.items]
      );
      setHasNextPage(getHasNextPage(data?.total_count, page));
    }
  }, [data]);

  useEffect(() => {
    setPage(1);
  }, [search]);

  useEffect(() => {
    refetch();
  }, [page]);

  return {
    users,
    isLoading,
    search,
    error,
    isError,
    hastNextPage,
    setSearch,
    page,
    setPage,
  };
};
