import { UserDetail } from '../types';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { getUser, getUsers } from '../api/githubApi';
import { getHasNextPage } from '../utils/utils';

export const useUserDetails = ({
  username = '',
}: {
  username: string | undefined;
}) => {
  const { data, isLoading } = useQuery(
    ['users', { username }],
    () => getUser(username),
    { staleTime: 1000 * 60 * 60 }
  );

  return {
    data,
    isLoading,
  };
};
