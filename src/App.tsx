import { TableHeader } from './components/TableHeader';
import { Navbar } from './components/Navbar';
import { UsersTable } from './components/UsersTable';
import { useUsers } from './hooks/useUsers';
import { Outlet } from 'react-router';

export const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1024px] m-auto my-14">
        <Outlet />
      </div>
    </div>
  );
};
