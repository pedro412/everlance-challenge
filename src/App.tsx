import { TableHeader } from './components/TableHeader';
import { Navbar } from './components/Navbar';
import { UsersTable } from './components/UsersTable';
import { useUsers } from './hooks/useUsers';

export const App = () => {
  const { users, isLoading, hastNextPage, search, setSearch, page, setPage } =
    useUsers();

  return (
    <div>
      <Navbar />
      <div className="max-w-[1024px] m-auto my-14">
        <TableHeader
          search={search}
          onSearchChange={(value: string) => setSearch(value)}
        />
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
      </div>
    </div>
  );
};
