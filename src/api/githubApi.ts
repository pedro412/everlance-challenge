import axios from 'axios';
import { PER_PAGE } from '../constants';
import { GitHubResponse } from '../types';

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/search',
  headers: {},
});

export const getUsers = async (
  search: string,
  page: number
): Promise<GitHubResponse> => {
  const { data } = await githubApi.get<GitHubResponse>(
    `/users?q="${search}"&page=${page}&per_page=${PER_PAGE}`
  );
  return data;
};
