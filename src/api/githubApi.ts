import axios from 'axios';
import { PER_PAGE } from '../constants';
import { GitHubResponse, UserDetail } from '../types';

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {},
});

export const getUsers = async (
  search: string,
  page: number
): Promise<GitHubResponse> => {
  const { data } = await githubApi.get<GitHubResponse>(
    `search/users?q="${search}"&page=${page}&per_page=${PER_PAGE}`
  );
  return data;
};

export const getUser = async (username: string): Promise<UserDetail> => {
  const { data } = await githubApi.get<UserDetail>(`/users/${username}`);
  return data;
};
