'use client';

import { getProfileAction } from '@/actions/get-profile.action';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import { XIcon } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { SearchProfile } from './SearchWithButton';

export function ProfileHeader() {
  const searchParams = useSearchParams();
  const username = searchParams.get('username');
  const router = useRouter();

  const { data, isLoading, error } = useQuery({
    queryKey: ['profile', username],
    queryFn: async () => await getProfileAction(username),
    enabled: !!username,
    retry: 1,
  });

  const handleRemoveUsername = () => {
    router.push('/'); // Redireciona para a página inicial
  };

  if (isLoading) {
    return (
      <div className="relative mb-8 flex animate-pulse flex-col items-center md:items-start">
        <div className="mb-4 h-8 w-3/4 rounded bg-gray-300" />
        <div className="mb-2 h-6 w-1/3 rounded bg-gray-300" />
        <div className="h-4 w-1/4 rounded bg-gray-300" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="relative flex h-full w-full flex-1 flex-col space-y-6">
        <div className="flex flex-1 flex-row gap-8">
          <div className="flex-1">
            <SearchProfile />
          </div>
        </div>

        {error ? (
          <p>
            No user found with this username{' '}
            <strong className="text-[#4E9F96]">&quot;{username}&quot;</strong>.
          </p>
        ) : null}
      </div>
    );
  }
  const { name, login, bio, location } = data;

  return (
    <div className="relative mb-8">
      <div className="flex flex-1 flex-row">
        <div className="flex-1">
          <h1 className="text-center text-5xl font-extralight underline-offset-auto md:text-left">
            {name}
          </h1>
          <h4 className="text-center text-[24px] font-bold opacity-35 md:text-left">
            @{login}
          </h4>
          <p className="text-center text-xs opacity-60 md:text-left">
            {bio || location}
          </p>
        </div>
        <div className="flex-0">
          <Button onClick={handleRemoveUsername} variant="outline">
            <XIcon className="-ml-1 -mr-1 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
