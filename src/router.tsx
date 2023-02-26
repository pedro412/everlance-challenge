import { createBrowserRouter, Navigate } from 'react-router-dom';
import { App } from './App';
import { UserDetails } from './components/UserDetails';
import { UsersList } from './components/UsersList';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <UsersList /> },
      { path: 'user/:username', element: <UserDetails /> },
      { path: '*', element: <Navigate to="/" /> },
    ],
  },
]);
