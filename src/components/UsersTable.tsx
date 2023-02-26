import { UserList } from '../types';
import { UserCard } from './UserCard';

export const UsersTable = ({ users }: { users?: UserList[] }) => {
  return (
    <div className="mt-10 grid grid-cols-users gap-y-6 gap-x-8">
      {users?.map(({ login, html_url, avatar_url, id }) => (
        <UserCard
          key={id}
          name={login}
          url={html_url}
          profilePic={avatar_url}
        />
      ))}
    </div>
  );
};
