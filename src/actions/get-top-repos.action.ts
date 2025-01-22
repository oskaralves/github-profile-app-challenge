import axiosInstance from '@/lib/axios';
import { RepoList } from '@/types/repo';

export const getTopRepositoriesAction = async (username: string) => {
  try {
    const { data } = await axiosInstance.get<RepoList>(
      `users/${username}/repos`,
      {
        params: {
          sort: 'stars',
          direction: 'asc',
          per_page: 100,
        },
      }
    );

    const topRepositories = data
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 5);

    return topRepositories;
  } catch {
    throw 'No repository found.';
  }
};
