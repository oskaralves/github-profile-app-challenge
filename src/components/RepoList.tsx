'use client';

import { getTopRepositoriesAction } from '@/actions/get-top-repos.action';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { RepoCard } from './RepoCart';

export function RepoList() {
  const searchParams = useSearchParams();
  const username = searchParams.get('username');

  const { data, isLoading, error } = useQuery({
    queryKey: ['repos', username],
    queryFn: () => (username ? getTopRepositoriesAction(username) : []),
    enabled: !!username,
  });

  if (isLoading) {
    return (
      <div className="w-full space-y-5">
        <div className="border-b border-[rgba(0,0,0,0.16)] py-5">
          <h3 className="text-[32px] font-bold">Top Repositories</h3>
        </div>

        <div className="flex w-full flex-col gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={`skeleton-item-${index}`}
              className="relative flex animate-pulse flex-row items-center justify-between gap-2 border-l-[6px] border-[#4E9F96] p-4 py-2 pl-8"
            >
              <div className="flex-1">
                <div className="mb-2 h-6 w-3/4 rounded bg-gray-300"></div>
                <div className="h-4 w-1/2 rounded bg-gray-300"></div>
              </div>
              <div className="flex-0 h-4 w-12 rounded bg-gray-300"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error instanceof Error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="w-full space-y-5">
      <div className="border-b border-[rgba(0,0,0,0.16)] py-5">
        <h3 className="text-[32px] font-bold">Top Repositories</h3>
      </div>

      <div className="flex h-full w-full flex-col gap-4">
        {username && (!data || data.length === 0) ? (
          <p>No repositories found.</p>
        ) : null}
        {data?.map(({ id, name, description, stargazers_count, html_url }) => (
          <RepoCard
            key={`repo-item-${id}`}
            {...{ id, name, description, stargazers_count, url: html_url }}
          />
        ))}
      </div>
    </div>
  );
}
