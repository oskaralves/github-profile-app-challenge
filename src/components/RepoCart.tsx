'use client';

import { formatNumberIntl } from '@/utils/number';
import { StarIcon } from 'lucide-react';
import { memo } from 'react';

type RepoCardProps = {
  id: number;
  name: string;
  description?: string;
  stargazers_count: number;
  url: string;
};
export const RepoCard = memo(function RepoCardComponent({
  id,
  name,
  description,
  stargazers_count,
  url,
}: RepoCardProps) {
  return (
    <a
      href={url}
      key={`repo-item-${id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex flex-row items-center justify-between gap-2 border-l-[6px] border-[#4E9F96] p-4 py-2 pl-8 shadow-none transition-transform duration-300 hover:translate-x-2 hover:shadow-lg focus:shadow-lg focus:outline-none"
    >
      <div className="flex-1 flex-col">
        <h4 className="text-6 font-bold">{name}</h4>
        <p className="text-4">{description ?? name}</p>
      </div>
      <div className="flex-0 flex flex-row items-center gap-2">
        <StarIcon className="size-3 opacity-35" />{' '}
        <span className="text-xs opacity-60">
          {formatNumberIntl(stargazers_count ?? 0)}
        </span>
      </div>
    </a>
  );
});
