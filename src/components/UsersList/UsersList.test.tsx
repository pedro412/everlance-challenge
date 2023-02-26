import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UsersList } from './UsersList';
import { usersMock } from '../../mocks';

const mock = {
  users: usersMock,
  isLoading: false,
  hastNextPage: false,
  setSearch: jest.fn(),
  page: 1,
  setPage: jest.fn(),
};

jest.mock('../../hooks/useUsers', () => ({
  useUsers: () => {
    return mock;
  },
}));

test('renders userList component', () => {
  render(<UsersList />, { wrapper: MemoryRouter });

  expect(screen.getByText('tj')).toBeInTheDocument();
  expect(screen.getAllByTestId('user-card')).toHaveLength(2);
});
