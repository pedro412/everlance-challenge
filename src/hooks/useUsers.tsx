import { GitHubResponse, User } from '../types';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

const getUsers = async (
  search: string,
  page: number
): Promise<GitHubResponse> => {
  const res = await fetch(
    `https://api.github.com/search/users?q="${search}"&page=${page}&per_page=10`
  );
  return res.json();
};

export const useUsers = ({
  search,
  page,
}: {
  search: string;
  page: number;
}) => {
  const [users, setUsers] = useState<User[]>([]);

  const { data, isLoading, refetch, error, isError } = useQuery(
    ['users', { search, page }],
    () => getUsers(search, page),
    { refetchOnWindowFocus: false }
  );

  useEffect(() => {
    if (data?.items) {
      setUsers(data?.items);
    }
  }, [data]);

  useEffect(() => {
    refetch();
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
  };
};
