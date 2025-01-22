import axiosInstance from '../lib/axios';
import { GithubProfile } from '../types/profile';

export const getProfileAction = async (username: string | null) => {
  try {
    const { data } = await axiosInstance.get<GithubProfile>(
      `users/${username}`
    );
    return data;
  } catch {
    throw 'No profile found.';
  }
};
