import { Avatar } from '@/components/Avatar';
import { ProfileHeader } from '@/components/ProfileHeader';
import { RepoList } from '@/components/RepoList';

export default function Home() {
  return (
    <div className="flex w-full max-w-[1024px] flex-1 flex-col items-center gap-5 md:flex-row md:items-start">
      <div className="flex-0 md:flex-1 md:pr-14">
        <Avatar />
      </div>
      <div className="w-full">
        <ProfileHeader />
        <RepoList />
      </div>
    </div>
  );
}
