import { useUsers } from '../../hooks/useUsers';
import { TableHeader } from './TableHeader';
import { UsersTable } from './UsersTable';

export const UsersList = () => {
  const { users, isLoading, hastNextPage, setSearch, page, setPage } =
    useUsers();

  return (
    <>
      <TableHeader onSearchChange={(value: string) => setSearch(value)} />
      <UsersTable users={users} />
      <div className="flex items-center justify-end mt-4">
        {hastNextPage && (
          <button
            className="w-32 p-x-3 py-2 border-solid border-2 rounded"
            onClick={() => setPage(page + 1)}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Load more'}
          </button>
        )}
      </div>
    </>
  );
};
