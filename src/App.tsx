import './App.css';
import { TableHeader } from './components/TableHeader';
import { Navbar } from './components/Navbar';
import { UsersTable } from './components/UsersTable';
import { useUsers } from './hooks/useUsers';
import { useState } from 'react';

export const App = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const { users, isLoading } = useUsers({
    search,
    page,
  });

  return (
    <div>
      <Navbar />
      <div className="max-w-[1024px] m-auto mt-14">
        <TableHeader
          search={search}
          onSearchChange={(value: string) => setSearch(value)}
        />
        {isLoading ? 'Loading...' : <UsersTable users={users} />}
        <div className="flex items-center justify-end mt-4">
          <button
            className="w-32 p-x-3 py-2 border-solid border-2 rounded"
            onClick={() => setPage(page + 1)}
          >
            Loard more {page}
          </button>
        </div>
      </div>
    </div>
  );
};
