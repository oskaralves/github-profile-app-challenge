'use client';

import { getProfileAction } from '@/actions/get-profile.action';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export function Avatar() {
  const searchParams = useSearchParams();
  const username = searchParams.get('username');

  const { data, isLoading } = useQuery({
    queryKey: ['profile', username],
    queryFn: () => getProfileAction(username),
    enabled: !!username,
  });

  return (
    <div className="relative h-[272px] w-[272px] overflow-hidden rounded-full border-[5px] border-[#4E9F96]">
      {isLoading ? (
        <div className="relative z-20 h-full w-full animate-pulse bg-gray-300" />
      ) : null}
      <Image
        src={data?.avatar_url ?? '/images/defaults/avatar.svg'}
        fill
        alt="profile-image"
      />
    </div>
  );
}
