import { useQuery } from '@tanstack/react-query';
import { getUser } from '../api/githubApi';

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
