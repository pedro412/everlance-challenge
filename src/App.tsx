import { Navbar } from './components/Navbar';
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
