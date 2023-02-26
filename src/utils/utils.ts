import { PER_PAGE } from '../constants';

export const getHasNextPage = (count: number, currentPage: number): boolean => {
  const totalPages = Math.round(count / PER_PAGE);
  if (totalPages <= currentPage) {
    return false;
  }
  return true;
};
